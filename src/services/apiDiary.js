import supabase from "./supabase";

export async function createDiary({ title, description, rating, coverImage }) {
  // get uid
  const { data: userData } = await supabase.auth.getUser();

  const uid = userData.user.id;

  // insert diary page details
  const { data: diaryPageData, error } = await supabase
    .from("diaryPage")
    .insert([{ title, description, rating, uid, cover_image: "" }])
    .select();

  if (error) throw new Error("Cannot add the diary page!");

  const { id } = diaryPageData[0];

  if (!coverImage) {
    return diaryPageData;
  }

  // upload cover image
  const fileName = `cover_image-${id}.png`;
  const filePath = `https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/cover-images/${fileName}`;

  const { error: uploadingCoverImageError } = await supabase.storage
    .from("cover-images")
    .upload(fileName, coverImage);

  if (uploadingCoverImageError) {
    await supabase.from("diaryPage").delete().eq("id", id);
    throw new Error("Cannot upload the cover image!");
  }

  // add file path to the diary page
  const { error: updatingDiaryPageError, data: updatedDiaryPageData } = await supabase
    .from("diaryPage")
    .update({ cover_image: filePath })
    .eq("id", id)
    .select();

  if (updatingDiaryPageError) {
    await supabase.storage.from("cover-images").remove(fileName);
    throw new Error("Cannot upload the cover image!");
  }

  return updatedDiaryPageData;
}

export async function fetchDiaryPages({ title, sortBy }) {
  // get user info
  const { data: userCredentials } = await supabase.auth.getUser();
  const uid = userCredentials?.user?.id;

  // get diary pages
  let query = supabase.from("diaryPage").select("*").eq("uid", uid);

  if (title.trim()) {
    query = query.ilike("title", `%${title.replaceAll(" ", "").trim()}%`);
  }

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.method === "asc",
    });

  const { data: diaryPages, error } = await query;

  if (error) {
    throw new Error("Could not fetch diary pages!");
  }

  return diaryPages;
}

export async function fetchDiaryPage(id) {
  // get uid
  const { data: userCredentials } = await supabase.auth.getUser();
  const uid = userCredentials.user.id;

  // fetch data
  const { data: diaryPage, error } = await supabase
    .from("diaryPage")
    .select("*")
    .eq("uid", uid)
    .eq("id", id);

  if (error) throw new Error("Could not fetch the page data!");

  return diaryPage;
}

export async function deleteDiaryPage(id) {
  const { error } = await supabase.from("diaryPage").delete().eq("id", id);

  if (error) throw new Error("Could not delete diary page");
}

export async function editDiary({ editData, id, coverImage }) {
  let { error } = await supabase
    .from("diaryPage")
    .update({ ...editData })
    .eq("id", id)
    .select();

  if (error) throw new Error("Could not update the diary page!");

  // replace cover image
  if (coverImage) {
    console.log(coverImage);
    const fileName = `cover_image-${id}.png`;

    const { error: replaceCoverImageError } = await supabase.storage
      .from("cover-images")
      .update(`${fileName}`, coverImage, {
        upsert: true,
      });

    if (replaceCoverImageError) throw new Error("Cannot update cover image!");
  }
}

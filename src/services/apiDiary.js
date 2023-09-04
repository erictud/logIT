import supabase from "./supabase";

export async function createDiary({ title, description, rating, coverImage }) {
  // get uid
  const { data: userData } = await supabase.auth.getUser();

  const uid = userData.user.id;

  //
  const fileName = `${Math.random()}-${title.toLowerCase().trim().replaceAll(" ", "")}`;
  const filePath = `https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/cover-images/${fileName}`;

  const { data: diaryPageData, error } = await supabase
    .from("diaryPage")
    .insert([{ title, description, rating, cover_image: coverImage ? filePath : "", uid }])
    .select();

  if (error) throw new Error("Cannot add the diary page!");

  if (!coverImage) {
    return diaryPageData;
  }

  // UPLOAD cover image

  const { error: uploadingCoverImageError } = await supabase.storage
    .from("cover-images")
    .upload(fileName, coverImage);

  if (uploadingCoverImageError) {
    await supabase.from("diaryPage").delete().eq("uid", uid);
    throw new Error("Cannot upload the cover image!");
  }

  return diaryPageData;
}

export async function fetchDiaryPages() {
  // get user info
  const { data: userCredentials } = await supabase.auth.getUser();
  const uid = userCredentials?.user?.id;
  console.log(uid);

  // get diary pages
  const { data: diaryPages, error } = await supabase.from("diaryPage").select("*").eq("uid", uid);

  if (error) {
    throw new Error("Could not fetch diary pages!");
  }

  return diaryPages;
}

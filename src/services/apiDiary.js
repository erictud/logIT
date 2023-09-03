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

// https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/cover-images/0.7351690904185424-gfghgfhfgh
// https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/cover-images/0.7351690904185424-gfghgfhfgh?t=2023-09-03T08%3A55%3A53.443Z

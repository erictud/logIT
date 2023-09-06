import supabase from "./supabase";

export async function updateCurrentUser({ pfp, username }) {
  let updateData = {};
  if (username) updateData = { data: { username } };

  // 3) UPDATE USERNAME
  const { data: userData, error } = await supabase.auth.updateUser(updateData);
  const uid = userData.user.id;

  if (error) throw new Error("Could not update user! Try again!");

  if (!pfp) return;

  // 2) UPDATE/CREATE PFP
  const fileName = `pfp-${uid}.png-${Math.random()}`;

  // 2 a) Delete existing pfp
  if (userData.user.user_metadata.pfp) {
    const { data: existingFile } = await supabase.storage.from("pfps").list(`${uid}`);
    const { name } = existingFile[0];
    await supabase.storage.from("pfps").remove([`${uid}/${name}`]);
  }
  // 2 b) Upload the new pfp
  const { error: uploadPfpError } = await supabase.storage
    .from("pfps")
    .upload(`${uid}/${fileName}`, pfp);

  if (uploadPfpError) throw new Error("Could not upload the profile picture!");

  // 2 c) Update user
  const filePath = `https://zixqegipvospxofdkten.supabase.co/storage/v1/object/public/pfps/${uid}/${fileName}`;
  updateData = { data: { pfp: filePath } };
  const { error: updateUserPfpError } = await supabase.auth.updateUser(updateData);

  if (updateUserPfpError) {
    await supabase.storage.from("pfps").remove(fileName);
    throw new Error("Could not upload the profile picture!");
  }

  return;
}

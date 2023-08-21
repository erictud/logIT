import supabase from "./supabase";

export async function signup({ email, password, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        pfp: "",
      },
    },
  });

  if (error) throw new Error("Error while creating user! Try again!");

  return data;
}

export async function login({ email, password }) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw new Error("Invalid credentials");
}

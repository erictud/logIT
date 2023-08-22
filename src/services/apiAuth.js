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
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw new Error("Invalid credentials");

  return { data };
}

export async function getUserDetails() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

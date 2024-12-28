"use server";

import { signIn } from "@/auth";

export const loginAction = async (formData: FormData) => {
  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    redirect: false,
  };

  const res = await signIn("credentials", loginData);
  if (!res) {
    return { success: false, message: "Failed to loign" };
  } else {
    return { success: true, message: "Successfully login!!!" };
  }
};

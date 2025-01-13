"use server";

import { signIn } from "@/auth";
import { cartModel } from "@/models/cartModel";

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

export const addToCartAction = async (productId: string) => {
  try {
    const newCartItem = await cartModel.create({ id: productId });
    console.log(newCartItem);
    const res = await newCartItem.save();
    console.log(res, "addToCartAction");
    if (!res) {
      return { success: false, message: "Failed to save in Database!!!" };
    }

    return { success: true, message: "Successfully save in Database" };
  } catch (error) {
    console.error("Failed to add item to cart:", error);
    throw new Error("Could not add the item to the cart. Please try again.");
  }
};

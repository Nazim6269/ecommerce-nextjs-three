import { userModel } from "@/models/userModel";

export const findUserFromDB = async (email: any) => {
  return await userModel.findOne({ email: email });
};

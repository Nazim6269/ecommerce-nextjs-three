import { mongoUrl } from "@/secret";
import mongoose from "mongoose";

interface ConnectDBResponse {
  success: boolean;
  message: string;
}

export const connectDB = async (): Promise<ConnectDBResponse> => {
  try {
    mongoose.connect(mongoUrl);
    console.log("DB connected Successfully");
    return { success: true, message: "DB connected Successfully" };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

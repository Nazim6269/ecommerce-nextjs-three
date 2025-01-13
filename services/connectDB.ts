import { mongoUrl } from "@/secret";
import mongoose from "mongoose";

interface ConnectDBResponse {
  success: boolean;
  message: string;
}

export const connectDB = async (): Promise<ConnectDBResponse> => {
  try {
    await mongoose.connect(mongoUrl);

    console.log("DB connected successfully");
    return { success: true, message: "DB connected successfully" };
  } catch (error: any) {
    console.error("DB connection error:", error.message);

    return {
      success: false,
      message: `DB connection error: ${error.message}`,
    };
  }
};

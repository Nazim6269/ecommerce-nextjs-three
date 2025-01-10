import { wixClientServer } from "@/lib/WixClientServer";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const wixClient = await wixClientServer();
    const categories = await wixClient.collections.queryCollections().find();

    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
};

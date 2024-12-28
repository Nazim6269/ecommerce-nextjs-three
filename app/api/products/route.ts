import { wixClientServer } from "@/lib/WixClientServer";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const wixClient = await wixClientServer();
    const categories = await wixClient.collections.getCollectionBySlug(
      "all-products"
    );

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};

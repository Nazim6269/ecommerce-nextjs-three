import { wixClientServer } from "@/lib/WixClientServer";
import { NextRequest, NextResponse } from "next/server";

const ALL_PRODUCTS_ID = "00000000-000000-000000-000000000001";

export const GET = async (req: NextRequest) => {
  try {
    const categoryParams =
      req.nextUrl.searchParams.get("category") || "all-products";
    const wixClient = await wixClientServer();
    const categories = await wixClient.collections.getCollectionBySlug(
      categoryParams
    );
    const id = categories?.collection?._id || ALL_PRODUCTS_ID;
    const products = await wixClient.products
      .queryProducts()
      .eq("collectionIds", id)
      .find();

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};

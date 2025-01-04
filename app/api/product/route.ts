import { wixClientServer } from "@/lib/WixClientServer";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const params = req.nextUrl.searchParams.get("category") || "";

    const wixClient = await wixClientServer();
    const data = await wixClient.products
      .queryProducts()
      .eq("slug", params)
      .find();
    console.log(data, "routes");
    const product = data?.items[0] || null;

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
};

import { baseUrl } from "@/secret";
import { MetadataRoute } from "next";

export const revalidte = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = ["all-products", "cap", "soap", "purse", "shoes"];
  let products = [];
  try {
    const res = await fetch(
      `${baseUrl}/api/products?category=${categories[0]}`
    );
    products = await res.json();
    products = products._items;
  } catch (error) {
    console.error("Failed to fetch products:", error);

    products = [
      { category: "electronics", _id: "1" },
      { category: "clothing", _id: "2" },
    ];
  }

  const productEntries: MetadataRoute.Sitemap = products.map(
    ({ category, _id }: { category: string; _id: string }) => ({
      url: `${baseUrl}/product/${category}/${_id}`,
    })
  );

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/products?category=${category}`,
  }));

  return [
    { url: `${baseUrl}/products` },
    ...categoryEntries,
    ...productEntries,
  ];
}

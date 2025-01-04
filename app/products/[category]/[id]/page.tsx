import ProductDetails from "@/components/productDetails/ProductDetails";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> => {
  const { category } = params;
  console.log(category, "generatemetadata");
  const res = await fetch(
    `http://localhost:3000/api/product?category=${category}`
  );
  const product = await res.json();

  return { title: product.name, description: product.description };
};

const ProductsDetailsPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const { category } = params;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${category}`
  );
  const product = await res.json();
  console.log(product, "page");

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <ProductDetails product={product} />
      </div>
    </section>
  );
};

export default ProductsDetailsPage;

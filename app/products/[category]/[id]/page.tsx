import ProductDetails from "@/components/productDetails/ProductDetails";
import { Metadata } from "next";

type Params = Promise<{
  category: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${category}`
  );
  const product = await res.json();

  return { title: product.name, description: product.description };
};

const ProductsDetailsPage = async ({ params }: { params: Params }) => {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${category}`
  );
  const product = await res.json();

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <ProductDetails product={product} />
      </div>
    </section>
  );
};

export default ProductsDetailsPage;

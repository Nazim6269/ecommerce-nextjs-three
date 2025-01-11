import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import FilterSidebar from "@/components/filteringBar/FilterSideBar";
import SortingBar from "@/components/filteringBar/SortingBar";
import ProductCard, { ProductCardType } from "@/components/product/ProductCard";
import { Metadata } from "next";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "Products",
  description: "This are all products",
};

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const resolvedParams = await searchParams;
  const slugParam = resolvedParams.category;
  const category = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const categoryParams = category || "all-products";

  const res = await fetch(
    `http://localhost:3000/api/products?category=${categoryParams}`
  );
  let products = await res.json();
  products = products._items;

  return (
    <section className="bg-gray-50 antialiased dark:bg-gray-900 ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* <!-- Heading & Filters --> */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <Breadcrumbs />
            <h2 className="mt-1 text-xl font-semibold capitalize text-gray-900 dark:text-white sm:text-2xl">
              {category ? category : "all-products"}
            </h2>
          </div>
          <SortingBar />
        </div>
        <div className="flex gap-2">
          <div>
            <FilterSidebar />
          </div>
          {/* all products section */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
            {products?.map((product: ProductCardType) => (
              <ProductCard
                product={product}
                key={product._id}
                category={categoryParams}
              />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

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
  const queryCategoryParam = resolvedParams.category;
  const querySortParam = resolvedParams.sort;

  const category = Array.isArray(queryCategoryParam)
    ? queryCategoryParam[0]
    : queryCategoryParam?.toLocaleLowerCase();
  const categoryArray = category?.split(",");

  const categoryParams =
    categoryArray?.length! < 2 ? categoryArray?.[0] : "all-products";

  const res = await fetch(
    `http://localhost:3000/api/products?category=${categoryParams}`
  );
  let products = await res.json();
  products = products._items;

  let filteredData: ProductCardType[] = [];

  if (!categoryArray) {
    filteredData = products;
  } else {
    filteredData =
      categoryArray?.length! < 2
        ? products
        : products.filter((product: ProductCardType) => {
            return categoryArray?.some((category) =>
              product.slug?.toLowerCase().includes(category.toLowerCase())
            );
          });
  }

  switch (querySortParam) {
    case "increasing-price":
      filteredData = filteredData.sort(
        (a, b) => a.priceData.price - b.priceData.price
      );
      break;
    case "decreasing-price":
      filteredData = filteredData.sort(
        (a, b) => b.priceData.price - a.priceData.price
      );
      break;

    default:
      break;
  }

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
          {/* =================sorting bar============ */}
          <SortingBar />
        </div>
        <div className="flex gap-2">
          {/* ==========filter bar============= */}
          <div>
            <FilterSidebar />
          </div>
          {/* all products section */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
            {filteredData?.map((product: ProductCardType) => (
              <div className="h-auto" key={product._id}>
                {" "}
                <ProductCard product={product} category={categoryParams} />
              </div>
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

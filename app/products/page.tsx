import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import FilterSidebar from "@/components/filteringBar/FilterSideBar";
import SortingBar from "@/components/filteringBar/SortingBar";
import Pagination from "@/components/pagination/Pagination";
import ProductCard, { ProductCardType } from "@/components/product/ProductCard";
import { productsPerPage } from "@/secret";
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
  const queryPageParam = resolvedParams.page;

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

  //pagination functionality
  const currentPage: any = (queryPageParam as string) || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + productsPerPage
  );

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
            {paginatedData?.map((product: ProductCardType) => (
              <div className="h-auto" key={product._id}>
                <ProductCard product={product} category={categoryParams} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-center">
          <div className="mb-3">
            <Pagination totalProducts={filteredData.length} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

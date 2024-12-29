import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories = await res.json();

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shop by category
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories?._items?.map((item: any) => (
            <Link
              key={item._id}
              href={`/products?category=${item.slug}`}
              className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="go to category"
            >
              <Image
                src={item?.media?.mainMedia?.image?.url || "/fallback.png"}
                alt="category image"
                width={52}
                height={12}
              />
              <span className="text-sm capitalize font-medium text-gray-900 dark:text-white ml-2">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

"use client";

import { productsPerPage } from "@/secret";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Pagination = ({ totalProducts }: { totalProducts: number }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalBtn = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    setCurrentPage(page);
    params.set("page", page.toString());
    router.replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalBtn }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
            className={`${
              isActive
                ? "bg-black text-white"
                : "bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700"
            } rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

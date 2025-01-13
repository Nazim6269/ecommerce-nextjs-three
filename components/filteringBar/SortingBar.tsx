"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SortingBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSort = (e: React.MouseEvent<HTMLElement>) => {
    const params = new URLSearchParams(searchParams);
    const itemContent = e.currentTarget.textContent;
    const modifiedContent = itemContent
      ?.trim()
      .split(" ")
      .join("-")
      .toLocaleLowerCase();
    params.set("sort", modifiedContent!);
    router.replace(`?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center space-x-4 cursor-pointer">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        id="sortDropdownButton1"
        data-dropdown-toggle="dropdownSort1"
        type="button"
        className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
      >
        <svg
          className="-ms-0.5 me-2 h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
          />
        </svg>
        Sort
        <svg
          className="-me-0.5 ms-2 h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdownSort1"
          className="absolute top-12 z-50 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
          data-popper-placement="bottom"
        >
          <ul
            className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
            aria-labelledby="sortDropdownButton"
          >
            <li
              onClick={handleSort}
              className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {" "}
              Increasing price{" "}
            </li>
            <li
              onClick={handleSort}
              className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {" "}
              Decreasing price{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortingBar;

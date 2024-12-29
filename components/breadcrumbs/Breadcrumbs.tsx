"use client";

import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname().split("/").filter(Boolean);

  return (
    <nav
      className="justify-between px-4 py-3 text-gray-700  border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
        {pathname?.map((item, index) => (
          <li aria-current="page" key={item}>
            <div className="flex items-center">
              {index > 0 ? (
                <svg
                  className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              ) : (
                ""
              )}
              <a
                href="#"
                className="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {item}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

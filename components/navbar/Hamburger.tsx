"use client";

import React, { useState } from "react";

const Hamburger = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        type="button"
        data-collapse-toggle="ecommerce-navbar-menu-1"
        aria-controls="ecommerce-navbar-menu-1"
        aria-expanded="false"
        className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
      >
        <span className="sr-only">Open Menu</span>
        <svg
          className="w-5 h-5"
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
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
      {openMenu && (
        <div
          id="ecommerce-navbar-menu-1"
          className="absolute w-56 top-13 right-7 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3  px-4 mt-4"
        >
          <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Gift Ideas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Home & Garden
              </a>
            </li>
          </ul>
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            type="button"
            className="my-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white "
            role="button"
          >
            {" "}
            Close{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;

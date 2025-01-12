"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type CategoriesType = {
  name: string;
};

const CategoryFilter: React.FC<{ categories: CategoriesType[] }> = ({
  categories,
}) => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const pathname = usePathname();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, nextSibling } = e.target;
    const category = nextSibling?.textContent;

    if (!category) return;
    const params = new URLSearchParams(searchparams);
    const currentCategories = params.get("category")?.split(",") || [];

    if (checked) {
      if (!currentCategories.includes(category)) {
        currentCategories.push(category);
      }
    } else {
      const index = currentCategories.indexOf(category);
      if (index > -1) {
        currentCategories.splice(index, 1);
      }
    }

    if (currentCategories.length > 0) {
      params.set("category", currentCategories.join(","));
    } else {
      params.delete("category");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <ul className="space-y-2">
      {categories?.map((category) => (
        <li key={category.name}>
          <label className="flex capitalize items-center text-gray-600">
            <input
              onChange={handleClick}
              type="checkbox"
              className="w-4 h-4 text-blue-500 mr-2"
            />
            {category.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;

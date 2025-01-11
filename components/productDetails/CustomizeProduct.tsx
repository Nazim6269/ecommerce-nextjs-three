"use client";

import React, { useState } from "react";
import { ProductVariantType } from "../product/ProductCard";

const CustomizeProduct: React.FC<{ variants: ProductVariantType[] }> = ({
  variants,
}) => {
  const [selected, setSelected] = useState<{ [key: string]: string }>({});

  const handleClick = (optionName: string, choiceDesc: string) => {
    setSelected((prev) => {
      const updated = { ...prev, [optionName]: choiceDesc };
      return updated;
    });
  };

  const variantInStock = () => {};

  // Generate size and color arrays
  let sizeArray: string[] = [];
  let colorArray: string[] = [];

  variants.forEach((variant) => {
    const size = variant.choices.Size;
    const color = variant.choices.Color;

    if (!sizeArray.includes(size)) sizeArray.push(size);
    if (!colorArray.includes(color)) colorArray.push(color);
  });

  return (
    <div className="mt-2 select-none">
      <div className="capitalize font-semibold my-3">Size</div>
      <ul className="flex gap-2">
        {sizeArray?.map((item) => {
          const isSelected = selected.size === item;
          return (
            <li
              onClick={() => handleClick("size", item)}
              key={item}
              className={`${
                isSelected ? "bg-pink-500" : "bg-blue-600"
              } text-white flex items-center justify-center h-8 rounded-md capitalize px-2`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="capitalize font-semibold my-3">color</div>
      <ul className="flex gap-2 ">
        {colorArray.map((color) => {
          const isSelected = selected.color === color;
          return (
            <li
              key={color}
              onClick={() => handleClick("color", color)}
              style={{ backgroundColor: color }}
              className="w-9 h-9 rounded-full border flex justify-center items-center"
            >
              {isSelected && (
                <div className="w-9 h-9 rounded-full ring-4 ring-offset-2 ring-offset-white"></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomizeProduct;

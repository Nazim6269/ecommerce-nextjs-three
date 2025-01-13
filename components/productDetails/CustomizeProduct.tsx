"use client";

import React, { useState } from "react";
import { ProductVariantType } from "../product/ProductCard";

export type variantChoices = {
  Size: string;
  Color: string;
};

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

  const variantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) =>
            variantChoices[key as keyof variantChoices] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity > 0
      );
    });
  };

  // Generate size and color arrays
  const sizeArray: string[] = [];
  const colorArray: string[] = [];
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
          const isSelected = selected.Size === item;
          const disabled = !variantInStock({ ...selected, Size: item });

          return (
            <li
              onClick={() => handleClick("Size", item)}
              key={item}
              className={`${
                isSelected ? "bg-pink-500" : "bg-blue-600"
              } text-white flex items-center justify-center h-8 rounded-md capitalize px-2 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="capitalize font-semibold my-3">color</div>
      <ul className="flex gap-2 ">
        {colorArray.map((color) => {
          const isSelected = selected.Color === color;
          const disabled = !variantInStock({ ...selected, Color: color });
          return (
            <li
              key={color}
              onClick={() => handleClick("Color", color)}
              style={{
                backgroundColor: color,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              className="relative w-9 h-9 rounded-full border flex justify-center items-center"
            >
              {isSelected && (
                <div className="w-9 h-9 rounded-full ring-4 ring-offset-2 ring-offset-white"></div>
              )}
              {disabled && (
                <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomizeProduct;

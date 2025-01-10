"use client";

import React, { useState } from "react";
import { ProductVariantType } from "../product/ProductCard";

const CustomizeProduct: React.FC<{ variants: ProductVariantType[] }> = ({
  variants,
}) => {
  const [selected, setSelected] = useState("");

  console.log(variants, "variants");

  const handleClick = () => {
    console.log("object");
  };

  //size array
  let sizeArray: string[] = [];
  variants.reduce((acc, cur) => {
    const size = cur.choices.Size;
    if (!sizeArray.includes(size)) {
      sizeArray.push(size);
    }
    return acc;
  }, []);

  //color array
  let colorArray: string[] = [];
  variants.reduce((acc, cur) => {
    const color = cur.choices.Color;
    if (!colorArray.includes(color)) {
      colorArray.push(color);
    }
    return acc;
  }, []);

  return (
    <div className="mt-2 select-none">
      <div className="capitalize font-semibold my-3">Size</div>
      <ul className="flex gap-2">
        {sizeArray?.map((item) => {
          return (
            <li
              onClick={handleClick}
              key={item}
              className="bg-blue-600 text-white flex items-center justify-center h-8 rounded-md capitalize px-2"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="capitalize font-semibold my-3">color</div>
      <ul className="flex gap-2 ">
        {colorArray.map((color) => (
          <li
            style={{ backgroundColor: color }}
            className="w-9 h-9 rounded-full border"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CustomizeProduct;

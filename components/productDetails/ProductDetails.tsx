import Image from "next/image";
import { ProductCardProps } from "../product/ProductCard";
import CustomizeProduct from "./CustomizeProduct";

const ProductDetails: React.FC<ProductCardProps> = ({ product }) => {
  const {
    name,
    description,
    priceData: { currency, price, discountedPrice },
    media: {
      mainMedia: {
        image: { url },
      },
    },
    stock: { inStock },
    variants,
  } = product;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <Image
          className="w-full"
          src={url}
          alt="primary image"
          width={400}
          height={322}
        />
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {name}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-xl line-through font-extrabold text-gray-400 sm:text-xl dark:text-white">
            {currency}-{price}
          </p>
          <p className=" font-extrabold text-green-500 sm:text-2xl dark:text-white">
            {currency}-{discountedPrice}
          </p>
          <p>
            {inStock ? (
              <span className="text-pink-500 capitalize">avaiable</span>
            ) : (
              <span className="text-red-600 capitalize">out of stock</span>
            )}
          </p>
        </div>

        {/* Customize products */}
        <CustomizeProduct variants={variants} />

        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <a
            href="#"
            title=""
            className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
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
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Add to favorites
          </a>

          <a
            href="#"
            title=""
            className="text-white mt-4 sm:mt-0 bg-black font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
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
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </a>
        </div>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

        <p className="mb-6 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

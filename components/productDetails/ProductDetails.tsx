import Image from "next/image";
import { ProductCardProps } from "../product/ProductCard";
import CustomizeProduct from "./CustomizeProduct";
import Add from "./Add";

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

        {/* Add to whishlist and add to cart  */}
        <Add productId={product._id} />
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

        <p className="mb-6 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

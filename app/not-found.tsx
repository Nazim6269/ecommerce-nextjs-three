"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image src={"/404.png"} alt="404 image" width={192} height={52} />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => router.back()}
        className="px-6 py-3 bg-black text-white font-medium rounded "
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;

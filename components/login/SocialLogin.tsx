"use client";

import { signIn } from "next-auth/react";

const SocialLogin = () => {
  const handleClick = async (provider: string) => {
    try {
      await signIn(provider, {
        callbackUrl: "http://localhost:3000/",
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between gap-2">
      <button
        onClick={() => handleClick("google")}
        type="submit"
        className="w-full px-2 py-2 mt-4 bg-red-500 text-white font-medium  hover:bg-blue-600"
      >
        Google
      </button>

      <button
        onClick={() => handleClick("facebook")}
        type="submit"
        className="w-full px-2 py-2 mt-4 bg-blue-500 text-white font-medium hover:bg-blue-600"
      >
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;

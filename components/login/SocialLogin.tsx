import React from "react";

const SocialLogin = () => {
  return (
    <div className="flex justify-between gap-2">
      <button
        type="submit"
        className="w-full px-2 py-2 mt-4 bg-red-500 text-white font-medium  hover:bg-blue-600"
      >
        Google
      </button>

      <button
        type="submit"
        className="w-full px-2 py-2 mt-4 bg-blue-500 text-white font-medium hover:bg-blue-600"
      >
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;

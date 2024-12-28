"use client";

import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      className="inline-flex items-center bg-black text-white rounded-sm justify-center p-2  capitalize text-sm font-medium leading-none  dark:text-white"
    >
      logout
    </button>
  );
};

export default Logout;

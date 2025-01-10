"use client";
import Link from "next/link";
import SocialLogin from "./SocialLogin";
import { loginAction } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      setLoading(true);
      const res = await loginAction(formData);
      if (res.success) {
        router.push("/");
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.log(error);
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      {/* Email */}
      {error && <span>{error}</span>}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-black text-white font-medium rounded-lg "
      >
        {loading ? "Submitting..." : "Login"}
      </button>
      <SocialLogin />

      {/* Additional Options */}
      <div className="mt-4 text-md text-center text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/register"
          aria-label="go to register"
          className="text-blue-500 hover:underline"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

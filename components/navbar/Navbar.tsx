import Image from "next/image";
import Link from "next/link";
import Logout from "../login/Logout";
import NavbarCartBtn from "./NavbarCartBtn";
import NavbarAccBtn from "./NavbarAccBtn";
import { auth } from "@/auth";
import Hamburger from "./Hamburger";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link href="/" aria-label="go to  home" title="" className="">
                <Image
                  className="block w-auto"
                  src="/adidas.png"
                  width={82}
                  height={94}
                  alt="primary logo"
                />
              </Link>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <Link
                  aria-label="go to home"
                  href="/"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Home
                </Link>
              </li>
              <li className="shrink-0">
                <Link
                  href="/products"
                  aria-label="go to all product list"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  All Products
                </Link>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Gift Ideas
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Today's Deals
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Sell
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:space-x-2">
            {session?.user ? (
              <span className="hidden sm:inline">
                {" "}
                <Logout />
              </span>
            ) : (
              <Link
                href={"login"}
                aria-label="go to login"
                className="inline-flex items-center bg-black text-white rounded-sm justify-center p-2  capitalize text-sm font-medium leading-none  dark:text-white"
              >
                login
              </Link>
            )}

            <span className="hidden sm:inline">
              {" "}
              <NavbarCartBtn />
            </span>

            <span className="hidden sm:inline">
              <NavbarAccBtn />
            </span>
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

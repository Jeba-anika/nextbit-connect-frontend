"use client";
import Link from "next/link";
import React from "react";

const NBFooter = () => {
  return (
    <div className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline text-red-800">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </div>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about'" className="mr-4 hover:underline md:mr-6 text-red-800">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mr-4 hover:underline md:mr-6 text-red-800">
              Contact
            </Link>
          </li>
          {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NBFooter;

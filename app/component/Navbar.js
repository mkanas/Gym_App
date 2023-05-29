"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-around items-center w-full h-16">
      <div className="mr-10">
        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
      </div>
      <ul className="text-black  flex w-[200px] justify-between ">
        <li className="underline ">
          {" "}
          <Link href="/component/home">Home</Link>{" "}
        </li>
        <li>Exercise</li>
      </ul>
      <ul className="text-black ml-24 w-[250px]  flex justify-between">
        <li>Sign In</li>
        <li>Become A member</li>
      </ul>
    </div>
  );
};
export default Navbar;

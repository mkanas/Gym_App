"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@mui/material";

const Footer = () => {
  const listFooter = [
    {
      id: 1,
      title: "Services",
    },
    {
      id: 2,
      title: "Facility",
    },
    {
      id: 3,
      title: "Trainer",
    },
    {
      id: 4,
      title: "Merchandise",
    },
  ];

  return (
    <div className="bg-gray-800 md:w-full relative w-auto  md:px-[100px]">
      <div className=" md:flex hidden md:justify-between px-5 py-6 items-center mt-4 ">
        <Link href="/">
          <Image
            src="/assets/HomePageText.png"
            alt="logo footer"
            width={120}
            height={120}
          />
        </Link>
        <div className="flex flex-row">
          {listFooter.map((item) => (
            <div className="text-white  px-4" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
        <div>
          <button className="animate-bounce " type="button">
            <Image
              src="/assets/up-arrow.png"
              alt="up arrow"
              width={40}
              height={40}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            />
          </button>
        </div>
      </div>
      <div>
        <hr className="solid 1px " />
        <p className="text-white text-[14px] py-4 flex justify-center items-center align-middle">
          2023 Copyright. Anas
        </p>
      </div>
    </div>
  );
};

export default Footer;

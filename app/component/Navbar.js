"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const listNavbar = [
    {
      id: 1,
      title: "Trainer",
    },
    {
      id: 2,
      title: "Membership",
    },
    {
      id: 3,
      title: "Guide",
    },
    {
      id: 4,
      title: "Gallery",
    },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-[#d6dbb7] w-full fixed left-0 top-0  z-10  transition-all ease-in duration-300 ">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center p-[14px] text-white">
        <div className="font-font-family  w-full  text-xs font-semibold flex  justify-start md:justify-around items-center">
          <Link href={"/"}>
            <Image
              src="/assets/HomePageText.png"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>

          <div className=" hidden md:flex md:items-center md:justify-center">
            <div className="flex flex-row">
              {listNavbar.map((item) => (
                <div className="text-black  px-4" key={item.id}>
                  <Link href={`/${item.title.toLowerCase()}`}>
                    <p className="uppercase">{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-black ml-[140px] w-[250px]  py-2 flex justify-around">
              <button className="uppercase">Membership</button>
              <button className="flex gap-2 uppercase justify-center items-center">
                Sign In
                <div className="rotate-45">
                  <Image
                    src="/assets/sign-in3.png"
                    alt="up arrow"
                    width={30}
                    height={30}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Hamburger Button For Mobile */}
        <div className="block md:hidden  ">
          <button className="p-2 " onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <Image
                src="/assets/close.png"
                alt="menus"
                width={25}
                height={30}
              />
            ) : (
              <Image
                src="/assets/menus.png"
                alt="close"
                width={25}
                height={30}
              />
            )}
          </button>
          <div
            className={` left-0 bg-white text-xs  p-3 w-full absolute transition-all ease-in duration-300 font-font-family ${
              navbar
                ? "top-[79px] opacity-100 "
                : "top-[-1490px] md:opacity-100 opacity-0"
            }`}
          >
            {listNavbar.map((item) => (
              <div className="text-black font-semibold py-4 px-2" key={item.id}>
                <Link href={`/${item.title.toLowerCase()}`}>
                  <p className="uppercase">{item.title}</p>
                </Link>
              </div>
            ))}
            <div className=" flex font-semibold justify-start ml-3  py-3 ">
              <button className="uppercase rounded-3xl px-3 text-black bg-white">
                Membership
              </button>
              <button className="flex ml-5 rounded-3xl text-white px-3 py-2 bg-[#2eb12a] gap-2 uppercase justify-center items-center">
                Sign In
                <div className="rotate-45">
                  <Image
                    src="/assets/sign-in3.png"
                    alt="up arrow"
                    width={20}
                    height={20}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

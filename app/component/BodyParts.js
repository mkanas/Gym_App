"use client";

import React from "react";
import Image from "next/image";

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      itemID={item.id || item}
      title={item.id || item}
      className=" inline-block  flex-shrink-0 text-center min-w-[270px]  my-2 items-center cursor-pointer hover:scale-110 delay-100 transition duration-250 ease-in-out "
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Image
        className="inline-block"
        src="/assets/gym.png"
        alt="hero banner"
        width={40}
        height={40}
      />
      <div className="text-[14px]  items-center pt-5 font-bold capitalize text-gray-800 ">
        {item}
      </div>
    </div>
  );
};

export default BodyParts;

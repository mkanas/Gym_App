"use client";

import React from "react";
import Image from "next/image";

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      key={item.id}
      itemID={item.id || item}
      title={item.id || item}
      className=" inline-block mx-2 min-w-[80px] flex-shrink-0 text-center md:min-w-[180px] my-2 items-center cursor-pointer hover:scale-110 delay-100 transition duration-250 ease-in-out "
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 50, behavior: "smooth" });
      }}
    >
      <Image
        className="inline-block"
        src="/assets/gym.png"
        alt="hero banner"
        width={40}
        height={40}
      />
      <div className=" truncate max-w-full items-center  flex justify-center mx-1 align-middle  ">
        <p className="text-[14px] pt-5 px-1 font-bold capitalize text-gray-800">
          {item}
        </p>
      </div>
    </div>
  );
};

export default BodyParts;

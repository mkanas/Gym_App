"use client";
import Image from "next/image";
import React from "react";
import BodyParts from "./BodyParts";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="  w-full relative flex items-center">
      <div
        id="slider"
        className=" flex h-[180px] w-full overflow-x-scroll bg-black scroll whitespace-nowrap scroll-smoot "
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            <BodyParts
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;

"use client";

import React, { useRef } from "react";
import BodyParts from "./BodyParts";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 500;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 500;
  };

  return (
    <div className=" relative flex items-center">
      <MdChevronLeft
        className="text-red-500 cursor-pointer "
        onClick={scrollLeft}
        size={40}
      />

      <div
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        style={{ overflowX: "hidden" }}
        ref={sliderRef}
      >
        {data.map((item) => (
          <BodyParts
            key={item.id}
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        ))}
      </div>
      <MdChevronRight
        className="text-red-500 cursor-pointer  "
        onClick={scrollRight}
        size={40}
      />
    </div>
  );
};

export default HorizontalScrollBar;

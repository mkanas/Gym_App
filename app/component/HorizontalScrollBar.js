/* eslint-disable react/jsx-key */
"use client";

import React, { useRef } from "react";
import BodyParts from "./BodyParts";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 450;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 450;
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
        {data.map((item) =>
          isBodyParts ? (
            <BodyParts
              key={item.id}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )
        )}
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

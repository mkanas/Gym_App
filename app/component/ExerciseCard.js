"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="inline-block flex-shrink-0 md:border-0 border-2 my-4 max-w-[300px] min-h-[300px]  items-center cursor-pointer hover:scale-110 delay-100 transition duration-250 ease-in-out"
      href={`/exercise/${exercise.id}`}
    >
      <Image
        width={300}
        height={200}
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      />
      <div className="flex-row">
        <button className="ml-[21px] text-center px-2 text-white bg-red-500 text-[14px] rounded-[20px] capitalize">
          {exercise.bodyPart}
        </button>
        <button className="ml-[21px] text-center px-2 text-white bg-green-500 text-[14px] rounded-[20px] capitalize">
          {exercise.target}
        </button>
        <div className="ml-[21px] text-sm md:text-lg py-2 font-semibold capitalize">
          {exercise.name}
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="inline-block flex-shrink-0 md:border-0 border-2 my-4 max-w-[300px] min-h-[300px]  items-center cursor-pointer hover:scale-110 delay-100 transition duration-250 ease-in-out"
      href={`/component/exercise/${exercise.id}`}
    >
      <Image
        width={240}
        height={120}
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      />
      <div className="flex-row">
        <button className="ml-[21px] text-center px-2 text-white bg-red-500 text-[11px] rounded-[20px] capitalize">
          {exercise.bodyPart}
        </button>
        <button className="ml-[21px] text-center px-2 text-white bg-green-500 text-[11px] rounded-[20px] capitalize">
          {exercise.target}
        </button>
        <div className="ml-[21px] text-[14px] md:text-sm py-2 max-w-[250px] font-semibold truncate capitalize">
          {exercise.name}
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";

const ExercisesVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length)
    return <div className="flex justify-center">Loading...</div>;
  return (
    <div className="mx-[30px] font-medium text-lg ">
      <p className="mb-[10px]">
        Watch{" "}
        <span className="capitalize font-semibold text-red-600">{name}</span>{" "}
        videos for exercise
      </p>
      <div className="flex flex-wrap gap-x-[1px] flex-row items-center">
        {exerciseVideos?.slice(0, 6).map((item, index) => {
          return (
            <Link
              key={index}
              className=" p-4 mb-4 max-h-[240px] "
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                width={300}
                height={400}
              />
              <div className="text-sm  max-w-[300px] ">
                <div className=" mt-4">{item.video.title}</div>
                <div className=" text-black text-sm ">
                  {item.video.channelName}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExercisesVideos;

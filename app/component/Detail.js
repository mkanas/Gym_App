"use client";

import React from "react";
import Image from "next/image";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetails = [
    {
      icon: "/assets/weight.png",
      name: equipment,
      id: 1,
    },
    {
      icon: "/assets/abs.png",
      name: bodyPart,
      id: 2,
    },

    {
      icon: "/assets/sche.png",
      name: target,
      id: 3,
    },
  ];

  return (
    <div className="md:flex  md:mt-[60px] mt-[60px] md:flex-row p-[20px] items-center ">
      <Image width={500} height={400} src={gifUrl} alt={name} loading="lazy" />
      <div className="text-justify md:text-base text-sm">
        <p className="font-bold  text-2xl capitalize mb-4">{name}</p>
        <p>
          Exercise keep you strong. {name} is one on of the best exercises to
          target your {target}. It will help you improve your and gain energy.
        </p>

        {extraDetails.map((item) => (
          <div key={item.id} className="flex mt-4  gap-4 flex-grow">
            <button className="p-1 bg-green-400 text-sm rounded-lg">
              <Image
                src={item.icon}
                alt={name}
                width={40}
                height={30}
                loading="lazy"
              />
            </button>
            <span className="capitalize font-medium text-lg flex items-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

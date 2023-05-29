"use client";

import React from "react";
import Image from "next/image";

const BodyParts = () => {
  return (
    <div className="w-full">
      <Image
        className="inline-block p-2 w-full cursor-pointer hover:scale-110 delay-100 transition duration-250 ease-in-out "
        src="/assets/gym.png"
        alt="hero banner"
        width={180}
        height={200}
      />
    </div>
  );
};

export default BodyParts;

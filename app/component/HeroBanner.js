"use client";
import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="mx-5 md:m-20 my-10 md:flex justify-around">
      <section className="my-16">
        <Image
          src="/assets/HomePageText.png"
          alt="hero banner"
          width={350}
          height={350}
        />
        <p className="text-rose-950 my-5 md:w-[600px]  ">
          Change starts here. Join our gym and experience newfound strength and
          fitness in your life. Enhance the quality of your life through
          fitness. Join our gym and embrace a healthier, more vibrant lifestyle.
        </p>
        <div className="flex my-5 w-[230px] items-center justify-between">
          <div className="py-1 font-semibold hover:bg-orange-600 text-center px-3 w-22 text-md rounded-lg bg-orange-500">
            <button type="button">Join Here</button>
          </div>

          <div className="text-orange-600 cursor-pointer  underline underline-offset-4 text font-semibold ">
            <p className="hover:scale-110 delay-100 transition duration-300 ease-in-out">
              Learn More
            </p>
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/assets/hero_image.png"
          alt="hero banner"
          width={300}
          height={300}
        />
      </section>
    </div>
  );
};

export default HeroBanner;

"use client";
import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className=" relative z-0 p-1 h-full  mt-8 w-full bg-white ">
      <div className="mx-5 md:m-20 md:my-[70px] my-[40px] md:flex justify-center">
        <section className=" md:mr-[180px] my-10 md:my-16">
          <Image
            src="/assets/HomePageText.png"
            alt="hero banner"
            width={350}
            height={350}
          />
          <p className="text-rose-950 my-5 text-justify md:w-[400px]  ">
            Change starts here. Join our gym and experience newfound strength
            and fitness in your life. Enhance the quality of your life through
            fitness. Join our gym and embrace a healthier, more vibrant
            lifestyle.
          </p>
          <div className="md:flex my-5 w-[230px] hidden cursor-pointer :items-center md:justify-between">
            <div className=" py-1 font-semibold hover:bg-[#2bd1dd]  text-center px-3 text-md rounded-lg bg-[#2bd1dd]">
              <button className="text-white hover:text-black " type="button">
                Join Here
              </button>
            </div>

            <div className="text-[#2bd1dd] border border-[#2bd1dd] underline underline-offset-4 rounded-lg py-1 px-3 bg-white font-semibold ">
              <button className="hover:scale-110 delay-100 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className="md:relative md:block hidden md:z-20 w-[240px] ">
          <div className="absolute left-[129px] border border-black solid 1px -z-10 h-[150px] px-4 py-2  w-[150px]">
            <p className="capitalize font-semibold ">
              {" "}
              <span className="text-3xl ">100%</span> progres not perfections
            </p>
          </div>
          <div className="absolute ml-[18px] z-20 w-[140px] border 1px solid bg-[#1ce25e] py-[8px] px-[10px] rounded-full mt-[100px]">
            <p className=" text-[10px] text-white font-medium justify-between items-center text-center flex">
              {" "}
              <Image
                src="/assets/growth2.png"
                alt="typing"
                width={20}
                height={20}
              />
              99% positive boost
            </p>
          </div>
          <div className="bg-[#2bd1dd] absolute h-[200px] px-4 py-2 border border-[#ffffff] solid 2px w-[200px] align-middle items-center left-[67px] bottom-[-89px]">
            <Image src="/assets/coma.png" alt="typing" width={50} height={50} />
            <p className="uppercase w-full text-white h-full font-medium justify-center text-center mt-3 items-center px-3 py-1 ">
              make it happen. shock every one !!
            </p>
          </div>
        </section>
        <section className="relative md:block hidden align-middle items-center z-20 overflow-auto ">
          <div className="bg-[#110900]  absolute ml-6 mt-[125px]  -z-10 h-[300px] w-[270px]"></div>

          <Image
            src="/assets/hero_image.png"
            alt="hero banner"
            width={300}
            height={300}
          />
        </section>
      </div>
    </div>
  );
};

export default HeroBanner;

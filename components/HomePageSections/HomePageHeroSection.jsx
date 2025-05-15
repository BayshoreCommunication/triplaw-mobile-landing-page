"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomePageHeroSection = () => {
  return (
    <div>
      <div className="relative">
        <div className="">
          {/* Background Image */}
          <Image
            src="/assets/homepage/home-banner.jpg" // Replace with your uploaded path if needed
            alt="Immigration Clinic Banner"
            width={1920}
            height={1080}
            className=""
          />
        </div>
        {/* Overly Content */}
        <div className="p-4 absolute bottom-0  transform   text-start ">
          <h2 className="text-[#24C9FF] text-5xl font-bold">FREE</h2>
          <h3 className="text-3xl font-semibold text-white">
            IMMIGRATION CLINIC — <br />{" "}
            <span className="text-2xl underline">
              ONE-ON-ONE CONSULTATIONS!
            </span>
          </h3>
        </div>
      </div>
      {/* bottom content */}
      <div className="bg-[#24C9FF]">
        <div className="container">
          <div className="py-5">
            <h2 className="text-xl font-bold text-start text-black">
              GOT QUESTIONS ABOUT YOUR IMMIGRATION OPTIONS? GET ANSWERS FOR
              FREE.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeroSection;

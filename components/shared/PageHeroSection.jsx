import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const PageHeroSection = ({ image, title, link }) => {
  const animationProps = {
    effect: "fade-up",
    duration: "2000",
  };

  return (
    <>
      <div className=" relative z-10 w-full  pt-16 lg:pt-24 ">
        <div className=" relative w-full h-[350px] px-4 lg:px-10">
          <Image
            src={image ? image : "/assets/shared/aboutpage.jpg"} // Make sure `image` is a valid path or import
            alt="Page Hero Image"
            fill
            className="absolute inset-0 w-full h-full object-cover object-centers  "
            quality={100}
            priority
          />

          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#032D18]/70 to-[#032D18]/70" />

          <div className="relative flex flex-col items-center justify-center w-full h-full z-40">
            <div className="container pt-10 md:pt-10 lg:pt-10 xl:pt-10 pb-10 ">
              <div className="text-center mt-2 2xl:mt-3 ">
                <ScrollMotionEffect {...animationProps}>
                  <h1 className="text-3xl md:text-4xl lg:text-[40px]  font-[700] text-white text-center mx-auto">
                    {title}
                  </h1>
                </ScrollMotionEffect>
                <ScrollMotionEffect {...animationProps}>
                  <div className="text-base md:text-lg font-semibold text-white text-center  mt-4 flex items-center justify-center gap-x-4">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 hover:underline duration-300"
                    >
                      <IoHomeSharp /> <span>Home</span>
                    </Link>
                    <p>/</p>
                    <p className="text-white text-base underline md:text-lg font-semibold">
                      {link}
                    </p>
                  </div>
                </ScrollMotionEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeroSection;

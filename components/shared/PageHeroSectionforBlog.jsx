import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const PageHeroSectionforBlog = ({ image, title, description, calanderOff }) => {
  const animationProps = {
    effect: "fade-up",
    duration: "2000",
  };

  return (
    <div className="relative w-full h-[350px] md:h-[500px]">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        src={image}
        alt="Page Hero Image"
        layout="fill"
        priority
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div className="container py-10 md:py-14">
          <ScrollMotionEffect {...animationProps}>
            <h1 className="text-[30px] md:text-[60px] font-bold text-white text-center leading-snug md:leading-tight">
              {title}
            </h1>
          </ScrollMotionEffect>
          <ScrollMotionEffect {...animationProps}>
            <h2 className="mt-4 md:mt-6 text-base md:text-[20px] font-normal text-white text-center leading-tight max-w-[800px] mx-auto">
              {description}
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect {...animationProps}>
            <div className="mt-8 md:mt-12 flex justify-center ">
              <Link
                href={"/contact"}
                // href={"/appointment"}
                className={`text-white font-normal text-base md:text-lg bg-secondary px-4 md:px-16 py-4 rounded-full hover:bg-orange-400  ${calanderOff ? "   " : "  "}`}
              >
                Schedule A Free Case Review
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default PageHeroSectionforBlog;

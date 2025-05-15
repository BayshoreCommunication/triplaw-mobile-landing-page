import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="mt-32 lg:mt-0">
      <div className="container py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 ">
          {/* Left side  */}
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className=" w-full">
              <Image
                src="/assets/contactpage/faq.png"
                alt="Doctors examining spine"
                width={600}
                height={500}
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </ScrollMotionEffect>

          {/* Right side - Image */}
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-stone-950 text-center md:text-left mb-4 mt-5">
                Frequently <br /> Asked Questions
              </h2>
              <div className="mt-5 lg:mt-8">
                <Accordion />
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

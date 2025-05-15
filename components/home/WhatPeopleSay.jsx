import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import TestimonialSlideSection from "../shared/TestimonialSlideSection";

const WhatPeopleSay = () => {
  return (
    <div className="">
      <div className="container py-10 md:py-20">
        <div className=" flex gap-0 md:gap-10 items-center">
          <div>
            <Image
              src="/assets/homepage/testimonials.png"
              alt="testimonials"
              width={500}
              height={500}
              quality={100}
            ></Image>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full ">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h1 className="text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center ">
                What People Say
              </h1>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-left" duration="2000">
              <p className="text-md text-black max-w-[700px] text-center mt-6">
                {`Professionally handling Property Damage Claims, we’re committed to protecting both your space and your peace of mind in times of need.`}
              </p>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div className="mx-0 flex justify-center items-center my-10 px-2 sm:px-6 lg:px-8">
                <div className="bg-[#F1F1F1] w-full max-w-[360px] md:max-w-[800px]  rounded-lg p-4 md:px-6 lg:px-8">
                  <TestimonialSlideSection />
                </div>
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div className="mt-5 hover:scale-105  transition duration-300">
                <Link
                  href={"/"}
                  className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary duration-500 hover:scale-105  transition "
                >
                  View All Reviews
                </Link>
              </div>
            </ScrollMotionEffect>
          </div>
          <div>
            <Image
              src="/assets/homepage/testimonials.png"
              alt="testimonials"
              width={500}
              height={500}
              quality={100}
              className="-scale-x-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;

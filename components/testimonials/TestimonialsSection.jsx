import React from "react";
import SectionLayout from "../shared/SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { testimonialsData } from "@/config/data";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F1F1F1]">
      <div className="container py-10 md:py-20">
        {/* <div className=" w-full  mb-6 lg:mb-10">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 lg:mb-3 text-center">
              What People Say
            </h2>
          </ScrollMotionEffect>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[...testimonialsData].reverse().map((testimonial, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <div
                key={index}
                className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-center border h-full flex flex-col"
              >
                <p className="text-base md:text-lg font-semibold text-gray-700 mb-4 ">
                  {testimonial.review}
                </p>
                <div className="text-yellow-500 mb-2 text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="font-semibold text-gray-900 text-lg md:text-xl">
                  {testimonial.name}
                </p>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { servicesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const LegalPracticeAreas = () => {
  return (
    <section className="bg-primary">
      <div className="container py-10 md:py-24">
        <div className="max-w-[700px] mx-auto">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-black text-3xl  md:text-4xl lg:text-5xl text-white text-center">
              Welcome to Melamed Law
            </h1>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="text-base md:text-lg text-white text-center mt-5">
              {`Professionally handling Property Damage Claims, we're committed to protecting both your Property and your Peace of Mind in times of need.`}
            </p>
          </ScrollMotionEffect>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-5 my-10">
          {servicesData?.map((el, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md py-14 px-6">
                <Image
                  src={el?.icon}
                  alt="Custom Icon"
                  width={100}
                  height={100}
                  className="mx-auto size-16"
                />
                <h1 className="font-semibold  text-2xl text-black text-center mt-5">
                  {el?.title}
                </h1>
                <p className="text-md text-black text-center mt-2 line-clamp-2">
                  {el?.sortTitle}
                </p>
                <div className="flex justify-center mx-auto items-center  mt-5">
                  <Link
                    href={`/practice-areas/${el?.slug}`}
                    className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary"
                  >
                    Read More
                  </Link>
                  {/* <button className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary">
                    Read More
                  </button> */}
                </div>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="flex justify-center mx-auto items-center  my-5">
            <Link
              href={"/practice-areas"}
              className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-orange-400"
            >
              View All Practice Areas
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default LegalPracticeAreas;

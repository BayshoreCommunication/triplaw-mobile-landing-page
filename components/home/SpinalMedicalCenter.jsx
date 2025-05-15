import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const SpinalMedicalCenter = () => {
  return (
    <section>
      <div className="container py-6 md:py-16">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center mb-4  md:mb-10 ">
            About Hess Spinal & Medical Center
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="w-full md:w-[60%] mx-auto  relative">
            <Link href="#">
              <Image
                src="/assets/homepage/thumbnail-img.png"
                alt="About Hess Spinal & Medical Center"
                width={1920}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative flex items-center justify-center w-14 h-14 lg:w-20 lg:h-20 bg-white text-primary rounded-full text-3xl cursor-pointer shadow-medium">
                {/* Animated border */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow opacity-30"></span>

                {/* Button icon */}
                <FaPlay className="relative z-10" />
              </div>
            </div>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <p className="text-md md:text-lg text-[#55545A] text-center pt-8">
            Video of Name, talking about Hess Spinal & Medical Center
          </p>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="group hover:scale-105  transition duration-300 mt-8 text-center">
            <Link href="/">
              <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-3 rounded-full hover:bg-green-800  cursor-pointer">
                <span className="relative z-10 transition-colors duration-300">
                  Discover More
                </span>
                <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              </button>
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default SpinalMedicalCenter;

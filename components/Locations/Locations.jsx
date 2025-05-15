import React from "react";
import Image from "next/image";
import { locationsData } from "@/config/data";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const Locations = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container p-6 md:p-16">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className=" bg-white p-4 lg:p-10 rounded-3xl shadow-medium overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow mb-8 lg:mb-10">
              <div className=" w-full max-w-[810px] mx-auto text-center">
                <h2 className="font-bold text-3xl  md:text-4xl lg:text-5xl mb-6">
                  Find our location near you.
                </h2>
                {/* Search Input */}
                <div className="relative mb-6">
                  <input
                    className="w-full appearance-none bg-white text-gray-700 py-4 px-6 rounded-full border focus:outline-none"
                    placeholder="Enter your address"
                  ></input>
                  <div className="group hover:scale-105  transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
                    <Link href="/">
                      <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-4 md:px-10 py-4 rounded-full hover:bg-green-800 cursor-pointer">
                        <span className="relative z-10 transition-colors duration-300">
                          Find Nearest Place
                        </span>
                        <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationsData.map((clinic) => (
                <div
                  key={clinic.slug}
                  className="group bg-white p-4 lg:p-5 rounded-3xl shadow-medium overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Clinic Image */}
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={
                        clinic.image
                          ? clinic.image
                          : "/assets/location/placeholder.png"
                      }
                      alt={clinic.locationName}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  {/* Clinic Info */}
                  <div className="">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-gray-800">
                      {clinic.locationName}
                    </h2>

                    <div className="mb-4">
                      <Link
                        href="#"
                        className="text-gray-600 mb-1 flex items-center gap-2 hover:text-primary duration-300 font-medium"
                      >
                        <GrLocation className="shrink-0" />
                        {clinic.address}
                      </Link>
                      <Link
                        href="tel:"
                        className="text-gray-600 mb-1 flex items-center gap-2 hover:text-primary duration-300 font-medium"
                      >
                        <IoCallOutline className="shrink-0" />
                        {clinic.phone}
                      </Link>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-xl font-semibold text-gray-700 mb-3 underline">
                        Opening Hours
                      </h3>
                      <ul className="space-y-3">
                        {clinic.openingHours.map((hours, index) => (
                          <li
                            key={index}
                            className="flex justify-between text-primary font-semibold"
                          >
                            <span className=" mb-1 flex items-center gap-2 ">
                              <MdAccessTime className="shrink-0" />
                              {hours.day}
                            </span>
                            <span className=" mb-1 flex items-center gap-2 ">
                              {hours.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollMotionEffect>
        </div>
      </section>
    </div>
  );
};

export default Locations;

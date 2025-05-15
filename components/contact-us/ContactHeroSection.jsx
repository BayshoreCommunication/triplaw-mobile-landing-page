import React from "react";

import Link from "next/link";

import ContactSection from "./ContactSection";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

const ContactHeroSection = () => {
  return (
    <div className="  mt-10 lg:mt-16 ">
      <div className=" w-full py-10 md:py-20 ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
            {/* Left */}
            <div className="flex flex-col gap-5  lg:gap-6 w-full lg:w-4/12">
              {/* address */}
              <div className="bg-[#F1F1F1] p-5 lg:p-8 rounded-2xl flex flex-col gap-3 lg:gap-5">
                <h3 className="pb-2  border-b-2 border-[#D4D4D4] text-2xl font-bold text-start">
                  Contact Information
                </h3>
                <div className="flex gap-2">
                  <IoLocationOutline className="text-xl mt-1" />
                  <div>
                    <p className="text-xl font-semibold mb-1">Address:</p>
                    <p>
                      <Link
                        href="#"
                        className="hover:text-primary duration-300"
                      >
                        4505 Town N Country Blvd Tampa, FL 33615
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <IoCallOutline className="text-xl mt-1" />
                  <div>
                    <p className="text-xl font-semibold mb-1">Phone:</p>
                    <p>
                      <Link
                        href="#"
                        className="hover:text-primary duration-300"
                      >
                        (800) 618-4377 – Main
                      </Link>
                    </p>
                    <p>
                      <Link
                        href="#"
                        className="hover:text-primary duration-300"
                      >
                        (813) 514-2725 – Faxs
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="bg-[#F1F1F1] p-5 lg:p-8 rounded-2xl flex flex-col gap-6">
                <h3 className="pb-2 border-b border-[#D4D4D4] text-2xl font-bold">
                  Email Information
                </h3>

                <div className="flex items-start gap-3">
                  <IoLocationOutline className="text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">Email:</p>
                    <Link
                      href="mailto:info@hessspinalcenters.com"
                      className="text-base hover:text-primary duration-300 break-all"
                    >
                      info@hessspinalcenters.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IoCallOutline className="text-2xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold">
                      Billing & Medical Records:
                    </p>
                    <Link
                      href="mailto:medicalrecords@hessspinalcenters.com"
                      className="text-base hover:text-primary duration-300 break-all"
                    >
                      medicalrecords@hessspinalcenters.com
                    </Link>
                  </div>
                </div>
              </div>
              {/* Opening Hours */}
              <div className="bg-[#F1F1F1] p-5 lg:p-8 rounded-2xl flex flex-col gap-3 lg:gap-5">
                <h3 className="pb-2  border-b-2 border-[#D4D4D4] text-2xl font-bold text-start">
                  Working Hours
                </h3>

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-3 lg:gap-x-5 gap-y-2">
                  <p className="  mb-1">
                    <span className="font-semibold">Mon</span> 08:30 AM – 7:00
                    PM
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Tue</span> 08:30 AM – 7:00
                    PM
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Wed</span> 08:30 AM – 7:00
                    PM
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Thu</span> 08:30 AM – 7:00
                    PM
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Fri</span> 08:30 AM – 7:00
                    PM
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Sat</span> CLOSED
                  </p>
                  <p className="  mb-1">
                    <span className="font-semibold">Sun</span> CLOSED
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-8/12 flex flex-col gap-5 lg:gap-6">
              <div className="relative w-full h-[350px] lg:h-[430px] px-4 lg:px-10 flex items-end justify-center overflow-hidden">
                <Image
                  src="/assets/contactpage/support-bg.jpg" // Make sure `image` is a valid path or import
                  alt="Page Hero Image"
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-centers  rounded-2xl"
                  quality={100}
                  priority
                />
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  {" "}
                  <div className="relative text-center z-40  mb-10 lg:mb-16">
                    <h2 className="text-xl lg:text-2xl font-bold">
                      24/7 Emergency Support
                    </h2>
                    <p>Quick, Easy, and Hassle-Free Healthcare Scheduling</p>
                  </div>
                </ScrollMotionEffect>
              </div>
              <div>
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;

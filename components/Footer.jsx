import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SITECONFIG } from "@/config/site";
import SectionLayout from "./shared/SectionLayout";
import { RiPhoneFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-white overflow-hidden text-white"
        style={{ backgroundImage: "url('/assets/shared/footer-bg.jpg')" }}
      >
        <div className="container py-16">
          <div className="md:flex md:justify-center">
            <div className="grid justify-center grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 ">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0">
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={320}
                    height={200}
                    src={"/assets/site-logo/logo.png"}
                    alt="Trip Low"
                    className="object-cover"
                  />
                </Link>
                <p className="py-5 text-base xl:text-[18px] font-normal text-center text-white md:text-left max-w-[450px] leading-8">
                  The physicians and staff at Hess Spinal and Medical Centers
                  understand that being injured in an auto accident can be
                  extremely stressful for you and your family.
                </p>
                <p className=" text-base xl:text-[18px] font-normal text-center text-white md:text-left max-w-[450px] leading-8">
                  <strong> Hours:</strong> 8:30am - 7:00pm
                </p>

                <div className="text-white flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaLinkedinIn className="size-5" />
                  </Link>
                  <Link
                    href="https://x.com/"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaTwitter className="size-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaInstagram className="size-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaYoutube className="size-5" />
                  </Link>
                </div>
              </div>
              <div className="w-full col-span-2">
                <h2 className="text-[22px] font-semibold text-white">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-28 border-secondary" />
                <ul className="ml-0 text-white list-none text-base xl:text-[18px] font-medium grid grid-cols-2 w">
                  {SITECONFIG?.footer?.resources?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                      {/* <p className="hover:underline cursor-pointer text-base">
                        {el.title}
                      </p> */}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h2 className="font-semibold text-white text-[22px]">
                  Contact us
                </h2>
                <hr className="w-24 mt-2 mb-6 border-secondary" />
                <ul className="ml-0 text-base xl:text-[18px] font-medium text-white list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-secondary" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href=""
                      className=" hover:underline duration-300 "
                      target="_blank"
                    >
                      4505 Town N Country Blvd, Tampa, FL 33615
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-secondary" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:(800) 618-4377"
                        className="hover:underline duration-300 text-base"
                      >
                        {`(800) 618-4377`}
                      </Link>
                      {/* <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link> */}
                    </div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-secondary" />

                      <h3 className="font-semibold text-white text-base xl:text-[20px]">
                        Email
                      </h3>
                    </div>
                    <div className="flex flex-col gap-px">
                      <Link
                        href="mailto: info@hessspinalcenters.com"
                        className="hover:underline duration-300 text-base"
                      >
                        info@hessspinalcenters.com
                      </Link>
                      {/* <Link
                        href="mailto:myra@.com"
                        className="hover:underline duration-300"
                      >
                        myra@.com
                      </Link> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white/20 sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-base xl:text-[18px] font-medium text-center text-white">
              © 2024{" "}
              <a href="/" className="hover:underline text-secondary">
                Hess Spinal & Medical Centers
              </a>
              . All Rights Reserved.
            </div>

            <div className="text-base xl:text-[18px] font-medium text-center text-white">
              Design & Developed by{" "}
              <a
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="font-medium hover:underline text-secondary"
              >
                BayShore Communication
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

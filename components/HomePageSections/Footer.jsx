import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="py-3 bg-[#CC2127]">
      <div className="py-4 bg-[#171544]">
        <div className="container">
          <div className="flex justify-between relative">
            <div className="space-y-2">
              <Link
                href=""
                className=" flex items-center text-white gap-2 text-base"
              >
                <IoCall /> (863)-599-6735
              </Link>
              <Link
                href="https://trip-law.com/"
                className=" flex items-center text-white gap-2 text-base"
              >
                <TbWorld />
                www.trip-law.com
              </Link>
            </div>
            <Image
              src="/assets/homepage/qr-code.png"
              width={1000}
              height={1000}
              className="w-28 absolute right-0 -top-14"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

const PracticeAreaSidebarCard = ({ allServiceData }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-full flex flex-col gap-6 md:gap-10">
        <div className="shadow-lg border">
          <div className="p-8 lg:p-10">
            <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3  border-b-2 border-gray-500 uppercase font-semibold text-xl lg:text-2xl">
              AREAS PRACTICE
            </h4>
            <div className="flex flex-col h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden md:block">
              {allServiceData.map((service, index) => (
                <Link
                  href={`/areas-of-practice/${service.slug}`}
                  key={index}
                  className="group flex gap-3 items-start py-4 border-b"
                >
                  <Image
                    src={service.icon} // Assuming icons are stored in the assets folder
                    alt={service.title}
                    width={30}
                    height={30}
                    className="shrink-0"
                  />
                  <p
                    className={`text-xl font-medium group-hover:text-primary duration-300 ${pathname === "/areas-of-practice/" + service?.slug ? "text-primary " : "text-black"}`}
                  >
                    {service.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaSidebarCard;

import Image from "next/image";
import React from "react";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const edu = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"] });

const ToOurClients = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="">
          <div className="flex flex-col gap-5">
            <div>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <p className="text-stone-950  text-2xl md:text-3xl  mb-4">
                  To our clients:
                </p>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <h3 className="text-stone-950  text-2xl md:text-4xl font-semibold  mt-3">
                  You’re not just a number.
                </h3>
              </ScrollMotionEffect>
            </div>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <p
                className={`text-stone-950  text-xl md:text-3xl mt-4 ${edu.className} `}
              >
                At Carter Injury Law, you’re family. We offer open lines of
                communication to foster personal relationships and optimize case
                outcomes for our clients. Every client gets the personal cell
                phone number of the attorney.
              </p>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-right" duration="2000">
              <p
                className={`text-stone-950  text-xl md:text-3xl ${edu.className} `}
              >
                Above all else, we fight for you. Our goals are to take the
                stress of your injury off of you, to make sure all your
                questions are answered and you feel as comfortable as possible
                about the process, and to aggressively pursue maximum financial
                compensation for your case.
              </p>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div className="mt-6 flex justify-end  ">
                <Image
                  src="/assets/aboutpage/david-carter-signature.png"
                  alt="david-carter-signature"
                  width={200}
                  height={80}
                  className="w-1/3 lg:w-full max-w-[180px]"
                />
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToOurClients;

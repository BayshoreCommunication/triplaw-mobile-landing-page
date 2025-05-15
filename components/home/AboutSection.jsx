import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import NumberAnimation from "../shared/NumberAnimation";

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="container mt-8 md:mt-36 mb-6 md:mb-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 gap-y-5 xl:gap-x-16 md:mt-[-50px] mt-[16px]">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            {/* <div className="mt-10 md:mt-0">
              <div className="video-container rounded-3xl overflow-hidden border-4 border-secondary">
                <iframe
                  src={`https://www.youtube.com/embed/Zoyqx6B6v1o?si=8Dgos67WSxV-j6s-`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title=" Devit Carter"
                  loading="lazy"
                  className="w-full h-64 md:h-96 "
                ></iframe>
              </div>
            </div> */}

            <div className="flex items-center justify-center relative">
              <Image
                width={500}
                height={400}
                className="w-[500px] object-cover"
                src={"/assets/homepage/about-image-1.png"}
                alt={"about image"}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary p-3 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white">
                  <h1 className="text-3xl font-bold text-left">
                    <NumberAnimation
                      className="text-3xl font-bold text-left"
                      value={24}
                      incrementPlus={1}
                      duration={200}
                    />
                  </h1>
                  <p className="text-xs text-left">Years Experience</p>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center md:text-left">
                About Hess Spinal & Medical Center
              </h1>
              <p className="text-md md:text-lg text-[#55545A] text-center md:text-left">
                {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family. Our multi-disciplinary team of Board Certified Medical Doctors (M.D.’s), Board Certified Doctors of Osteopathic Medicine (D.O.’s) and Board Certified Chiropractor (D.C.’s) will tailor an individual treatment plan for your specific injury needs.`}
              </p>
              <p className="text-md md:text-lg text-[#55545A] text-center md:text-left">
                {`Auto accidents can cause back or neck pain, soreness, numbness in the arms or legs, joint or muscle pain, stress, anxiety, or headaches. Through our individual medical evaluations and consultations, Hess Spinal & Medical Centers will identify and help alleviate these conditions. Hess Spinal and Medical Centers work closely with primary care physicians in the Tampa Bay area.`}
              </p>

              <div className="py-4 flex justify-center md:justify-start">
                <div className="group hover:scale-105  transition duration-300 text-center">
                  <Link href="/">
                    <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-3 rounded-full hover:bg-green-800  cursor-pointer">
                      <span className="relative z-10 transition-colors duration-300">
                        Discover More
                      </span>
                      <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

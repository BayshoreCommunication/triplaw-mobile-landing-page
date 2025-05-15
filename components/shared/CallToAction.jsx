import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative w-full h-[400px]  overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src="/assets/shared/cta-bg.jpg" // <-- Make sure this image exists in /public/assets/aboutpage/
        alt="CTA BG Image"
        fill
        className="object-cover"
        quality={100}
        priority
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032D18]/90 to-[#032D18]/90 z-10" />

      {/* ✅ Centered Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl max-w-[1000px] mx-auto">
            Get Appointment From Our Specialist
          </h2>
          <p className="text-white text-base md:text-lg font-normal mt-4 max-w-[700px] mx-auto">
            The physicians and staff at Hess Spinal and Medical Centers
            understand that being injured in an auto accident can be extremely
            stressful for you and your family.
          </p>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="mt-6 group hover:scale-105 transition duration-300">
            <Link href="tel:(800) 618-4377">
              <button className="relative overflow-hidden text-white font-normal text-lg bg-primary px-8 md:px-16 py-4 rounded-full cursor-pointer border-2 border-white">
                <h6 className="relative z-10 transition-colors duration-300">
                  Request Appointment
                </h6>
                <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              </button>
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default CallToAction;

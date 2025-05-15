import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const treatments = [
  {
    id: 1,
    icon: "/assets/homepage/service-section/1.png",
    title: "Chiropractic Manipulation",
    description:
      "We focus on auto accident care and treatment options that will help ease your pain and deal with life after an auto accident.",
  },
  {
    id: 2,
    icon: "/assets/homepage/service-section/2.png",
    title: "Digital Radiography",
    description:
      "Our physicians will diagnose and evaluate your injury or condition to determine the type of treatment that is most appropriate.",
    backgroundImage: "/path/to/background-image.jpg",
  },
  {
    id: 3,
    icon: "/assets/homepage/service-section/3.png",
    title: "Individual Treatment Plans",
    description:
      "Trauma associated with auto injuries can take days or weeks to manifest, that's why it's important to get treatment ASAP!",
  },
  {
    id: 4,
    icon: "/assets/homepage/service-section/4.png",
    title: "Injury Rehabilitation",
    description:
      "Our exercise and stretching routines will build flexibility and strength, so you can fully restore your maximum range of motion and independence.",
  },
  {
    id: 5,
    icon: "/assets/homepage/service-section/5.png",
    title: "Physical Therapy",
    description:
      "Hydrotherapy uses the combination of water, heat and massage to provide a comforting and relaxing experience, relieving pain.",
  },
  {
    id: 6,
    icon: "/assets/homepage/service-section/6.png",
    title: "Constant neck and back pain?",
    description:
      "Chiropractic adjustments relieve pressure on the nerves and muscles, and treat the underlying spinal or whiplash injury.",
  },
];

const CanHelpYou = () => {
  return (
    <section className="">
      <div className="container p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center">
            How We Can Help You
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="w-full md:w-[50%] mx-auto mt-4">
            <p className="text-md md:text-lg text-[#55545A] text-center  flex justify-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 mt-6">
            {treatments.map((item, index) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-white border border-gray-300 rounded-xl p-6 transition duration-300 hover:bg-[#135420]"
              >
                <div className="my-3 text-gray-800 group-hover:text-white transition">
                  <Image
                    width={500}
                    height={500}
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 transition duration-300 group-hover:invert"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-white transition">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white transition">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-fit px-3 text-sm py-2 rounded-full border border-gray-800 text-gray-600 group-hover:text-white transition group-hover:border-white">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="group mt-8 text-center hover:scale-105  transition duration-300">
            <Link href="/">
              <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-3 rounded-full hover:bg-green-800  cursor-pointer">
                <span className="relative z-10 transition-colors duration-300">
                  Discover More Services
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

export default CanHelpYou;

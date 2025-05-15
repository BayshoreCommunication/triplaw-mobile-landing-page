// import { areaspracticeData, servicesData } from "@/config/data";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import ScrollMotionEffect from "../motion/ScrollMotionEffect";

// const AreasPractice = () => {
//   return (
//     <section className="bg-white">
//       <div className="container py-10 md:py-20">
//         <div className="max-w-[700px] mx-auto">
//           <ScrollMotionEffect effect="fade-right" duration="2000">
//             <h1 className="font-black text-3xl  md:text-4xl lg:text-5xl text-black text-center">
//               Legal Practice Areas
//             </h1>
//           </ScrollMotionEffect>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10 my-10">
//           {areaspracticeData?.map((el, index) => (
//             <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
//               <div className=" bg-white !shadow-md !rounded-md border">
//                 <Image
//                   src={el?.url}
//                   alt="Custom Icon"
//                   width={500}
//                   height={400}
//                   className="mx-auto"
//                 />
//                 <div className="pt-2 pb-8 px-4">
//                   <h1 className="font-semibold  text-2xl text-black text-center md:text-left mt-5">
//                     {el?.title}
//                   </h1>
//                   <p className="text-md text-black text-center md:text-left mt-2 line-clamp-2 ">
//                     {el?.shortTitle}
//                   </p>
//                   <div className="mt-8">
//                     <Link
//                       href={`/practice-areas/${el?.slug}`}
//                       className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
//                     >
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </ScrollMotionEffect>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AreasPractice;

import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const treatments = [
  {
    id: 1,
    icon: "/assets/homepage/service-section/1.png",
    title: "Chiropractic Manipulation",
    slug: "chiropractic-manipulation",
    description:
      "We focus on auto accident care and treatment options that will help ease your pain and deal with life after an auto accident.",
  },
  {
    id: 2,
    icon: "/assets/homepage/service-section/2.png",
    title: "Digital Radiography",
    slug: "digital-radiography",
    description:
      "Our physicians will diagnose and evaluate your injury or condition to determine the type of treatment that is most appropriate.",
    backgroundImage: "/path/to/background-image.jpg",
  },
  {
    id: 3,
    icon: "/assets/homepage/service-section/3.png",
    title: "Individual Treatment Plans",
    slug: "individual-treatment-plans",
    description:
      "Trauma associated with auto injuries can take days or weeks to manifest, that's why it's important to get treatment ASAP!",
  },
  {
    id: 4,
    icon: "/assets/homepage/service-section/4.png",
    title: "Injury Rehabilitation",
    slug: "injury-rehabilitation",
    description:
      "Our exercise and stretching routines will build flexibility and strength, so you can fully restore your maximum range of motion and independence.",
  },
  {
    id: 5,
    icon: "/assets/homepage/service-section/5.png",
    title: "Physical Therapy",
    slug: "physical-therapy",
    description:
      "Hydrotherapy uses the combination of water, heat and massage to provide a comforting and relaxing experience, relieving pain.",
  },
  {
    id: 6,
    icon: "/assets/homepage/service-section/6.png",
    title: "Constant neck and back pain?",
    slug: "constant-neck-and-back-pain",
    description:
      "Chiropractic adjustments relieve pressure on the nerves and muscles, and treat the underlying spinal or whiplash injury.",
  },
];

const Services = () => {
  return (
    <section className="">
      <div className="container p-6 md:p-16">
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

                <Link href={`/services/${item?.slug}`}>
                  <button className="mt-6 w-fit px-3 text-sm py-2 rounded-full border border-gray-800 text-gray-600 group-hover:text-white transition group-hover:border-white">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default Services;

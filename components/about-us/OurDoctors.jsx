import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const OurDoctorsData = [
  {
    image: "/assets/aboutpage/our-doctors/image1.png",
    name: "Dr. Bonnie Green",
    position: "Senior Spinal Specialist",
    details:
      "Dr. Green specializes in minimally invasive spinal procedures and has over 12 years of experience treating complex back conditions.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image2.png",
    name: "Dr. Thomas Lean",
    position: "Consultant Spine Surgeon",
    details:
      "Dr. Lean is known for her expertise in scoliosis treatment and advanced spinal deformity corrections, helping hundreds of patients regain mobility.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image3.png",
    name: "Dr. Jese Leos",
    position: "Orthopedic Spine Surgeon",
    details:
      "Dr. Leos has published extensively on spinal disc regeneration and combines both surgical and non-surgical techniques for optimal outcomes.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image4.png",
    name: "Dr. Leslie Livingston",
    position: "Neurosurgeon & Spine Specialist",
    details:
      "With a background in neurosurgery, Dr. Livingston focuses on complex nerve-related spinal disorders and precision microsurgery.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image5.png",
    name: "Dr. Bonnie Green",
    position: "Spinal Reconstruction Expert",
    details:
      "Dr. Green is dedicated to post-trauma spine reconstruction and leads innovations in spinal implant technologies.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image6.png",
    name: "Dr. Thomas Lean",
    position: "Spine and Pain Management Consultant",
    details:
      "Combining physical medicine with spinal interventions, Dr. Lean offers comprehensive care for chronic spine pain sufferers.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image7.png",
    name: "Dr. Jese Leos",
    position: "Minimally Invasive Spine Surgeon",
    details:
      "Specializing in endoscopic spine surgeries, Dr. Leos helps patients recover quickly and effectively from degenerative spine issues.",
  },
  {
    image: "/assets/aboutpage/our-doctors/image8.png",
    name: "Dr. Leslie Livingston",
    position: "Spinal Trauma Specialist",
    details:
      "Dr. Livingston leads a multidisciplinary team in treating acute spinal injuries, focusing on fast recovery and long-term wellness.",
  },
];

const OurDoctors = () => {
  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-4 lg:mb-8 text-center">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-gray-950 text-center">
              Our Doctors
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="w-full md:w-[50%] mx-auto mt-4">
              <p className="text-md md:text-lg text-gray-900/70 text-center  flex justify-center">
                {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-6">
          {OurDoctorsData.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-medium flex flex-col items-start"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={500}
                height={208}
                unoptimized
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600 text-sm font-semibold">
                {doctor.position}
              </p>
              <p className="text-gray-500 text-start mt-2">{doctor.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;

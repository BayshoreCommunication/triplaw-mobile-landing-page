import Link from "next/link";
import { BsHospital } from "react-icons/bs";
import { TbStretching2 } from "react-icons/tb";
import Image from "next/image";
import digitalXRayMachine from "@/public/assets/our-technologies/digital-x-ray-machine.png";
import spinalMachine from "@/public/assets/our-technologies/spinal-decompression-machine-2.png";
import therapeuticMachine from "@/public/assets/our-technologies/therapeutic-ultrasound-devices.png";
import spinalDecompressionMachine from "@/public/assets/our-technologies/spinal-decompression-machine.png";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const OurTechnologies = () => {
  const technologies = [
    {
      id: 1,
      image: digitalXRayMachine,
      title: "Digital X-Ray Machines",
      description:
        "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
    {
      id: 2,
      image: spinalDecompressionMachine,
      title: "Spinal Decompression Machines",
      description:
        "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
      id: 3,
      image: therapeuticMachine,
      title: "Therapeutic Ultrasound Devices",
      description:
        "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
      id: 4,
      image: spinalMachine,
      title: "Spinal Decompression Machines",
      description:
        "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center">
            Our Technologies
          </h1>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="2xl:w-[60%] mx-auto mt-4 mb-8">
            <p className="text-md md:text-lg text-[#55545A] text-center  flex justify-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {technologies.map((item) => (
            <div key={item.id}>
              <ScrollMotionEffect effect="fade-up" duration="1000">
                <div>
                  <Image src={item.image} alt={item.title} />
                </div>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="mt-2">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </ScrollMotionEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnologies;

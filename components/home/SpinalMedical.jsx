import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const leftFeatures = [
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/1.png",
    title: "Comprehensive Care in One Location",
    description: "Access multiple medical services without extra appointments.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/2.png",
    title: "Immediate Treatment, No Upfront Costs",
    description:
      "PIP coverage allows accident victims to receive care without payment delays.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/3.png",
    title: "Expert Injury Care with Insurance Assistance",
    description: "Get treatment while we handle your auto insurance claims.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/4.png",
    title: "No Financial Barriers to Recovery",
    description:
      "Receive necessary medical attention without out-of-pocket expenses.",
  },
];

const rightFeatures = [
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/5.png",
    title: "Hassle-Free Accident Injury Treatment",
    description:
      "Covered under Florida’s PIP benefits—no upfront costs required.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/6.png",
    title: "Seamless Insurance Claim Support",
    description: "We assist with claims, ensuring stress-free medical care.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/7.png",
    title: "Compassionate Care, Zero Upfront Costs",
    description: "Focus on healing while we manage your coverage.",
  },
  {
    // icon: <RiCustomerService2Line className="size-10" />,
    image: "/assets/homepage/why-choose-icon/8.png",
    title: "Dedicated Auto Injury Treatment Team",
    description: "Professional medical support tailored for accident recovery.",
  },
];

const SpinalMedical = () => {
  return (
    <section className="bg-pwhite">
      <div className="container  p-6 md:p-16">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl text-black text-center">
            Why choose Hess Spinal & Medical?
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className="w-full xl:w-[50%] mx-auto mt-4">
            <p className="text-md md:text-lg text-[#55545A] text-center  flex justify-center">
              {`The physicians and staff at Hess Spinal and Medical Centers understand that being injured in an auto accident can be extremely stressful for you and your family.`}
            </p>
          </div>
        </ScrollMotionEffect>

        <div className="py-12">
          {/* Desktop */}
          <div className="max-w-7xl mx-auto px-4 lg:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16 items-center hidden">
            {/* Left Features */}
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="flex flex-col gap-8">
                {leftFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 ">
                    <div className="text-green-500 bg-white p-3 rounded-full">
                      <Image
                        src={item.image}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="zoom-in" duration="2000">
              {/* Center Image */}
              <div className="flex flex-col items-center overflow-hidden rounded-3xl">
                <Image
                  width={500}
                  height={400}
                  className="w-full object-cover"
                  src={"/assets/homepage/spinal-medical.jpg"}
                  alt={"about image"}
                />
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-left" duration="2000">
              {/* Right Features */}
              <div className="flex flex-col gap-12">
                {rightFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 ">
                    <div className="text-green-500 bg-white p-3 rounded-full">
                      <Image
                        src={item.image}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollMotionEffect>
          </div>

          {/* Mobile */}
          <div className="flex flex-col  gap-10 lg:hidden">
            {/* Left Features */}
            <ScrollMotionEffect
              effect="fade-right"
              duration="2000"
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2   gap-8 w-full">
                {leftFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 ">
                    <div className="text-green-500 bg-white p-3 rounded-full">
                      <Image
                        src={item.image}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="zoom-in" duration="2000">
              {/* Center Image */}
              <div className="flex flex-col items-center overflow-hidden rounded-3xl">
                <Image
                  width={500}
                  height={400}
                  className="w-full max-w-[480px] object-cover"
                  src={"/assets/homepage/spinal-medical.jpg"}
                  alt={"about image"}
                />
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect
              effect="fade-right"
              duration="2000"
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2   gap-8 w-full">
                {rightFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 ">
                    <div className="text-green-500 bg-white p-3 rounded-full">
                      <Image
                        src={item.image}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinalMedical;

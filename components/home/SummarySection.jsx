import { GiWorld } from "react-icons/gi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import NumberAnimation from "../shared/NumberAnimation";

const summaryList = [
  {
    icon: <IoCalendarClearOutline className="size-10" />,
    title: 24,
    desc: "Years Experience",
    bgImg: "/assets/homepage/summary-bg-1.png",
  },
  {
    icon: <MdOutlineMedicalServices className="size-10" />,
    title: 16,
    desc: "Medical Center",
    bgImg: "/assets/homepage/summary-bg-2.png",
  },
  {
    icon: <GiWorld className="size-10" />,
    title: 6,
    desc: "Counties",
    bgImg: "/assets/homepage/summary-bg-3.png",
  },
  // {
  //   icon: <RiCustomerService2Line className="size-10" />,
  //   title: "24/7",
  //   desc: "Availability",
  // },
];

const SummarySection = () => {
  return (
    <section className="bg-pblack">
      <div className="container  p-6 md:p-16">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch justify-between gap-8">
            {summaryList?.map((el, index) => (
              <div
                className="bg-[#323232] flex items-stretch justify-center space-x-4 text-white px-16 py-16 rounded-lg"
                key={index}
                style={{
                  backgroundImage: `url('${el?.bgImg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="">{el?.icon}</div>
                <div className="">
                  {/* <h1 className="text-xl font-bold text-left">{el?.title}</h1> */}
                  <NumberAnimation
                    className="text-xl font-bold text-left"
                    value={el?.title}
                    incrementPlus={1}
                    duration={200}
                  />
                  <p className="text-xs text-left">{el?.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#323232] flex items-center justify-center space-x-4 text-white px-16 py-16 rounded-lg">
              <div className="">
                <RiCustomerService2Line className="size-10" />
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-left">24/7</h1>
                <p className="text-xs text-left">Availability</p>
              </div>
            </div>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default SummarySection;

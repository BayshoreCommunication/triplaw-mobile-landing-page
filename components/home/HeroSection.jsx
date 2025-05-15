"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Link from "next/link";

const HeroSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: "Hess Spinal & Medical Centers",
      to_email: "marketing.hessspinal@gmail.com",
    };

    emailjs
      .send(
        "service_mo62afg",
        "template_l0n9gpu",
        templateParams,
        "98zEJK8kTVuegaDdJ"
      )
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#131b2a",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again later.",
        });
      });
  };

  const text = `Dedicated to your   Recovery.`.split("  ");
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full h-[1100px] md:h-[750px] flex items-center justify-center mt-[64px] md:mt-[110px]">
      <Image
        className="absolute inset-0 object-cover bg-top w-full h-full"
        width={3000}
        height={700}
        src={"/assets/homepage/home-banner1.jpg"}
        alt="Bg Image "
      />

      {/* Centered text */}

      <div className="container relative flex md:flex-row flex-col items-center justify-center w-full space-x-0 md:space-x-16">
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="w-full md:w-[65%]"
        >
          <h1 className="text-[35px] md:text-[48px] lg:text-6xl font-bold text-black text-center md:text-left leading-snug md:leading-none">
            {/* After an Accident, You're Family- Specialized Medical Care When You
          Need It Most. */}
            <motion.h1 className="text-[35px] md:text-[48px] lg:text-6xl font-bold text-white text-center md:text-left leading-snug md:leading-none">
              {text.map((word, index) => {
                // Check if the word is "Accident."
                const isAccident = word.includes("Recovery.");

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                    className="inline-block mr-1"
                  >
                    {isAccident ? (
                      <motion.span
                        animate={{
                          color: ["#000000", "#FF5733", "#0088FF", "#000000"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="inline-block ms-3"
                      >
                        {word}
                      </motion.span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </motion.h1>
          </h1>

          <motion.h2
            variants={variants}
            className="mt-2 md:mt-6 text-[18px] md:text-[20px] font-semibold text-white/90 text-center md:text-left leading-tight"
          >
            We have specialized in treating the victims of auto accidents since
            2001. Let our team of dedicated medical professionals help you find
            relief from your pain and suffering. Request Appointment
          </motion.h2>

          <motion.div
            variants={variants}
            className="mt-4 md:mt-8 flex justify-center md:justify-start z-50"
          >
            <div className="group hover:scale-105  transition duration-300">
              <Link href="/">
                <button className="relative overflow-hidden text-white font-normal text-lg bg-primary px-8 md:px-16 py-4 rounded-full cursor-pointer border-2 border-white">
                  <span className="relative z-10 transition-colors duration-300">
                    Request Appointment
                  </span>
                  <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            className=" flex justify-center md:justify-start z-50 mt-10"
          >
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full items-stretch gap-3 mt-5 text-base ">
              <li className="px-3 py-3 bg-white shadow-small rounded flex justify-center items-center text-center">
                Walk-Ins Welcome
              </li>
              <li className="px-3 py-3 bg-white shadow-small rounded flex justify-center items-center text-center">
                Same Day Appointments
              </li>
              <li className="px-3 py-3 bg-white shadow-small rounded flex justify-center items-center text-center">
                16 Convenient Locations
              </li>
              <li className="px-3 py-3 bg-white shadow-small rounded flex justify-center items-center text-center">
                Hablamos Su Idioma
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-[35%] mt-10 md:mt-0">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="bg-white py-8 md:py-14 px-4 md:px-8 rounded-2xl">
              <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-800 text-center leading-tight">
                Request a Consultation
              </h2>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="w-full mt-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="w-full mt-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="w-full mt-5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none"
                    placeholder="Your message"
                    required
                  />
                </div>

                <div className="group transition duration-300 mt-8 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-3 rounded-full hover:bg-green-800 cursor-pointer w-full"
                  >
                    <span className="relative z-10">
                      {loading ? "Sending..." : "Submit"}
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </div>
              </form>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);

"use client";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { PiDiamondsFourBold } from "react-icons/pi";

import Swal from "sweetalert2";
import DatePickerInputField from "../shared/DatePickerInputField";
import DropdownInputField from "../shared/DropdownInputField";

const InfoFormSection = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "Option 1", value: "option_1" },
    { label: "Option 2", value: "option_2" },
    { label: "Option 3", value: "option_3" },
  ];
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

  const handleDateChange = (dateString) => {
    setFormData((prev) => ({
      ...prev,
      date: dateString,
    }));
  };

  return (
    <div>
      <div className="w-full">
        <div className="bg-white py-8 md:py-14 px-4 md:px-8 rounded-2xl">
          <div className="">
            {/* <LuNotebook className="text-gray-900 size-9" /> */}
            <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-800 leading-tight">
              Fill Out the Case Info Form Below
            </h2>
          </div>
          <p>
            Save time by filling out the form before arriving. Uploading
            documents is optional but highly encouraged.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-center space-x-1">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[28px] font-semibold text-gray-800 leading-tight">
                Personal Immigration
              </h2>
            </div>
            <div className="w-full mt-5">
              <label className="">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="Enter Full Name"
                required
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Email </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="Enter Email Address"
                required
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Phone Number </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="+911 123456789"
                required
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Email </label>
              <DatePickerInputField
                id="basicInformation.dateOfBirth"
                name="basicInformation.dateOfBirth"
                value={formData?.date}
                onChange={handleDateChange}
                placeholder="Select birth date"
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Country of Citizenship </label>
              <DropdownInputField
                options={options}
                value={selectedValue}
                onChange={setSelectedValue}
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
      </div>
    </div>
  );
};

export default InfoFormSection;

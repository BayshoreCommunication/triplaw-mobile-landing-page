"use client";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required!";
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid!";
    }
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const templateParams = {
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || "No Subject",
        message: formData.message,
        to_name: "Hess Spinal & Medical Centers",
        to_email: "marketing.hessspinal@gmail.com",
      };

      send(
        "service_mo62afg", // ✅ replace with your service ID
        "template_ltft2tl", // ✅ replace with your template ID
        templateParams,
        "98zEJK8kTVuegaDdJ" // ✅ replace with your public key
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#131b2a",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
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
    }
  };

  return (
    <div className="container py-10 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 items-center">
        {/* Left side - Contact Form */}
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-stone-950 text-center md:text-left mb-4 mt-5">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              The physicians and staff at Hess Spinal and Medical Centers
              understand that being injured in an auto accident can be extremely
              stressful for you and your family.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded-md p-3 w-full shadow-sm"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-md p-3 w-full shadow-sm"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border rounded-md p-3 w-full shadow-sm"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border rounded-md p-3 w-full shadow-sm"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  className="border rounded-md p-3 w-full shadow-sm h-32 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4 transition duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </ScrollMotionEffect>

        {/* Right side - Image */}
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="relative w-full">
            <Image
              src="/assets/homepage/examining-spine.png"
              alt="Doctors examining spine"
              width={600}
              height={500}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default ContactUs;

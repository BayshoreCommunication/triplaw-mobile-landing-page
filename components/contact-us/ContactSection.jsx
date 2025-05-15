"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

const ContactSection = () => {
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
        name: formData.name, // Duplicate for template compatibility
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || "No Subject",
        message: formData.message,
        to_name: "Hess Spinal & Medical Centers", // Static recipient name
        to_email: "marketing.hessspinal@gmail.com",
      };

      send(
        "service_mo62afg",
        "template_ltft2tl",
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
    <div className="p-5 lg:p-8 bg-[#F1F1F1] rounded-2xl flex flex-col gap-3 lg:gap-5">
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
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
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
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
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
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
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
            <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
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
  );
};

export default ContactSection;

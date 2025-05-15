"use client";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { IoArrowBackOutline, IoFileTrayFull } from "react-icons/io5";
import { PiDiamondsFourBold } from "react-icons/pi";

import Link from "next/link";
import Swal from "sweetalert2";
import DatePickerInputField from "../shared/DatePickerInputField";
import DropdownInputField from "../shared/DropdownInputField";
import ImageUploadInputField from "../shared/ImageUploadInputField";
import InputCheckboxField from "../shared/InputCheckboxField";

const citizenList = [
  { label: "Green Card Holder", value: "Green Card Holder" },
  { label: "Undocumented", value: "Undocumented" },
  { label: "F-1", value: "F-1" },
  { label: "H-1B", value: "H-1B" },
  { label: "B1/B2", value: "B1/B2" },
  { label: "Asylum Seeker", value: "Asylum Seeker" },
  { label: "TPS", value: "TPS" },
  { label: "DACA", value: "DACA" },
  { label: "Other", value: "Other" },
];

const seekingList = [
  { label: "Family Petition", value: "Family Petition" },
  { label: "Citizenship", value: "Citizenship" },
  { label: "E-2/Investment", value: "E-2/Investment" },
  { label: "Student/Work Visa", value: "Student/Work Visa" },
  { label: "Asylum", value: "Asylum" },
  { label: "Other", value: "Other" },
];

const InfoFormSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [filedBefore, setFiledBefore] = useState("");

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateofBirth: "June 14, 2025",
    countryofCitizenship: "",
    currentUSImmigrationStatus: "",
    howlonghaveyoubeenintheUS: "",
    applicationsBefore: "",
    typeofApplications: "",
    seeking: "",
    brieflyDescribe: "",
    upload: "",
    brieflyDescribe: "",
    understand: false,
    acknowledge: false,
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.understand || !formData.acknowledge || !formData.consent) {
      Swal.fire({
        icon: "warning",
        title: "Confirmation Required",
        text: "Please confirm that you understand, acknowledge, and consent before submitting the form.",
      });

      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_21srltl",
        "template_lmck77e",
        formData,
        "QQbwIXKpnJegjLF_x"
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
          dateofBirth: "",
          countryofCitizenship: "",
          currentUSImmigrationStatus: "",
          howlonghaveyoubeenintheUS: "",
          applicationsBefore: "",
          typeofApplications: "",
          seeking: "",
          brieflyDescribe: "",
          upload: "",
          brieflyDescribe: "",
          understand: false,
          acknowledge: false,
          consent: false,
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
  };

  const handleDateChange = (dateString) => {
    setFormData((prev) => ({
      ...prev,
      dateofBirth: dateString,
    }));
  };

  console.log("check vlaue item", formData);

  return (
    <div>
      <div className="w-full px-4 ">
        <Link
          href={"/"}
          className="bg-gray-200 hover:bg-gray-700 hover:text-white p-1 rounded-full w-10 h-10 flex items-center justify-center mt-3 text-gray-900  "
        >
          <IoArrowBackOutline className="size-5" />
        </Link>
        <div className="bg-white py-5 rounded-2xl mb-4">
          <div className="flex items-start space-x-2">
            <IoFileTrayFull className="text-gray-900 size-7" />
            <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
              Fill Out the Case Info Form Below
            </h2>
          </div>
          <p className="mt-2">
            Save time by filling out the form before arriving. Uploading
            documents is optional but highly encouraged.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-center space-x-1">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
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
                name="email"
                value={formData.email}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="+911 123456789"
                required
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Date of Birth</label>
              <DatePickerInputField
                id="basicInformation.dateOfBirth"
                name="basicInformation.dateOfBirth"
                value={formData?.dateofBirth}
                onChange={handleDateChange}
                placeholder="Select birth date"
              />
            </div>

            <div className="w-full mt-5">
              <label className="">Country of Citizenship </label>
              <input
                type="text"
                name="countryofCitizenship"
                value={formData.countryofCitizenship}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="Country of Citizenship "
                required
              />
            </div>

            <div className="flex items-center space-x-1 mt-6">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
                Immigration Background
              </h2>
            </div>

            <div className="w-full mt-5">
              <label className="">Current U.S. Immigration Status</label>
              <DropdownInputField
                name="currentUSImmigrationStatus"
                options={citizenList}
                formData={formData}
                setFormData={setFormData}
                placeholder="Select your citizenship status"
              />
            </div>

            <div className="w-full mt-5">
              <label className="">How long have you been in the U.S.?</label>
              <input
                type="text"
                name="howlonghaveyoubeenintheUS"
                value={formData.howlonghaveyoubeenintheUS}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="How long have you been in the U.S.?"
                required
              />
            </div>

            <div className="w-full mt-5">
              <label className="">
                Have you filed any immigration applications before?
              </label>
              <InputCheckboxField
                name="applicationsBefore"
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                selected={formData?.applicationsBefore}
                setFormData={setFormData}
              />
            </div>

            <div className="w-full mt-5">
              <label className="">
                If yes, please list the type(s) of applications
              </label>
              <textarea
                rows={4}
                name="typeofApplications"
                value={formData.typeofApplications}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="If yes, please list the type(s) of applications"
                required
              />
            </div>

            <div className="flex items-center space-x-1 mt-6">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
                Reason for Your Visit
              </h2>
            </div>

            <div className="w-full mt-5">
              <label className="">
                What type of help are you seeking today?
              </label>
              <DropdownInputField
                name={"seeking"}
                options={seekingList}
                formData={formData}
                setFormData={setFormData}
                placeholder="What are you seeking?"
              />
            </div>

            <div className="w-full mt-5">
              <label className="">
                Briefly describe your situation or question
              </label>
              <textarea
                rows={4}
                name="brieflyDescribe"
                value={formData.brieflyDescribe}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none mt-2"
                placeholder="Briefly describe your situation or question"
                required
              />
            </div>

            <div className="flex items-center space-x-1 mt-6">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
                Document Upload (Optional)
              </h2>
            </div>

            <div className="w-full mt-5">
              <label className="">
                What type of help are you seeking today?
              </label>
              <ImageUploadInputField
                formData={formData}
                setFormData={setFormData}
              />
            </div>

            <div className="flex items-center space-x-1 mt-6">
              <PiDiamondsFourBold className="text-gray-900 size-6" />
              <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
                Consent & Acknowledgment
              </h2>
            </div>

            <div className="">
              <div className="space-y-4 p-4 max-w-xl text-gray-800">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="w-7 h-7">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      name="understand"
                      checked={formData.understand || false}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <span>
                    I understand that this is a free consultation only and does
                    not establish an attorney-client relationship.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="w-7 h-7">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      name="acknowledge"
                      checked={formData.acknowledge || false}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <span>
                    I acknowledge that no legal work, filings, corrections, or
                    applications will be completed during or after this clinic
                    unless a separate agreement is signed with Trip Law, P.A.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="w-7 h-5">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      name="consent"
                      checked={formData.consent || false}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <span>
                    I consent to Trip Law, P.A. reviewing the information and
                    documents I’ve submitted solely for the purpose of this
                    clinic.
                  </span>
                </label>
              </div>
            </div>

            <h2 className="text-lg  text-gray-800 leading-tight text-center my-3">
              After submitting, simply walk in on the day of the event. A
              volunteer will guide you through check-in.
            </h2>

            <div className="group transition duration-300 mt-8 text-center">
              <button
                type="submit"
                disabled={loading}
                className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-[#060B28] px-8 md:px-20 py-3 rounded-lg hover:bg-[#060b28d3] cursor-pointer w-full"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Submit"}
                </span>
                <span className="absolute inset-0 bg-[#060b28d3] z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoFormSection;

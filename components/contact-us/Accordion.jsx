"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including consultations, project planning, and complete implementation tailored to your needs.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation through our contact form or by calling our office during business hours.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in working with healthcare, technology, and legal industries, but we are open to all sectors.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary depending on project scope, but most are completed within 4 to 8 weeks after kickoff.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b pb-4 transition-all duration-1000 ease-in-out"
          >
            <button
              className="w-full text-left text-lg font-medium text-stone-800 focus:outline-none"
              onClick={() => toggle(index)}
            >
              {item.question}
            </button>
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-stone-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

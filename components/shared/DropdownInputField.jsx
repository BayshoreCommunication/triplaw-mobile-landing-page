"use client";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const DropdownInputField = ({
  name, // ✅ Field name for formData
  options,
  setFormData,
  formData,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: selectedValue, // ✅ Set dynamic key
    }));
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-full mt-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-800 focus:outline-none focus:ring-primary focus:border-primary placeholder-gray-400 outline-none"
        >
          {formData?.[name]
            ? options.find((opt) => opt.value === formData[name])?.label
            : placeholder}
          <TiArrowSortedDown className="text-gray-800 size-5" />
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownInputField;

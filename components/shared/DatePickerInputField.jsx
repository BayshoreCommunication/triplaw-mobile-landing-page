"use client";

import { useMemo, useState } from "react";

const DatePickerInputField = ({
  value,
  onChange,
  name,
  id,
  placeholder = "Select date",
  label,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const formattedDate = useMemo(() => {
    if (!value) return "";
    try {
      const date = new Date(value);
      if (isNaN(date.getTime())) return "";
      return date.toISOString().split("T")[0];
    } catch {
      return "";
    }
  }, [value]);

  const handleChange = (e) => {
    const dateValue = e.target.value;
    if (!dateValue) {
      onChange("");
      return;
    }

    // Convert to desired format: "July 15, 2025"
    const formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    onChange(formattedDate);
  };

  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type="date"
          className={`w-full ${
            isFocused ? "border-primary" : "border-gray-300"
          } bg-white border text-lg rounded-lg focus:ring-primary focus:border-primary block pl-4 py-2 placeholder-gray-400 active:border-primary outline-none`}
          placeholder={placeholder}
          name={name}
          value={formattedDate}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            // Hide native calendar icon for Chrome, Firefox, Edge
            appearance: "none",
            MozAppearance: "textfield",
          }}
        />
      </div>

      <style jsx>{`
        /* Hide calendar icon in Chrome */
        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
      `}</style>
    </div>
  );
};

export default DatePickerInputField;

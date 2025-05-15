"use client";

const InputCheckboxField = ({ name, options, selected, setFormData }) => {
  const handleSelect = (selectedValue) => {
    setFormData((prev) => ({
      ...prev,
      applicationsBefore: selectedValue, // ✅ Set dynamic key
    }));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-4 mt-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition
              ${
                selected === option.value
                  ? "border-[#AAB4C8] bg-[#F1F5FA] text-[#1D3557]"
                  : "border-[#D0D7E2] bg-white text-gray-600 hover:border-[#AAB4C8]"
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleSelect(option.value)}
              className="form-radio text-[#1D3557] focus:ring-0"
            />
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputCheckboxField;

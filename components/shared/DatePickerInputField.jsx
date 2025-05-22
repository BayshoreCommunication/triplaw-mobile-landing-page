// components/shared/DatePickerInputField.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInputField() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center w-full bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary  pl-4 py-2 placeholder-gray-400 outline-none mt-2">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Date"
          className="w-full outline-none bg-transparent placeholder-gray-400  min-w-96"
          calendarClassName="text-gray-100 rounded-lg shadow-lg border border-gray-700 !p-4"
          popperClassName="z-50"
          weekDayClassName={() => "text-gray-400"}
        />

        <CalendarIcon className="w-5 h-5 text-gray-500 mr-3" />
      </div>

      <style jsx global>{`
        .react-datepicker__header {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
}

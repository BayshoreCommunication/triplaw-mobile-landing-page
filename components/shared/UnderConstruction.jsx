import React from "react";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

const UnderConstruction = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="text-yellow-500 animate-bounce text-6xl mb-4 flex justify-center">
            <FaTools />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Site Under Construction
          </h1>
          <p className="text-gray-600 mb-6">
            {`We’re working hard to bring you a great experience. Please check
        back soon!`}
          </p>
          <Link
            href="mailto:info@melamedlaw.com"
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

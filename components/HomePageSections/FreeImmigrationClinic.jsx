import Link from "next/link";
import React from "react";

const FreeImmigrationClinic = () => {
  return (
    <div className="pt-6 pb-8">
      <div className="container">
        <div>
          <h2 className="text-[18px] lg:text-[22px] text-[#060B28] font-bold lg:font-extrabold ">
            🛂 Free Immigration Clinic
          </h2>
          <p className="text-[16px] text-gray-700 font-semibold mt-2 mb-4">
            One-on-One Consultations with Attorney Hardam H. Tripathi, Esq.
            Hosted by Trip Law, P.A. | Powered by Social Midas
          </p>
          <ul className="text-[16px] text-[#060B28] font-semibold mt-2 space-y-3">
            <li>
              <span>📅</span> Saturday, May 24, 2025
            </li>
            <li>
              <span>📍</span> Tampa Heights Youth Development & Community Center
            </li>
            <li>
              <span>🕘</span> Clinic: All Day | Immigration Info Session: 5:00
              PM EST
            </li>
            <li>
              <span>💬</span> Facing an Immigration Issue? Get Help—For PM EST
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-[18px] lg:text-[22px] text-[#060B28] font-bold lg:font-extrabold ">
            📝 Fill Out the Case Info Form Below
          </h2>
          <p className="text-[16px] text-gray-700 font-semibold mt-2 mb-4">
            Save time by filling out the form before arriving. Uploading
            documents is optional but highly encouraged.
          </p>
          <div className="w-full">
            <Link
              href="/info-form"
              className="block w-full text-[16px] text-white font-semibold py-4 px-6 bg-[#060B28] text-center rounded-md"
            >
              Fill Out The Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeImmigrationClinic;

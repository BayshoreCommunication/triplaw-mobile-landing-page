import Image from "next/image";
import React from "react";

const ImmigrationPartner = () => {
  return (
    <div>
      <Image
        src="/assets/homepage/ImmigrationPartner.png"
        width={1920}
        height={1080}
      ></Image>
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2  gap-6">
            {/* <!-- Family Immigration Card --> */}
            <div>
              <div>
                <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                  Family Immigration
                </h2>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ms-[20px]">
                  <li>Green Cards Through Marriage</li>
                  <li>Spousal & Relative Sponsorship</li>
                  <li>Consular Processing</li>
                </ul>
              </div>
            </div>

            {/* <!-- Humanitarian Relief Card --> */}
            <div>
              <div>
                <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                  Humanitarian Relief
                </h2>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ms-[20px]">
                  <li>Asylum Application</li>
                  <li>Green Cards Through Relief</li>
                </ul>
              </div>
            </div>

            {/* <!-- Employment Visas Card --> */}
            <div>
              <div>
                <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                  Employment Visas
                </h2>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ms-[20px]">
                  <li>H-1B, L-1, O-1</li>
                  <li>EB-1, EB-2, EB-3</li>
                </ul>
              </div>
            </div>

            {/* <!-- Investor & Business Card --> */}
            <div>
              <div>
                <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                  Investor & Business
                </h2>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ms-[20px]">
                  <li>E-2 Treaty Investor Visa</li>
                  <li>EB-5 Investor Green Card</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div>
              <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                Citizenship & Naturalization
              </h2>
            </div>
          </div>

          <div className="my-5">
            <div>
              <h2 className="text-xl font-semibold lg:font-bold text-[#060B28] mb-2">
                Why Choose Trip Law?
              </h2>
            </div>
            <div>
              <ul className="space-y-2 text-gray-700 list-disc list-outside ms-[20px]">
                <li>
                  Nationwide Representation - Licensed to practice in
                  Immigration Law across all 50 states
                </li>
                <li>
                  Federal Experience - Served with DOJ, DEA, ATF, and U.S. Air
                  Force JAG (Civilian)
                </li>
                <li>
                  Client-Focused-Tailored strategy and transparent support
                </li>
                <li>Flexible Payment Plans Available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPartner;

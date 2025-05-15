import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";

const AchievementSection = () => {
  return (
    <div>
      <SectionLayout bg="bg-[#1E2538]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 justify-between items-center ">
          <Image
            src="/assets/shared/achievement-1.png"
            alt="achievements"
            width={167}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-2.png"
            alt="achievements"
            width={158}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-3.png"
            alt="achievements"
            width={128}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-4.png"
            alt="achievements"
            width={176}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-5.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-6.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-7.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
        </div>
      </SectionLayout>
    </div>
  );
};

export default AchievementSection;

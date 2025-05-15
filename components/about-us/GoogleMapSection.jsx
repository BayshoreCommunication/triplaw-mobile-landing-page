import React from "react";
import GoogleMap from "../shared/GoogleMap";
import CardMotion from "../motion/CardMotion";

const GoogleMapSection = () => {
  return (
    <div className="">
      <div>
        <div className=" h-[400px] lg:h-[600px] w-full">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default GoogleMapSection;

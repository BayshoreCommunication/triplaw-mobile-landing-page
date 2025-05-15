"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="h-700">
          <InlineWidget
            className="inline-widget"
            url="https://calendly.com/arsahak-bayshore/30min"
            styles={{
              height: "750px",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#132841",
              textColor: "#132841",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendly;

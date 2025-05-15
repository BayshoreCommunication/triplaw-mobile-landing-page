import AboutSection from "@/components/home/AboutSection";
import CanHelpYou from "@/components/home/CanHelpYou";
import ContactUs from "@/components/home/ContactUs";
import FindOurLocation from "@/components/home/FindOurLocation";
import HeroSection from "@/components/home/HeroSection";
import LatestBlogs from "@/components/home/LatestBlogs";
import OurKeyOfferings from "@/components/home/OurKeyOfferings";
import OurTechnologies from "@/components/home/OurTechnologies";
import SpinalMedical from "@/components/home/SpinalMedical";
import SpinalMedicalCenter from "@/components/home/SpinalMedicalCenter";
import SummarySection from "@/components/home/SummarySection";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import GoogleMap from "@/components/shared/GoogleMap";

export const metadata = {
  title: `Hess Spinal & Medical Centers: Car Accident Injury Clinic`,
  description: `Multi-Disciplinary. Hess offers on site digital X-rays, physical therapy, chiropractic care, trigger point injections and medical evaluations at each location.`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <SummarySection />
      <SpinalMedicalCenter />
      <OurKeyOfferings />
      <CanHelpYou />
      <SpinalMedical />
      {/* Abu design part */}

      <FindOurLocation />
      {/* <FindOurLocation /> */}
      {/* <TestimonialSlideSection /> */}
      <OurTechnologies />
      <WhatPeopleSay />
      <LatestBlogs />
      <GoogleMap />
      <ContactUs />
    </main>
  );
}

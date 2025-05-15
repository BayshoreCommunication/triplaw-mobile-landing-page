import Footer from "../components/HomePageSections/Footer";
import FreeImmigrationClinic from "../components/HomePageSections/FreeImmigrationClinic";
import HomePageHeroSection from "../components/HomePageSections/HomePageHeroSection";
import ImmigrationPartner from "../components/HomePageSections/ImmigrationPartner";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
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

const page = () => {
  return (
    <div className="w-full max-w-screenMobile mx-auto overflow-hidden">
      <HomePageHeroSection />
      <FreeImmigrationClinic />
      <ImmigrationPartner />
      <Footer />
    </div>
  );
};

export default page;

import HomePageHeroSection from "../components/HomePageSections/HomePageHeroSection";
import FreeImmigrationClinic from "../components/HomePageSections/FreeImmigrationClinic";
import ImmigrationPartner from "../components/HomePageSections/ImmigrationPartner";
import Footer from "../components/HomePageSections/Footer";

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

import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import FAQ from "@/components/contact-us/FAQ";
import PageHeroSection from "@/components/shared/PageHeroSection";

export const metadata = {
  title: ``,
  description: ``,
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
    <>
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Contact Us"}
        link={"contact us"}
      />
      <ContactHeroSection />
      <GoogleMapSection />
      <FAQ />
    </>
  );
};

export default page;

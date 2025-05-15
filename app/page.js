import HeroSection from "@/components/home/HeroSection";

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

export default function Home() {
  return (
    <main className="max-w-screenMobile mx-auto">
      <HeroSection />
    </main>
  );
}

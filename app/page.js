export const metadata = {
  title: "Trip Law | Outstanding Immigration Representation",
  description:
    "Trip Law is dedicated to providing outstanding immigration representation with a deep commitment to humanity.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto px-4">
      <HomePageHeroSection />
    </main>
  );
}

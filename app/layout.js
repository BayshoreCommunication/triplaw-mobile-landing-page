import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    "https://hessspinalandmedicalcenters-website.vercel.app"
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

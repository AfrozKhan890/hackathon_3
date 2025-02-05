import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CombinedProvider} from "@/context/CartProvider"; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SanityLive } from "@/sanity/lib/live";
import {ClerkProvider} from "@clerk/nextjs"

// Import the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the font weights you need
  display: "swap", // Ensures the text uses fallback fonts until Poppins loads
});

export const metadata:Metadata = {
  title: {
    default:"Furniro",
    template:"%s | Furniro ",
  },
  description: "Developed by Ahmed Noorani",
  icons:"/logo.png"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
      <ToastContainer />
        <CombinedProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="">{children}</main>

          {/* Footer */}
          <Footer />
        </CombinedProvider>
        <SanityLive/>
      </body>
    </html>
    </ClerkProvider>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./(Home Page)/Footer";
import Navbar from "./(Home Page)/NAV";
import { ToastProvider } from "@/components/ui/ToastProvider";
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WFCCES | World Forum on Climate Change and Environmental Sustainability",
  description: "We are a global platform dedicated to bringing together leaders, scientists, activists, innovators, and change-makers to address the urgent environmental challenges facing our world. At WFCCES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      <Footer/>
      <ToastProvider/>
      <TawkToChat/>
      <FloatingWhatsAppButton/>
      </body>
    </html>
  );
}

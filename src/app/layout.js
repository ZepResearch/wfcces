import localFont from "next/font/local";
import "./globals.css";
import Footer from "./(Home Page)/Footer";
import Navbar from "./(Home Page)/NAV";
import { ToastProvider } from "@/components/ui/ToastProvider";
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";
import Script from "next/script";

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
  title: "World Forum on Climate Change and Environmental Sustainability (WFCCES)",
  description: "Global platform uniting leaders, scientists, activists, and innovators to address urgent environmental challenges and create a sustainable future through collective action and knowledge sharing.",
  keywords: "climate change, environmental sustainability, global warming, sustainable development, climate action, environmental conservation, climate science, sustainability forum",
  authors: [{ name: "WFCCES" }],
  openGraph: {
    title: "World Forum on Climate Change and Environmental Sustainability",
    description: "Join global leaders and experts in addressing urgent environmental challenges for a sustainable future.",
    type: "website",
    locale: "en_US",
    siteName: "WFCCES",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Forum on Climate Change and Environmental Sustainability",
    description: "Global platform for climate action and environmental sustainability.",
  },
  alternates: {
    canonical: "https://www.wfcces.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script 
      async 
      src="https://www.googletagmanager.com/gtag/js?id=AW-16952766572"
      strategy="afterInteractive"
    />
    <Script 
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16952766572');
        `
      }}
    />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-12`}
      >
        
        <Navbar/>
        {children}
      <Footer/>
      <ToastProvider/>
      <TawkToChat/>
       <FloatingWhatsAppButton phoneNumber="8260080050" message="How can we assist you?"/>
      </body>
    </html>
  );
}

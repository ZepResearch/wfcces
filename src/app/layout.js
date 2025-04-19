import localFont from "next/font/local";
import "./globals.css";
import Footer from "./(Home Page)/Footer";
import Navbar from "./(Home Page)/NAV";
import { ToastProvider } from "@/components/ui/ToastProvider";
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";
import Script from "next/script";
import { LineMessengerButton } from "./(Home Page)/line-messenger-button";

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
      {/* <TawkToChat/> */}
      <LineMessengerButton/>
       {/* <FloatingWhatsAppButton phoneNumber="8260080050" message="How can we assist you?"/> */}
       <Script
          id="chatbot-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "6068a1a1-e755-4ddb-80e6-2d3677845184";
              window.__ow.template_id = "8fec0e29-9657-4c22-833f-fa7a0b971881";
              window.__ow.integration_name = "manual_settings";
              window.__ow.product_name = "chatbot";   
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
            `,
          }}
        />
        <noscript>
          You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
        </noscript>
      </body>
    </html>
  );
}

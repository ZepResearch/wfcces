import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Calendar, MapIcon, Phone, MailIcon } from 'lucide-react';

const footerSections = [
  {
    title: "About",
    links: [
      { name: "Conference", href: "/about-conference" },
      { name: "Organizers", href: "/about-organizers" },
      { name: "Committee", href: "/committee" },
      { name: "Sponsorship", href: "/sponsorship" },
    ],
  },
  {
    title: "Call for Papers",
    links: [
      { name: "Themes and Topics", href: "/theme-and-topics" },
      { name: "Submission Guidelines", href: "/papers-format" },
      { name: "Presentation Formats", href: "/mode-of-presentation" },
      { name: "Conference schedule", href: "/schedule" },

    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Submit Abstract", href: "/submission" },
      { name: "Venue", href: "/venue" },
      { name: "Contact", href: "/contact" },
      { name: "Awards", href: "/awards" },
      { name: "Registration", href: "/registration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/terms-&-condition" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61561809783777", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/zepresearch/", icon: Instagram },
  { name: "Twitter", href: "https://x.com/Zepresearch", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/zep-research/", icon: Linkedin },
  { name: "Youtube", href: "https://youtube.com/@zepresearch", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-blue-900 border-t-2 border-blue-400">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black dark:bg-blue-900 bg-opacity-70 dark:bg-opacity-90"></div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="mb-2 text-xl text-blue-400 inline-flex items-center space-x-1">
              <Image
                src="/logosingle.png"
                alt="Climate Conference Logo"
                width={100}
                height={80}
                className="0"
              />
              <h1 className="mt-3 font-semibold">WFCCES</h1>
            </Link>
            <div className="inline-flex justify-start items-center text-white text-xl sm:text-xl font-semibold ">
          <Image src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg" width={100} height={40} alt="ICASEM" className=" " />
          <span className="-ml-3">Zep Research</span> 
          </div>
            <div className="flex space-x-4 ml-4 mb-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-600 hover:text-blue-300 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-base">
              <div className="flex items-center space-x-2 ">
                <MailIcon className="h-4 w-4 text-blue-100 " />
                <a
                  href="mailto:info@icemss.com"
                  className="text-blue-100 dark:text-blue-200 hover:text-blue-300 transition-colors"
                >
                 info@wfcces.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-100 " />
                <a
                  href="tel:+918260080050"
                  className="text-blue-100 dark:text-blue-200 hover:text-blue-300 transition-colors"
                >
                 +91 78488 54815
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapIcon  className="h-4 w-4 text-blue-100 " />
                <a
                  href="/venue"
                  className="text-blue-100 dark:text-blue-200 hover:text-blue-300 transition-colors"
                >
                  Conference Venue
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-100 " />
                <a
                  href="/schedule"
                  className="text-blue-100 dark:text-blue-200 hover:text-blue-300 transition-colors"
                >
                  Event Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-300">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-blue-100 dark:text-blue-200 hover:text-blue-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-400 dark:border-blue-700 text-center">
          <p className="text-sm text-blue-100 dark:text-blue-300">
            &copy; {new Date().getFullYear()} World Forum
            on Climate Change and Environmental Sustainability. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


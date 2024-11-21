import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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
      { name: "Themes and Topics", href: "/themes" },
      { name: "Submission Guidelines", href: "/submission-guidelines" },
      { name: "Presentation Formats", href: "/presentation-formats" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Submit Abstract", href: "/submit" },
      { name: "Venue", href: "/venue" },
      { name: "Contact", href: "/contact" },
      { name: "Awards", href: "/awards" },
      { name: "Registration", href: "/registration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-blue-900 border-t-2 border-blue-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731574048/riqztbfvpvaqzlqk19mc.png"
                alt="Climate Conference Logo"
                width={200}
                height={80}
              />
            </Link>
            <div className="flex space-x-4 ml-4 mb-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
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
                        className="hover:text-blue-500 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-blue-200 dark:border-blue-700 text-center">
          <p className="text-sm text-blue-500 dark:text-blue-300">
            &copy; {new Date().getFullYear()} International Conference on
            Climate Change and Sustainability. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

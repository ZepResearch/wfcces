import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MapPin, Phone } from "lucide-react"


export const metadata = {
  title: "Privacy Policy | WFCCES - Data Protection & Information Usage",
  description: "Learn how WFCCES protects and manages your personal data. Our privacy policy details data collection, usage, sharing practices, and your rights regarding your information.",
  keywords: [
    "WFCCES privacy policy",
    "data protection policy",
    "conference data privacy",
    "personal information protection",
    "WFCCES data security",
    "privacy rights",
    "data collection policy",
    "information usage policy"
  ],
  openGraph: {
    title: "Privacy Policy - WFCCES Data Protection Guidelines",
    description: "Understand how WFCCES collects, uses, and protects your personal information. Read our comprehensive privacy policy and data protection measures.",
    type: "website",
    url: "https://www.wfcces.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "WFCCES Privacy Policy & Data Protection",
    description: "Learn about our commitment to protecting your privacy and personal information at WFCCES.",
  },
  alternates: {
    canonical: "https://www.wfcces.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Structured data for the privacy policy page
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WFCCES Privacy Policy",
    description: "Privacy Policy and data protection guidelines for the World Forum on Climate Change and Environmental Sustainability",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What information does WFCCES collect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We collect personal information (name, email, phone), technical data (IP address, browser type), and conference-related information for registration and participation purposes."
          }
        },
        {
          "@type": "Question",
          name: "How is my personal data used?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your information is used to process conference registrations, provide updates about events, respond to inquiries, and improve our services."
          }
        },
        {
          "@type": "Question",
          name: "Who do you share my data with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We do not sell your data and only share it when required by law or with trusted partners involved in conference organization."
          }
        }
      ]
    },
    organization: {
      "@type": "Organization",
      name: "World Forum on Climate Change and Environmental Sustainability",
      alternateName: "WFCCES",
      address: {
        "@type": "PostalAddress",
        streetAddress: "DCB-330, 3rd Floor, DLF Cyber City, Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "ODISHA",
        postalCode: "751024",
        addressCountry: "IN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7358737843",
        email: "info@wfcces.com",
        contactType: "customer service"
      }
    }
  }
};
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 pb-2 underline underline-offset-4 decoration-blue-400 inline-block">
        Privacy Policy
      </h1>
      
      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-md">
          <CardTitle className="text-2xl">WFCCES Privacy Commitment</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            At WFCCES (World Forum on Climate Change and Environmental Sustainability), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you register for our conferences or interact with our website.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="information-collected">
              <AccordionTrigger>Information We Collect</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and cookies to enhance user experience.</li>
                  <li><strong>Conference Information:</strong> Details related to your registration, preferences, and participation.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="information-usage">
              <AccordionTrigger>How We Use Your Information</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2 text-gray-700">We use your information for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>To process your conference registration and payments.</li>
                  <li>To provide updates about the event, including schedules, changes, and relevant news.</li>
                  <li>To respond to your inquiries and provide support.</li>
                  <li>For internal analysis to improve our services and user experience.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-sharing">
              <AccordionTrigger>Data Sharing</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2 text-gray-700">We do not sell or share your personal data with third parties, except:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>When required by law or government authorities.</li>
                  <li>With trusted partners involved in the conference organization (e.g., payment processors).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="your-rights">
              <AccordionTrigger>Your Rights</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2 text-gray-700">You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Access your personal data and request corrections.</li>
                  <li>Request deletion of your personal data (subject to legal requirements).</li>
                  <li>Opt-out of marketing communications.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-security">
              <AccordionTrigger>Data Security</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We use secure servers and encryption protocols to protect your information. However, no online platform can guarantee 100% security.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For questions about our Privacy Policy, contact us at:
            </p>
            <div className="text-gray-700 font-medium mt-2">
            <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  <span>info@wfcces.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" />
                  <span>+91 7358737843</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


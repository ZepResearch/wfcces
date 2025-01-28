import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Cancellation Policy | WFCCES Conference 2025",
  description: "Learn about WFCCES conference cancellation and refund policies. Get up to 100% refund for cancellations 60+ days before the event, 50% for 30-59 days, and understand our refund process.",
  keywords: [
    "WFCCES cancellation policy",
    "conference refund policy",
    "climate conference cancellation",
    "WFCCES refunds",
    "conference booking cancellation",
    "environmental conference refund",
    "WFCCES 2025 cancellation",
    "conference registration policy"
  ],
  openGraph: {
    title: "Cancellation & Refund Policy - WFCCES Conference 2025",
    description: "Clear guidelines on conference cancellation policies and refund procedures for the World Forum on Climate Change and Environmental Sustainability 2025.",
    type: "website",
    url: "https://www.wfcces.com/cancellation-policy",
  },
  twitter: {
    card: "summary",
    title: "WFCCES Conference 2025 - Cancellation Policy",
    description: "Understand our conference cancellation policies and refund procedures. Transparent guidelines for all attendees.",
  },
  alternates: {
    canonical: "https://www.wfcces.com/cancellation-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Structured data for the policy page
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WFCCES Conference Cancellation Policy",
    description: "Cancellation and refund policy for the World Forum on Climate Change and Environmental Sustainability 2025",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the refund policy for early cancellations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cancellations made 60+ days before the conference receive a 100% refund."
          }
        },
        {
          "@type": "Question",
          name: "How do I cancel my registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Log in to your WFCCES conference account, navigate to My Registrations, select the registration to cancel, and follow the cancellation process."
          }
        },
        {
          "@type": "Question",
          name: "How long do refunds take to process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Refunds are processed to the original form of payment within 10 business days of approval."
          }
        }
      ]
    },
    organization: {
      "@type": "Organization",
      name: "World Forum on Climate Change and Environmental Sustainability",
      alternateName: "WFCCES"
    }
  }
};

export default function CancellationPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card className="bg-white  border-none">
        <CardHeader className="bg-blue-600 text-white py-8">
          <CardTitle className="text-3xl font-bold text-center">Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <section className="mb-10">
            <h1 className="text-2xl font-semibold text-blue-600 mb-4">Overview</h1>
            <h2 className="text-gray-700 leading-relaxed">
              We understand that plans can change. Our cancellation policy ensures fairness and clarity for all participants. Please review this policy carefully before registering for the World Forum on Climate Change and Environmental Sustainability (WFCCES).
            </h2>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <p className="text-2xl font-semibold text-blue-600 mb-6">Cancellation Fees</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-blue-600">Cancellation Period</TableHead>
                  <TableHead className="text-blue-600">Refund Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">60+ days before the conference</TableCell>
                  <TableCell>100% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">30-59 days before the conference</TableCell>
                  <TableCell>50% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Less than 30 days before the conference</TableCell>
                  <TableCell>No refund</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <p className="text-2xl font-semibold text-blue-600 mb-4">How to Cancel</p>
            <p className="text-gray-700 mb-4 leading-relaxed">To cancel your registration, please follow these steps:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Log in to your WFCCES conference account.</li>
              <li>Navigate to My Registrations.</li>
              <li>Select the registration you wish to cancel.</li>
              <li>Click on the Cancel Registration button.</li>
              <li>Follow the prompts to complete the cancellation process.</li>
            </ol>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <p className="text-2xl font-semibold text-blue-600 mb-4">Important Note</p>
            <p className="text-gray-700 leading-relaxed">
              All cancellation requests must be submitted through your WFCCES conference account. Refunds will be processed to the original form of payment within 10 business days of approval.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <p className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</p>
            <p className="text-gray-700 leading-relaxed mb-2">
              For any questions about our cancellation policy or assistance with the process, please reach out to our support team.
            </p>
            <Link href={"/contact"}>
            <Button>Contact us</Button>
            </Link>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}


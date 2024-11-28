import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
            <p className="text-gray-700 font-semibold mt-2">
              [Insert Contact Details]
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


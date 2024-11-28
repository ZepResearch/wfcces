import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 pb-2 underline underline-offset-4 decoration-blue-400 inline-block">
        Terms and Conditions
      </h1>
      
      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-md">
          <CardTitle className="text-2xl">Welcome to WFCCES</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            By registering for our conference or using our website, you agree to these Terms and Conditions. Please read them carefully.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="registration">
              <AccordionTrigger>Registration and Payment</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Registration is confirmed only after payment is successfully processed.</li>
                  <li>You are responsible for ensuring all information provided is accurate.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation">
              <AccordionTrigger>Cancellation and Refund Policy</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Refunds are provided as per our Cancellation Policy.</li>
                  <li>WFCCES reserves the right to amend the event schedule or cancel the conference due to unforeseen circumstances. In such cases, a full refund will be issued.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="conduct">
              <AccordionTrigger>Code of Conduct</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Participants must behave respectfully toward all attendees, speakers, and organizers.</li>
                  <li>Disruptive or inappropriate behaviour may result in removal from the event without refund.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intellectual-property">
              <AccordionTrigger>Intellectual Property</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>All content, including presentations and materials shared during the event, remains the intellectual property of WFCCES or the respective authors.</li>
                  <li>Unauthorized distribution or reproduction of content is prohibited.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="liability">
              <AccordionTrigger>Liability</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2 text-gray-700">WFCCES is not liable for:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Personal injury, loss, or damage during the event.</li>
                  <li>Technical issues affecting access to virtual sessions.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="changes">
              <AccordionTrigger>Changes to Terms</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We reserve the right to update these Terms and Conditions. Participants will be notified of significant changes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For any questions regarding these Terms and Conditions, contact us at:
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


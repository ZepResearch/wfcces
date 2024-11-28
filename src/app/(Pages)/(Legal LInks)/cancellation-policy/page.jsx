import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CancellationPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card className="bg-white  border-none">
        <CardHeader className="bg-blue-600 text-white py-8">
          <CardTitle className="text-3xl font-bold text-center">Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We understand that plans can change. Our cancellation policy ensures fairness and clarity for all participants. Please review this policy carefully before registering for the World Forum on Climate Change and Environmental Sustainability (WFCCES).
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Cancellation Fees</h2>
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Cancel</h2>
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Important Note</h2>
            <p className="text-gray-700 leading-relaxed">
              All cancellation requests must be submitted through your WFCCES conference account. Refunds will be processed to the original form of payment within 10 business days of approval.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
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


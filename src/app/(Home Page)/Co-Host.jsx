import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoHostCard() {
  return (
    <Card className="w-full max-w-7xl mx-auto border-none shadow-lg overflow-hidden bg-slate-50">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Logo */}
        <div className=" flex items-center justify-center  md:w-1/3">
          <div className="relative w-full  aspect-[2/1] rounded-3xl ">
            <Image src="/lincoln-logo.png" alt="Lincoln University College" fill className="object-contain " />
          </div>
        </div>

        {/* Right side - Information */}
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-blue-400 rounded-full">
              OFFICIAL CO-HOST
            </div>
            <h3 className="text-2xl font-bold">Lincoln University College</h3>
            <p className="mt-2 text-gray-600">
              Proud co-host of the World Forum on Climate Change and Environmental Sustainability. Lincoln University
              College brings academic excellence and innovative research to our global initiative.
            </p>
          </div>

          
        </div>
      </div>
    </Card>
  )
}

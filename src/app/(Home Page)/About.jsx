import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {/* <h3 className="text-lg font-semibold text-blue-600">About Us</h3> */}
            <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
            About The Conference 
            </h2>
            <p className="text-gray-600">
            The World Forum on Climate Change and Environmental Sustainability is a global platform that brings together experts, policymakers, researchers, and industry leaders to discuss and address pressing environmental challenges. The forum focuses on key issues such as climate change mitigation and adaptation, renewable energy, sustainable development, biodiversity conservation, and innovative environmental solutions.
            </p>
            <Button size="sm" className=" italic">
              <Link href="/about-conference">Know More</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-bold text-blue-400">5</span>
                  <span className="text-sm text-gray-600 text-center">
                    Years Running
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-bold text-blue-400">50+</span>
                  <span className="text-sm text-gray-600 text-center">
                    Expert Speakers
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-bold text-blue-400">
                    1000+
                  </span>
                  <span className="text-sm text-gray-600 text-center">
                    Attendees
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-bold text-blue-400">20+</span>
                  <span className="text-sm text-gray-600">
                    Countries Represented
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-full">
            <Image
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731934180/pttjzj2b7uebhimhhfbi.svg"
              alt="Conference founders discussing climate action"
              layout="fill"
              objectFit="cover"
              className="rounded-lg opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

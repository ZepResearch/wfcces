"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white min-h-full flex items-center justify-center py-12">
      <Card className="w-full max-w-7xl overflow-hidden p-4 pr-0 shadow-2xl rounded-3xl border-none bg-gradient-to-l from-gray-50 to-gray-200">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 pt-8 px-4 flex flex-col justify-between pl-8">
            <div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-4xl font-bold mb-2">
                  WFCCES Conference Venue
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2 bg-gray-100/70 p-3 rounded-lg">
                    <MapPin className="text-blue-600" />
                    <span className="font-medium">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100/70 p-3 rounded-lg">
                    <Calendar className="text-blue-600" />
                    <span className="font-medium">June 15-18, 2024</span>
                  </div>
                  {/* <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <Users className="text-blue-600" />
                    <span className="font-medium">Capacity: 5000</span>
                  </div> */}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience the future of sustainable conferences at our
                  state-of-the-art Eco Conference Center. Powered by 100%
                  renewable energy and featuring cutting-edge blue architecture
                </p>
                <div className="p-0  flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 font-bold"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Explore Venue
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
          <motion.div
            className="lg:w-1/2  flex justify-end items-center"
            transition={{ duration: 0.3 }}
          >
            <Image
              className=" inset-0 "
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731951726/kpz0y7pi3rmfdofxqvxi.svg"
              alt=""
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </Card>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Utensils,
  Camera,
  TreesIcon as Tree,
} from "lucide-react";

export default function VenuePage() {
  const nearbyPlaces = [
    {
      name: "Central Park",
      type: "Park",
      icon: Tree,
      description: "Expansive city park with walking trails and lakes.",
    },
    {
      name: "Metropolitan Museum",
      type: "Museum",
      icon: Camera,
      description: "World-renowned art museum with diverse collections.",
    },
    {
      name: "Gourmet Square",
      type: "Restaurants",
      icon: Utensils,
      description: "A hub of diverse culinary experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Venue
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  Global Conference Center
                </CardTitle>
                <CardDescription>
                  Your gateway to sustainable discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-2 text-blue-500" />
                  <p>123 Earth Avenue, Greenville, EC0 2PL</p>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="mr-2 text-blue-500" />
                  <p>Open from 7:00 AM to 9:00 PM during the conference</p>
                </div>
                <p className="text-gray-600 mb-4">
                  The Global Conference Center is a state-of-the-art facility
                  designed to host international events focused on environmental
                  sustainability and climate change. With its eco-friendly
                  architecture and advanced technology, it&apos;s the perfect
                  setting for our World Forum.
                </p>
                <Badge className="bg-blue-100 text-blue-700">
                  Eco-Certified Venue
                </Badge>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919576!2d-74.00594368459231!3d40.74076797932818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sJavits%20Center!5e0!3m2!1sen!2sus!4v1628713046665!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Conference Venue Location"
            ></iframe>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Nearby Places to Visit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-blue-700">
                        {place.name}
                      </CardTitle>
                      <place.icon className="text-blue-500" />
                    </div>
                    <CardDescription>{place.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{place.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

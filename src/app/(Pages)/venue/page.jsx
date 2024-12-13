"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Utensils, Camera, TreesIcon as Tree } from 'lucide-react';

export default function VenuePage() {
  const nearbyPlaces = [
    {
      name: "Petronas Twin Towers",
      type: "Landmark",
      icon: Camera,
      description: "Iconic skyscrapers with observation deck and skybridge.",
      image: "https://images.unsplash.com/photo-1520038933211-3663745c0de8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Batu Caves",
      type: "Religious Site",
      icon: Tree,
      description: "Hindu shrine with giant statue and limestone caves.",
      image: "https://plus.unsplash.com/premium_photo-1678303397238-76250a5ebf73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jalan Alor",
      type: "Food Street",
      icon: Utensils,
      description: "Famous street food haven with diverse local cuisine.",
      image: "https://images.unsplash.com/photo-1689198920518-39a33be29d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  Kuala Lumpur Convention Centre
                </CardTitle>
                <CardDescription>
                  Your gateway to sustainable discussions in the heart of Malaysia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-2 text-blue-500" />
                  <p>Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia</p>
                </div>
                <p className="text-gray-600 mb-4">
                  The Kuala Lumpur Convention Centre is a world-class facility
                  designed to host international events. With its strategic location
                  in the heart of Kuala Lumpur and state-of-the-art amenities,
                  it&apos;s the perfect setting for our World Forum on sustainability
                  and climate change.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7748771909687!2d101.71116661475883!3d3.1539877977075494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afde858878953!2sKuala%20Lumpur%20Convention%20Centre!5e0!3m2!1sen!2sus!4v1628713046665!5m2!1sen!2sus"
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
            Nearby Places to Visit in Kuala Lumpur
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
                    <Image
                      src={place.image}
                      alt={place.name}
                      width={400}
                      height={400}
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
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


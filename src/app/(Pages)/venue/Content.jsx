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
import { MapPin, Clock, Utensils, Camera, TreesIcon as Tree, Building, Leaf, ShoppingBag } from 'lucide-react';

export default function VenuePage() {
  const nearbyPlaces = [
    {
      name: "Petronas Twin Towers",
      type: "Landmark",
      icon: Camera,
      description: "The iconic Petronas Twin Towers dominate Kuala Lumpur's skyline, standing at an impressive 451.9 meters (1,483 feet) tall. These gleaming stainless steel-clad towers, designed to resemble motifs found in Islamic art, offer visitors a breathtaking experience. The skybridge on the 41st floor connects the two towers and provides stunning views of the city. The observation deck on the 86th floor offers an even more spectacular panorama. At night, the towers light up, creating a mesmerizing display that symbolizes Malaysia's growth and ambition.",
      image: "https://images.unsplash.com/photo-1520038933211-3663745c0de8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Batu Caves",
      type: "Religious Site",
      icon: Tree,
      description: "Batu Caves is a captivating limestone hill featuring a series of caves and cave temples, located just north of Kuala Lumpur. The site is dominated by a colossal 42.7-meter high statue of Lord Murugan, the Hindu deity of war, standing guard at the entrance. Visitors must climb 272 colorful steps to reach the main cave, known as Cathedral Cave, which houses several Hindu shrines. The caves are not only a religious site but also a haven for rock climbing enthusiasts. During the annual Thaipusam festival, Batu Caves comes alive with thousands of devotees participating in rituals and processions.",
      image: "https://plus.unsplash.com/premium_photo-1678303397238-76250a5ebf73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jalan Alor",
      type: "Food Street",
      icon: Utensils,
      description: "Jalan Alor is a food lover's paradise, offering a vibrant and authentic taste of Malaysian street food culture. As night falls, this bustling street in the heart of Kuala Lumpur transforms into a lively food haven. Dozens of hawker stalls and seafood restaurants line the street, filling the air with tantalizing aromas. Visitors can sample a wide array of local delicacies, from satay and char kway teow to durian fruit and ais kacang. The atmosphere is electric, with plastic chairs and tables spilling onto the street, creating a unique dining experience. Jalan Alor is not just about food; it's a cultural immersion that showcases the diversity of Malaysian cuisine and the warmth of its people.",
      image: "https://images.unsplash.com/photo-1689198920518-39a33be29d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "KL Tower (Menara Kuala Lumpur)",
      type: "Observatory",
      icon: Building,
      description: "Standing tall at 421 meters, the KL Tower is one of the city's most distinctive architectural landmarks. This telecommunications and broadcasting tower offers visitors the highest viewing deck in the city at its Observation Deck. The tower's revolving restaurant, Atmosphere 360, provides a unique dining experience with panoramic views of the city. The surrounding KL Tower Mini Zoo and KL Forest Eco Park add to the attraction, making it a perfect destination for both nature lovers and city enthusiasts.",
      image: "https://images.unsplash.com/photo-1704959273930-b2d65db08ba2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lake Gardens (Perdana Botanical Gardens)",
      type: "Park",
      icon: Leaf,
      description: "The Lake Gardens, also known as Perdana Botanical Gardens, is Kuala Lumpur's oldest public park, spanning over 91 hectares of green space. This verdant oasis features themed gardens, including an Orchid Garden with over 800 species, a Hibiscus Garden showcasing Malaysia's national flower, and a Bird Park housing hundreds of species. The park's centerpiece is a large lake surrounded by walking paths, perfect for morning jogs or afternoon strolls. Various monuments and museums within the park grounds make it a cultural and historical destination as well.",
      image: "https://images.unsplash.com/photo-1685656549939-8567175e0eed?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pavilion KL",
      type: "Shopping Mall",
      icon: ShoppingBag,
      description: "Pavilion KL is a premier shopping destination located in the heart of Bukit Bintang. This award-winning mall houses over 700 retail outlets across 1.37 million square feet of retail space. From luxury boutiques to local brands, the mall caters to all shopping preferences. Its iconic Crystal Fountain at the main entrance has become a popular meeting point. The mall's Gourmet Emporium offers an extensive selection of local and international dining options. Regular events, festivities, and exhibitions make Pavilion KL not just a shopping center but a cultural hub.",
      image: "https://images.unsplash.com/photo-1553331624-011f5178d6eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <motion.span
          className="text-4xl font-bold text-blue-700 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Venue
        </motion.span>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                Kuala Lumpur, Malaysia
                </CardTitle>
                <CardDescription>
                  Your gateway to sustainable discussions in the heart of Malaysia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4 font-semibold text-gray-700">
                  <MapPin className="mr-2 text-blue-500" />
                  <p>Holiday Inn Express, Kuala Lumpur City Centre, an IHG Hotel,Kuala Lumpur, Malaysia</p>
                </div>
                <p className="text-gray-600 mb-4">
                  The Kuala Lumpur city Centre is a world-class facility
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7871516929176!2d101.70610431091363!3d3.1507687531286925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362aba001bed%3A0x1a95bd9e2e38cad4!2sHoliday%20Inn%20Express%20Kuala%20Lumpur%20City%20Centre%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sin!4v1734587277384!5m2!1sen!2sin"
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
                      className="w-full h-52 object-cover rounded-md mb-4 "
                    />
                    <p className="text-gray-600 text-sm">{place.description}</p>
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


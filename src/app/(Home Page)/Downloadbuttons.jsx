"use client"
// 
"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownloadCloudIcon } from "lucide-react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://wfcces.pockethost.io');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function DownloadButtons() {
  const [buttons, setButtons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchButtons = async () => {
      try {
        // Fetch all records from the 'button' collection
        const records = await pb.collection('button').getFullList({
          sort: 'created', // You can adjust the sorting as needed
          requestKey:null
        });
        
        setButtons(records);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching buttons:', err);
        setError('Failed to load download buttons');
        setIsLoading(false);
      }
    };

    fetchButtons();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="py-4 max-w-7xl mx-auto">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-center text-2xl pb-6 inline-flex justify-center items-center gap-3 font-medium text-blue-600">
            Download Conference Materials <DownloadCloudIcon />
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {buttons.map((button) => (
            <motion.a
            href={`https://wfcces.pockethost.io/api/files/${button.collectionId}/${button.id}/${button.file}`}
              key={button.id}
              className="bg-blue-400 hover:bg-blue-500/80 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center drop-shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {button.title} {/* Assuming your PocketBase record has a 'text' field */}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
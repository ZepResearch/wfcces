'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PocketBase from 'pocketbase';
import { pb } from "@/lib/pocketbase";


const DynamicTimeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        
        const records = await pb.collection('WFCCES_dates').getFullList({
          sort: 'created',
          requestKey: null
        });

        // Transform the records to match our timeline format

        setTimelineData(records);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch timeline data');
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl text-center pb-12 font-bold tracking-tighter sm:text-3xl md:text-4xl underline-offset-4 underline decoration-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Dates
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gray-200" />
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-8 flex flex-col md:flex-row"
            >
              <div
                className={`flex items-center mb-2 md:mb-0 w-full ${
                  index % 2 === 1? "md:justify-end" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0">
                  <div className={`w-8 h-8 rounded-full ${index === timelineData.length - 4 ? "bg-gray-400" : "bg-blue-400"} flex items-center justify-center`}>
                  </div>
                </div>
                <div
                  className={`pl-16 md:pl-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 1 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className={index === timelineData.length - 4 ? "opacity-75" : ""}>
                    <CardContent className="p-4">
                      <h3 className={`text-lg font-semibold text-gray-800 ${index === timelineData.length - 4 ? "line-through" : ""}`}>
                        {item.name}
                      </h3>
                      <p className={`text-sm text-gray-600 mt-1 ${index === timelineData.length - 4 ? "line-through" : ""}`}>
                        {item.description}
                      </p>
                      <time className={`text-sm font-medium mt-2 block ${index === timelineData.length - 4 ? "line-through text-gray-500" : "text-primary"}`}>
                        {item.date}
                      </time>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTimeline;
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, Image as ImageIcon, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  const [activeMode, setActiveMode] = useState(null);

  const presentationModes = [
    {
      title: "Oral Presentation",
      description:
        "Present your research through a live speech to the audience. Oral presentations offer a dynamic way to share your findings, engage with your peers, and receive immediate feedback. This format allows for in-depth discussion of your methodology, results, and conclusions, providing a platform to showcase your expertise in tourism management and hospitality.",
      icon: Mic,
      image: "https://illustrations.popsy.co/blue/woman-with-a-laptop.svg",
      content:
        "The presentation times for oral sessions are as follows: contributed presentations are 15 minutes. Please note: You must provide your presentation for preloading. Please submit your presentation (in English, copy-edited and proofread) via email to info[@]ictmh.org, no longer than 10 business days before the events starts. If for any reason, you are unable to submit your presentation in advance of the Conference, then you can preload your presentation to a laptop via registration desk area when you arrive at the Conference, you must preload this at least two hours before you are due to present.",
    },
    {
      title: "Poster Presentation",
      description:
        "Showcase your work visually with an academic poster. Poster presentations offer a unique opportunity to present your research in a concise, visually appealing format. This mode allows for more informal, one-on-one interactions with conference attendees, facilitating in-depth discussions and networking opportunities. It's an excellent way to present preliminary findings or ongoing research in the field of tourism and hospitality management.",
      icon: ImageIcon,
      image: "https://illustrations.popsy.co/blue/web-design.svg",
      content:
        "Each Poster will be displayed at the Conference for 03 Minutes. Posters should be one page PDF or Image to be shown in Webinar. All Posters will be uploaded on the Conference Website before the conference for all the participants to download or go through it",
    },
    {
      title: "Virtual Presentation",
      description:
        "Present remotely through our online conference platform. Virtual presentations offer flexibility and accessibility, allowing you to share your research with a global audience without the need for travel. This mode of presentation leverages technology to facilitate real-time interaction, Q&A sessions, and networking opportunities, ensuring that distance is no barrier to participating in this important tourism and hospitality management conference.",
      icon: Video,
      image: "https://illustrations.popsy.co/blue/customer-support.svg",
      content:
        "Join Live Virtual Sessions. The conference program for Virtual presentations will be emailed to participants one week before the conference. Virtual presentations will be delivered via an online electronic forum (Webinar). Virtual session attendees will receive the Webinar invitation link a few days before the Conference. Joining the webinar session is easy and takes just a few seconds. Simply click the link in the invitation, you will proceed to your session immediately. Just remember to register first if you wish to attend as a Virtual presenter.",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            Mode of Presentation
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            International Conference on Tourism Management and Hospitality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred method of presenting at the International
            Conference on Tourism Management and Hospitality
          </p>
        </motion.div>
        {/* <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-8 text-blue-600 dark:text-blue-300"
        >
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300"
        >
          
        </motion.p> */}
        {presentationModes.map((mode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8  overflow-hidden "
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/3">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
                  <mode.icon className="w-8 h-8 mr-2" />
                  {mode.title}
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  {mode.description}
                </p>
                <Button
                  className="mb-4 bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() =>
                    setActiveMode(activeMode === index ? null : index)
                  }
                >
                  {activeMode === index ? "Hide Details" : "Show Details"}
                </Button>
                {activeMode === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {mode.content}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

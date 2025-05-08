"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Image, FileCode, Upload } from 'lucide-react';
import Link from "next/link";

export default function SubmissionGuidelines() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formatSections = [
    {
      title: "Abstract Format",
      icon: <FileText className="w-8 h-8" />,
      content: [
        "Word Limit: Maximum 300 words",
        "Include: Research objectives, Methodology, Key results, Conclusions",
        "Use clear, concise language, avoiding jargon or acronyms",
      ],
      downloadLink: "/templates/Abstract_Template.docx",
    },
    {
      title: "Full Paper Format",
      icon: <FileCode className="w-8 h-8" />,
      content: [
        "Length: 3000–5000 words (excluding references and appendices)",
        "Font: Times New Roman, 12-point, double-spaced",
        "Sections: Title, Abstract, Keywords, Introduction, Methodology, Results, Discussion, Conclusion, References",
        "Follow APA 7th edition for citations and references",
      ],
      downloadLink: "/templates/Fullpaper_Template.doc",
    },
    {
      title: "Poster Format",
      icon: <Image className="w-8 h-8" />,
      content: [
        "Size: A0 (841 x 1189 mm) in portrait orientation",
        "Font: Use a clear, legible font (at least 24-point for body text, larger for headings)",
        "Sections: Title, Authors and Affiliation, Introduction, Methods, Results, Conclusions, Key References",
        "Use graphics, charts, and images to enhance understanding and presentation",
      ],
      downloadLink: "/templates/poster.jpg",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-900 dark:to-blue-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            WFCCES
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Submission Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please adhere to the following guidelines to ensure your submission meets the conference standards for the World Forum on Climate Change and Environmental Sustainability.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {formatSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-primary text-primary-foreground p-6">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="list-disc list-inside text-lg mb-6 text-muted-foreground">
                    {section.content.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                  <Link href={section.downloadLink} download>
                  <Button
                    className="w-full sm:w-auto border-2 border-primary py-5 font-bold"
                    variant="secondary"
                    >
                    <Download className="mr-2 h-4 w-4 text-primary" />
                    Download {section.title} Template
                  </Button>
                    </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Upload className="w-8 h-8" />
                Submission Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ol className="list-decimal list-inside text-lg mb-6 text-muted-foreground">
                <li className="mb-2">Submit Abstract or Full Paper: Upload your abstract or full paper through the conference submission portal.</li>
                <li className="mb-2">Peer Review: Submissions will undergo a peer review process for evaluation.</li>
                <li className="mb-2">Final Submission: Once accepted, submit the final version of your paper for publication.</li>
              </ol>
              <Link href="/submission" target="_blank">
              <Button
                className="w-full sm:w-auto border-2 border-primary py-5 font-bold"
                variant="secondary"
              >
                <Upload className="mr-2 h-4 w-4 text-primary" />
                Go to Submission Portal
              </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}


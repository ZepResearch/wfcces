"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question:
      "What is the focus of this Climate Change and Sustainability Conference?",
    answer:
      "Our conference brings together experts, policymakers, and innovators to discuss the latest research, strategies, and technologies in climate change mitigation and sustainable development. We cover a wide range of topics including renewable energy, carbon neutrality, climate resilience, and sustainable urban planning.",
  },
  {
    question: "Who should attend this conference?",
    answer:
      "This conference is designed for a diverse audience including climate scientists, environmental policymakers, sustainability professionals, business leaders, academics, students, and anyone passionate about addressing climate change. We welcome participants from various backgrounds to foster interdisciplinary discussions and collaborations.",
  },
  {
    question: "Are there opportunities for networking and collaboration?",
    answer:
      "We offer numerous networking sessions, panel discussions, and interactive workshops. Our conference app facilitates connections between attendees, and we host a dedicated networking event on the second evening of the conference.",
  },
  {
    question: "How can I present my research or project at the conference?",
    answer:
      "We welcome submissions for oral and poster presentations. Please visit our Call for Papers page for detailed information on submission guidelines, deadlines, and the review process. We particularly encourage presentations on innovative solutions and case studies in climate action and sustainability.",
  },
  {
    question:
      "What measures are in place to ensure the conference itself is sustainable?",
    answer:
      "We're committed to practicing what we preach. Our conference uses 100% renewable energy, implements a zero-waste policy, offers plant-based catering options, and encourages virtual attendance to reduce travel emissions. We also offset the carbon footprint of the event through verified carbon credit programs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-whitehi">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight underline underline-offset-4 decoration-blue-500 dark:text-blue-300">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-7  dark:text-blue-200">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our{" "}
              <a
                href="#contact"
                className="font-semibold text-blue-800 hover:text-blue-700 underline"
              >
                conference support team
              </a>
              .
            </p>
            <Image
              src="https://illustrations.popsy.co/white/question-mark.svg"
              alt="Climate Conference Illustration"
              width={300}
              height={300}
              className="mt-8 "
            />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-blue-200 dark:border-blue-700 pb-6"
                >
                  <dt className="text-lg font-semibold leading-7 text-blue-950 dark:text-blue-200">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-start justify-between text-left"
                    >
                      <span>{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openIndex === index ? (
                          <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pr-12 text-base leading-7  dark:text-blue-300"
                    >
                      {faq.answer}
                    </motion.dd>
                  )}
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

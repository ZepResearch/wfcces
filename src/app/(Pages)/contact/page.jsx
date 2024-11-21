"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "react-toastify";
import { useCustomToast } from "@/hooks/useCustomToast";
export default function ContactUs() {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      showSuccessToast("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (error) {
      showErrorToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-900 dark:to-blue-900   text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-primary mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="https://illustrations.popsy.co/blue/telephone-call.svg"
              alt="Contact Us"
              width={400}
              height={300}
              className=""
            />
            <div>
              <h2 className="text-3xl font-semibold  mb-4 underline underline-offset-4 decoration-blue-500">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-4">
                We love to hear from you. Whether you have a question about our
                services, pricing, or anything else, our team is ready to answer
                all your questions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span>123 Conference St, Tourism City, 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white h-fit p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Phone no.
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="91+ 8734628373"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Country
                </label>
                <Input
                  id="country"
                  type="text"
                  placeholder="India"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

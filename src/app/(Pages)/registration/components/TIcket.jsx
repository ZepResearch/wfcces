"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CCavenuePaymentForm } from "@/components/CCavenuePaymentForm";

export default function Ticket() {
  const host = process.env.NEXT_PUBLIC_APP_URL;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      name: "Virtual TICKET",
      price: 219,
      period: "month",
      features: [
        "General Admission to Events",
        "Basic Customer Support",
        "Event Newsletter Subscription",
        "10% Merchandise Discount",
      ],
    },
    {
      name: "Physical TICKET",
      price: 319,
      period: "month",
      features: [
        "Priority Access to All Events",
        "24/7 VIP Customer Support",
        "Exclusive Merchandise Discounts",
        "Backstage Meet & Greet Opportunities",
      ],
    },
  ];

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const openPaymentPopup = (ticket) => {
    setSelectedTicket(ticket);
    setIsPopupOpen(true);
  };

  const closePaymentPopup = () => {
    setIsPopupOpen(false);
    setSelectedTicket(null);
  };

  const handlePaymentSubmit = async (formData) => {
    try {
      setIsLoading(selectedTicket.name);

      const TAX_RATE = 0.06; // 6% tax rate
      const subtotal = selectedTicket.price;
      const taxAmount = subtotal * TAX_RATE;
      const totalAmount = subtotal + taxAmount;

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        name: selectedTicket.name,
        amount: totalAmount.toFixed(2),
        currency: "USD",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        ...formData,
        language: "EN",
      };

      // Send payment data to the server for email notification
      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      // Get the encrypted order from your backend
      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Failed to encrypt order data");
      }

      const { encRequest } = await response.json();

      // Create form and submit
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      // Add hidden fields
      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsLoading(null);
      closePaymentPopup();
    }
  };

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 underline decoration-wavy decoration-blue-500">
          Choose Your Experience
        </h1>

        <div className="space-y-8">
          {tickets.map((ticket, index) => (
            <div key={index} className="flex items-center justify-center">
              <Card className="relative w-full max-w-3xl bg-blue-100 overflow-hidden border-none">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-grow p-6 pr-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-wide underline underline-offset-4 decoration-blue-500">
                          {ticket.name}
                        </h3>
                        <div className="text-xs uppercase tracking-wider opacity-80">
                          Admit one
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {ticket.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 w-full md:w-48 md:border-l border-dashed border-blue-500 flex flex-col justify-center items-center">
                    <div className="hidden md:block absolute top-0 left-0 w-10 h-10 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="hidden md:block absolute bottom-0 left-0 w-10 h-10 bg-background rounded-full -translate-x-1/2 translate-y-1/2" />
                    <div className="text-center space-y-4 p-6">
                      <div className="space-y-1">
                        <div className="text-4xl font-bold">
                          ${`${ticket.price.toLocaleString()} `}
                        </div>
                      </div>
                      <Button
                        className="w-full font-semibold"
                        onClick={() => openPaymentPopup(ticket)}
                        disabled={isLoading === ticket.name}
                      >
                        {isLoading === ticket.name ? "Processing..." : "Book Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {selectedTicket && (
        <CCavenuePaymentForm
          isOpen={isPopupOpen}
          onClose={closePaymentPopup}
          ticketName={selectedTicket.name}
          amount={selectedTicket.price}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  );
}


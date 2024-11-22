"use client";

import { useState } from "react";

const FAQs = [
  {
    question: "Do you accept returns?",
    answer: "No",
  },
  {
    question: "What are your shipping options?",
    answer: "We offer standard, expedited, and next-day shipping.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you’ll receive a tracking link via email.",
  },
  {
    question: "Do you ship internationally?",
    answer: "USA only.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You don't",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg border border-gray-200 p-4">
            <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full text-left">
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

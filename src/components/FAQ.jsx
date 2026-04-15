"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I need prior tech experience to enroll?",
      answer:
        "No prior experience is required! Our programs are designed for beginners and professionals alike. We start from the fundamentals and progressively build your skills. Whether you're completely new to tech or looking to upskill, we have a program that fits your level.",
    },
    {
      question: "How long do the programs take to complete?",
      answer:
        "Program duration varies by course. Most programs range from 3 to 6 months of intensive training. Our short-term certification approach means you can be job-ready faster than traditional education paths. COC preparation courses typically run for 2-3 months.",
    },
    {
      question: "What certifications will I receive?",
      answer:
        "Upon successful completion, you'll receive industry-recognized certifications. This includes our Naphtech College certificate of completion and preparation for national COC (Certificate of Competence) assessments. We also help prepare you for internationally recognized tech certifications where applicable.",
    },
    {
      question: "What career support do you offer?",
      answer:
        "We provide comprehensive career support including resume building, interview preparation, job search guidance, and connections to potential employers. Our goal is not just to teach you skills, but to help you launch and advance your tech career.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We offer flexible payment plans to make your education accessible. Options include full payment upfront with discounts, installment plans spread across your program duration, and scholarship opportunities for qualifying students. Contact us to discuss the best option for your situation.",
    },
    {
      question: "Can I study while working?",
      answer:
        "Yes! We offer flexible scheduling options including morning, afternoon, and weekend classes. Many of our students successfully balance work and studies. Our project-based approach also allows you to practice and learn at your own pace while meeting course deadlines.",
    },
  ];

  return (
    <>
      <section
        className="code-section bg-[#F0F4FF] py-16 lg:py-24"
        data-landingsite-faq=""
        id="sojfjg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[#1E3A8A] text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 leading-tight font-heading">
              Frequently Asked <span className="text-[#1E3A8A]">Questions</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Everything you need to know about our programs and enrollment
              process
            </p>
          </div>

          {/* FAQ Items */}
          <div
            className="space-y-4 scroll-reveal translate-y-12 transition-all duration-700 ease-out "
            id="faq"
          >
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#1F2937] pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#6B7280] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-[#6B7280] mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#3B82F6] font-semibold transition-colors"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import "./Faq.scss";

const faqData = [
  {
    question: "How does the free trial work?",
    answer:
      "You can try SaaZCraft for free and explore all the essential features before deciding on a plan. No commitment is required during the trial.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No, There’s No Setup Fee. You Can Start Using SaaZCraft Right Away.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and other supported online payment methods.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or change your plan whenever your business needs change.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* Heading */}
        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        {/* FAQ Box */}
        <div className="faq-box">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <div
                  className="faq-answer-wrapper"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
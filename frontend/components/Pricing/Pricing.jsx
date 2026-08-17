"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./Pricing.scss";

const plans = [
  {
    name: "Basic",
    monthly: "$10",
    yearly: "$100",
    description: "Perfect For Startups And Small Teams.",
    features: [
      "Basic Features",
      "Unlimited Users",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    monthly: "$25",
    yearly: "$250",
    description: "Our Most Popular Plan For Growing Teams.",
    features: [
      "Advanced Features",
      "Unlimited Users",
      "Priority Support",
    ],
  },
  {
    name: "Team",
    monthly: "Custom",
    yearly: "Custom",
    description: "Tailored Solutions For Large Organizations.",
    features: [
      "Training Sessions",
      "Custom Integrations",
      "Dedicated Support",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const toggleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">

        {/* ==================================================
            TITLE
        ================================================== */}

        <motion.h2
          className="pricing-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          Transparent Pricing
        </motion.h2>

        {/* ==================================================
            BILLING TOGGLE
        ================================================== */}

        <motion.div
          className="pricing-toggle"
          variants={toggleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <button
            type="button"
            className={`pricing-toggle__option ${
              billing === "monthly" ? "active" : ""
            }`}
            onClick={() => setBilling("monthly")}
          >
            {billing === "monthly" && (
              <motion.div
                layoutId="pricing-toggle"
                className="pricing-toggle__indicator"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="pricing-toggle__text">Monthly</span>
          </button>

          <button
            type="button"
            className={`pricing-toggle__option ${
              billing === "yearly" ? "active" : ""
            }`}
            onClick={() => setBilling("yearly")}
          >
            {billing === "yearly" && (
              <motion.div
                layoutId="pricing-toggle"
                className="pricing-toggle__indicator"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="pricing-toggle__text">Yearly</span>
          </button>
        </motion.div>

        {/* ==================================================
            PRICING CARDS
        ================================================== */}

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {plans.map((plan, index) => {
            const price =
              billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <motion.article
                className={`pricing-card ${
                  index === 1 ? "pricing-card--featured" : ""
                }`}
                variants={cardVariants}
                key={plan.name}
              >
                {/* PRICE HEADER */}

                <div className="pricing-card__top">
                  <p className="pricing-card__name">
                    {plan.name}
                  </p>

                  <div className="pricing-card__price">
                    {price !== "Custom" ? (
                      <>
                        <span className="pricing-card__amount">
                          {price}
                        </span>

                        <span className="pricing-card__period">
                          /{billing === "monthly" ? "Month" : "Year"}
                        </span>
                      </>
                    ) : (
                      <span className="pricing-card__custom">
                        Custom
                      </span>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p className="pricing-card__description">
                  {plan.description}
                </p>

                {/* FEATURES */}

                <ul className="pricing-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-card__bullet">
                        •
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}

                <button
                  type="button"
                  className="pricing-card__button"
                >
                  <span>Get Template</span>

                  <span className="pricing-card__arrow">
                    →
                  </span>
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
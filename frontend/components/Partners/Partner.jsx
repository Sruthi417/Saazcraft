"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./Partner.scss";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function Partner() {
  return (
    <section className="partner-section">
      <div className="partner-container">

        {/* =========================================
            IMAGE
        ========================================== */}

        <motion.div
          className="partner-image"
          initial={{
            opacity: 0,
            x: -50,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <Image
            src="/partner.avif"
            alt="Partner with SaaZCraft"
            width={700}
            height={700}
            priority={false}
          />
        </motion.div>

        {/* =========================================
            CONTENT
        ========================================== */}

        <motion.div
          className="partner-content"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={listVariants}
        >

          <motion.h2
            className="partner-title"
            variants={itemVariants}
          >
            Partner With SaaZCraft
          </motion.h2>

          <motion.p
            className="partner-description"
            variants={itemVariants}
          >
            Are You An Agency, Consultant, Or Enterprise? Partner With Us
            To Deliver Exceptional SaaS Experiences To Your Clients.
          </motion.p>

          <motion.ul
            className="partner-list"
            variants={listVariants}
          >
            <motion.li variants={itemVariants}>
              Dedicated Partner Support
            </motion.li>

            <motion.li variants={itemVariants}>
              Exclusive Discounts And Commissions
            </motion.li>

            <motion.li variants={itemVariants}>
              Access To Co-Marketing Opportunities.
            </motion.li>
          </motion.ul>

          <motion.div variants={itemVariants}>
            <button className="partner-button">
              <span>Get Template</span>
              
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
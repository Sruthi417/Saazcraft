"use client";

import { motion } from "framer-motion";
import {
  DocumentDownload,
  Setting2,
  ShieldTick,
  TickCircle,
} from "iconsax-react";
import Image from "next/image";
import "./Feature.scss";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const features = {
  items: [
    {
      title: "Task Management",
      description:
        "Organize tasks, set deadlines, and monitor progress all in one place with SaaZCraft’s intuitive task management features.",
      list: [
        "Enhanced Productivity",
        "Clear Deadlines",
        "Priority Setting",
        "Progress Tracking",
      ],
      image:"/card1.png",
      icon: DocumentDownload,
    },
    {
      title: "Collaboration Tools",
      description:
        "Enhance team collaboration with shared calendars, messaging, and project spaces, all optimized within SaaZCraft.",
      list: [
        "Improved Communication",
        "Shared Calendars",
        "File Sharing",
        "Collaborative Spaces",
      ],
      image: "/card2.png",
      icon: Setting2,
    },
    {
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with real-time analytics and reporting features built into SaaSCraft.",
      list: [
        "Actionable Insights",
        "Real-Time Reporting",
        "Customizable Dashboards",
        "Predictive Analysis",
      ],
      image: "/card3.png",
      icon: ShieldTick,
    },
  ],
};

export function Features() {
  return (
    <section className="pp-sec">
      <div className="pp-wrap">
       

        <div className="feature-cards-container">
          {features.items.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                className={`feature-card ${idx % 2 !== 0 ? "reverse" : ""}`}
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={item}
              >
                <div className="feature-content">
                  <div className="feature-icon-wrapper">
                    <IconComponent size="40" color="#000" variant="Bold" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>

                  <p className="feature-desc">{feature.description}</p>
                  <ul className="feature-list">
                    {feature.list.map((listItem, i) => (
                      <li key={i}>
                        <TickCircle size="20" color="#000" /> {listItem}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="feature-illustration-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-img"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

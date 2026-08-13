"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Tools.scss";

const logosLeft = [
  {
    name: "zapier",
    src: "/tool1.png",
  },
  {
    name: "stripe",
    src: "/tool2.png",
  },
  {
    name: "hubspot",
    src: "/tool3.png",
  },
  {
    name: "slack",
    src: "/tool4.png",
  },
];

const logosRight = [
  {
    name: "slack",
   src: "/tool4.png",
  },
  {
    name: "hubspot",
     src: "/tool3.png",
  },
  {
    name: "stripe",
    src: "/tool2.png",
  },
  {
    name: "zapier",
    src: "/tool1.png",
  },
];

const Tools = () => {
  // Duplicate the logos so the vertical animation
  // can loop seamlessly.
  const leftLogos = [...logosLeft, ...logosLeft];

  const rightLogos = [...logosRight, ...logosRight];

  return (
    <section className="integrations-section">
      <motion.div
        className="integrations-card"
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =====================================================
            TEXT
        ====================================================== */}

        <div className="integrations-content">
          <h2 className="integrations-title">
            Works Seamlessly With
            <br />
            Your Favorite Tools
          </h2>

          <p className="integrations-description">
            SaaZCraft Integrates With The Platforms You Already Use,
            Making It Easy To Bring Everything Together In One Place.
          </p>
        </div>

        {/* =====================================================
            LOGO AREA
        ====================================================== */}

        <div className="integrations-logos">
          {/* LEFT COLUMN — MOVES UP */}
          <div className="integrations-column integrations-column--up">
            <div className="integrations-track">
              {leftLogos.map((logo, index) => (
                <div
                  className="integration-logo"
                  key={`left-${logo.name}-${index}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={72}
                    height={72}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — MOVES DOWN */}
          <div className="integrations-column integrations-column--down">
            <div className="integrations-track">
              {rightLogos.map((logo, index) => (
                <div
                  className="integration-logo"
                  key={`right-${logo.name}-${index}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={72}
                    height={72}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tools;
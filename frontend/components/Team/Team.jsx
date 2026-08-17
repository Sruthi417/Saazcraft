"use client";

import "./Team.scss";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Co-Founder",
    image: "/team1.avif",
    linkedin: "http://linkedin.in",
  },
  {
    name: "Jane Smith",
    role: "CTO & Co-Founder",
    image: "/team2.avif",
    linkedin: "http://linkedin.in",
  },
  {
    name: "Michael Brown",
    role: "Head of Marketing",
    image: "/team3.avif",
    linkedin: "http://linkedin.in",
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    image: "/team4.avif",
    linkedin: "http://linkedin.in",
  },
  {
    name: "Daniel Lee",
    role: "Tech lead",
    image: "/team5.avif",
    linkedin: "http://linkedin.in",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      {/* Decorative background circles */}
      <div className="team-bg-circle team-bg-circle--left" />
      <div className="team-bg-circle team-bg-circle--right" />

      <div className="team-container">

        {/* Heading */}
        <div className="team-heading">
          <motion.h2
            className="team-title"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Team
          </motion.h2>

          <motion.p
            className="team-description"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Meet the passionate people behind SaaZCraft. Our experienced team is
            dedicated to empowering your SaaS startup&apos;s success.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.article
              className={`team-card team-card--${index + 1}`}
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: "easeOut" }}
            >
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

                <div className="team-info">
                  <div className="team-details">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <img
                      src="/linkedin.svg"
                      alt=""
                      className="team-linkedin-icon"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

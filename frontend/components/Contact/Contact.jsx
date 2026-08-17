"use client";

import "./Contact.scss";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT CONTENT */}
        <div id="contact" className="contact-content">
          <motion.h2
            className="contact-title"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Works Seamlessly With Your
            
            Favorite Tools
          </motion.h2>

          <motion.p
            className="contact-description"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            SaaZCraft Integrates With The Platforms You Already Use,
            Making It Easy To Bring Everything Together In One Place.
          </motion.p>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          className="contact-form-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.16, duration: 0.8, ease: "easeOut" }}
        >
          <form className="contact-form">

            <div className="form-field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="jane@framer.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Write your message"
              />
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

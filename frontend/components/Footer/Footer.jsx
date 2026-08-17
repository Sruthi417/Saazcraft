"use client";

import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-card"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* TOP LOGO */}
        <div className="footer-logo">
          <img src ="/logo.svg"/>
        </div>

        {/* LEFT NAVIGATION */}
        <nav className="footer-nav">
          <a href="#demo">Demo</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* CENTER CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a href="mailto:support@saazcraft.com">
            support@saazcraft.com.
          </a>

          <a href="tel:+12345678910">
            +123 456 67 89 10
          </a>
        </div>

        {/* DECORATIVE CIRCLES */}
        <div className="footer-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="footer-socials">
          <a href="#">X</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>

      </motion.div>

      {/* LARGE TYPOGRAPHY */}
      <motion.div
        className="footer-wordmark"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
      >
        SaaZCraft
      </motion.div>
      <motion.div
        className="footer-copyright"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.16, duration: 0.8, ease: "easeOut" }}
      >
        <p>© 2025 SaaSCraft. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

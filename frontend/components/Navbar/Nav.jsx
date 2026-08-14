"use client";

import { useState } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./Nav.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Only the glass edge + shadow are toggled; the frosting itself is
  // always on, so the bar stays white over white without any logic.
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
  });

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}${isOpen ? " navbar--open" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <Image
            src="/logo.svg"
            alt="SaaZCraft"
            width={215}
            height={70}
            priority
          />
        </a>

        {/* Hamburger Toggle */}
        <button 
          className="navbar__toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <div className={`navbar__menu${isOpen ? " navbar__menu--open" : ""}`}>
          <nav className="navbar__nav">
            <a href="#about" onClick={() => setIsOpen(false)}>About us</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#template"
            className="navbar__cta"
            onClick={() => setIsOpen(false)}
          >
            Get Template
          </a>
        </div>
      </div>
    </header>
  );
}
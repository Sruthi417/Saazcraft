"use client";

import { useState } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./Nav.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Only the glass edge + shadow are toggled; the frosting itself is
  // always on, so the bar stays white over white without any logic.
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
  });

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
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

        {/* Navigation */}
        <nav className="navbar__nav">
          <a href="#about">About us</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#template"
          className="navbar__cta"
        >
          Get Template
        </a>
      </div>
    </header>
  );
}
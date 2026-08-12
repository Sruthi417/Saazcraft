"use client";
import React, { useRef } from 'react';
import './Hero.scss';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);

  // 0 = page top (dashboard cut off by the fold), 1 = hero bottom reaches the
  // viewport bottom (dashboard fully revealed). Independent of what follows.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Smooth the raw scroll value so the straightening feels physical
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001
  });

  // Fully slanted -> straight. rotateX only: a symmetric lean-back around the
  // horizontal axis, so it never tips toward one side. No rotateZ.
  const rotateX = useTransform(progress, [0, 0.85], [38, 0]);
  const scale = useTransform(progress, [0, 0.85], [0.94, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__background">
        <Image
          src="/hero-main.avif"
          alt=""
          fill
          sizes="100vw"
          
          priority
        />
      </div>

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero__title" variants={itemVariants}>
          Transform Your Business
          <br />
          With <span className="hero__highlight">SaaZCraft</span>
        </motion.h1>
        <motion.p className="hero__subtitle" variants={itemVariants}>
          The all-in-one platform for seamless SaaS solutions, built
          <br />
          to help you achieve more.
        </motion.p>
        <motion.div className="hero__actions" variants={itemVariants}>
          <button className="btn btn--primary">Get Started</button>
          <button className="btn btn--secondary">
            Watch Demo
            <span className="play-icon-wrapper">
              <svg
                className="play-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Perspective lives on the wrapper so the child can be rotated freely */}
      <div className="hero__dashboard-wrap">
        <motion.div
          className="hero__dashboard-enter"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="hero__dashboard"
            style={{ rotateX, scale, transformPerspective: 1400 }}
          >
            <Image
              src="/hero-sub.avif"
              alt="SaaZCraft dashboard"
              width={1600}
              height={1000}
              sizes="(max-width: 1100px) 100vw, 1060px"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

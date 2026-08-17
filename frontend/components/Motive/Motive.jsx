"use client";

import { useRef ,useState} from "react";
import "./Motive.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";


const logos = [
  "/logo1.svg",
  "/logo2.svg",
//   "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
];

const Motive = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

const toggleVideo = () => {
  if (!videoRef.current) return;

  if (videoRef.current.paused) {
    videoRef.current.play();
    setIsPlaying(true);
  } else {
    videoRef.current.pause();
    setIsPlaying(false);
  }
};


  /*
   * Track the section entering/leaving the viewport.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Smooth the scroll values so the video movement
   * feels physical rather than directly tied to the wheel.
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  /*
   * Video starts lower and rises into position.
   */
  const videoY = useTransform(progress, [0, 0.38, 0.7], [180, 50, 0]);

  /*
   * Starts slightly tilted and becomes flat.
   */
  const videoRotateX = useTransform(progress, [0, 0.45, 0.75], [18, 6, 0]);

  /*
   * Slight scale effect as the video comes into place.
   */
  const videoScale = useTransform(progress, [0, 0.45, 0.75], [0.92, 0.97, 1]);

  /*
   * Small opacity reveal.
   */
  const videoOpacity = useTransform(progress, [0, 0.2, 0.5], [0.2, 0.7, 1]);



  return (
    <section id="about-us" ref={sectionRef} className="why-section">
      {/* =====================================================
          LOGO MARQUEE
      ====================================================== */}

      <div className="why-section__logos">
        <div className="why-section__logo-mask">
          <div className="why-section__logo-track">
            {/* First set */}
            <div className="why-section__logo-group">
              {logos.map((logo, index) => (
                <div className="why-section__logo" key={`logo-one-${index}`}>
                  <Image src={logo} alt="" width={150} height={40} />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="why-section__logo-group" aria-hidden="true">
              {logos.map((logo, index) => (
                <div className="why-section__logo" key={`logo-two-${index}`}>
                  <Image src={logo} alt="" width={150} height={40} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="why-section__content">
        <motion.h2
          className="why-section__title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why SaaZCraft?
        </motion.h2>

        <motion.p
          className="why-section__subtitle"
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          SaaSCraft was founded with a vision to simplify SaaS development for
          <br className="why-section__desktop-break" />
          growing businesses by providing an intuitive and powerful toolset.
        </motion.p>
      </div>

      {/* =====================================================
          VIDEO
      ====================================================== */}

      <div className="why-section__media">
        {/* Green / yellow glow */}

        <div className="why-section__glow" aria-hidden="true" />

        <motion.div
          className="why-section__video-wrap"
          style={{
            y: videoY,
            rotateX: videoRotateX,
            scale: videoScale,
            opacity: videoOpacity,
            transformPerspective: 1400,
          }}
        >
          <video
          id="demo"
            ref={videoRef}
            className="why-section__video"
            src="/video.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            controls
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Motive;

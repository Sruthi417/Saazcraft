"use client";



import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Review.scss";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const reviewsData = {
  items: [
    {
      quote:
        "I was skeptical at first, but SaaZCraft has exceeded my expectations. The analytics alone have been invaluable for making data-driven decisions, and the automation tools save us hours every week. We can't imagine working without it!",
      name: "Tom D",
      location: "Operations Lead",
      avatar: "/avatar1.jpg",
    },
    {
      quote:
        "SaaZCraft has been a game-changer for our team. We needed a simple, all-in-one solution to streamline our project management and collaboration, and SaaSCraft delivered. Our productivity has doubled, and it's now our go-to platform for everything!",
      name: "Sarah L",
      location: "Product Manager",
      avatar: "/avatar2.jpg",
    },
    {
      quote:
        "After trying several SaaS tools, SaaZCraft stood out for its clean design and intuitive features. It helped us keep projects on track and communicate more effectively as a team. The impact on our workflow has been tremendous.",
      name: "Lisa M",
      location: "CEO",
      avatar: "/avatar3.jpg",
    },
    {
      quote:
        "We needed a solution that could grow with us, and SaaZCraft delivered. The platform's scalability and customization options make it perfect for our expanding team. The transition was smooth, and the benefits have been immediate.",
      name: "Mark B",
      location: "Product Development",
      avatar: "/avatar4.jpg",
    },
    {
      quote:
        "SaaZCraft made it easy for us to scale without the hassle. The setup was seamless, and the support team was there every step of the way. We've seen a 40% increase in efficiency across our projects since we switched.",
      name: "James P",
      location: "Head Of Engineering",
      avatar: "/avatar5.jpg",
    },
    {
      quote:
        "SaaZCraft has transformed the way we work. From task management to team collaboration, everything feels connected and easy to use. It's the only tool we've found that truly meets the needs of a growing SaaS company.",
      name: "Emily T",
      location: "COO",
      avatar: "/avatar6.jpg",
    },
  ],
};

/** Left-to-right reading order: column c holds items c, c+3, c+6. */
const COLUMNS = 3;

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8L12 2.5z" />
    </svg>
  );
}

function ReviewCard({ review, delay }){
  return (
    <motion.div 
      className="rv-card" 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        delay: delay / 1000,
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="rv-card-head">
        <span className="rv-avatar" aria-hidden>
          {review.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={review.avatar} alt="" width={38} height={38} />
          ) : (
            initials(review.name)
          )}
        </span>

        <span className="rv-id">
          <span className="rv-name">{review.name}</span>
          <span className="rv-loc">{review.location}</span>
        </span>
      </div>

      <blockquote className="rv-quote">{review.quote}</blockquote>
    </motion.div>
  );
}

export function Reviews() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Drift is desktop-only. Must match the 992px breakpoint in
  // review.scss, where the columns dissolve into a 2-up grid and an
  // offset centre column would just read as uneven spacing.
  const [drift, setDrift] = useState(0);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const sync = () => setDrift(mq.matches ? 28 : 0);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Outer columns scroll slightly opposite to the middle column.
  const travelMid = reduceMotion ? 0 : drift * -2.5;
  const travelSide = reduceMotion ? 0 : drift * 1.8;
  
  const yMidRaw = useTransform(scrollYProgress, [0, 1], [-travelMid, travelMid]);
  const yMid = useSpring(yMidRaw, { stiffness: 90, damping: 24, mass: 0.4 });

  const ySideRaw = useTransform(scrollYProgress, [0, 1], [-travelSide, travelSide]);
  const ySide = useSpring(ySideRaw, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div className="pp" ref={sectionRef}>
      <div className="pp-wrap">
        <div className="pp-heading">
          <motion.h2 
            className="pp-title"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Trusted By Teams <br />
            <span style={{ color: "#a3aa93" }}>Worldwide</span>
          </motion.h2>
        </div>

        <div className="rv-grid">
          {Array.from({ length: COLUMNS }).map((_, col) => {
            const cards = reviewsData.items
              .filter((_, i) => i % COLUMNS === col)
              .map((review, row) => (
                <ReviewCard
                  key={review.name}
                  review={review}
                  delay={row * 110 + col * 60}
                />
              ));

            // Middle column vs side columns
            if (col === 1) {
              return (
                <motion.div
                  key={col}
                  className="rv-col rv-col--mid"
                  style={{ y: yMid }}
                >
                  {cards}
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={col} 
                className="rv-col rv-col--side"
                style={{ y: ySide }}
              >
                {cards}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

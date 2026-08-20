import React, { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

// =========================
// PROJECT IMAGES
// =========================

import project1 from "../assets/Projects/2.jpeg";
import project2 from "../assets/Projects/4.jpeg";
import project3 from "../assets/Projects/9.jpeg";
import project4 from "../assets/Projects/7.jpeg";

import project5 from "../assets/Projects/1.jpeg";
import project6 from "../assets/Projects/3.jpeg";
import project7 from "../assets/Projects/5.jpeg";
import project8 from "../assets/Projects/6.jpeg";
import project9 from "../assets/Projects/8.jpeg";
import project10 from "../assets/Projects/10.jpeg";

import project11 from "../assets/Projects/11.jpeg";
import project12 from "../assets/Projects/12.jpeg";
import project13 from "../assets/Projects/13.jpeg";
import project14 from "../assets/Projects/14.jpeg";
import project15 from "../assets/Projects/15.jpeg";

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
];

export default function OurWork() {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore
    ? projects
    : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#F0EBE0] font-body text-[#1A1A1A]"
    >
      {/* Top divider */}
      <motion.span
        aria-hidden
        className="absolute left-[5%] right-[5%] top-0 h-px bg-[#6B665E]/25 lg:left-[6%] lg:right-[6%]"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: easeOut,
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-[6%]">

        {/* =========================
            SECTION INTRO
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.8,
            ease: easeOut,
          }}
        >
          <span className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]">
            Our Work
          </span>

          <h2 className="mt-5 font-display text-[clamp(2.35rem,4.6vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em]">
            Your Vision. Our Design.
            <span className="block italic text-[#3a3a36]">
              Beautifully Executed.
            </span>
          </h2>

          <p className="mt-7 max-w-[700px] border-l border-[#6B665E]/25 pl-5 text-[0.94rem] font-light leading-[1.75] text-[#3a3a36] sm:text-[1rem]">
            A selection of completed residential and commercial projects
            each delivered by one team, from first sketch to final handover.
          </p>
        </motion.div>

        {/* =========================
            PROJECT IMAGE GRID
        ========================== */}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-16 lg:gap-6">
          {visibleProjects.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#DDD7CA]"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 0.7,
                ease: easeOut,
                delay: Math.min(index * 0.06, 0.3),
              }}
            >
              <img
                src={image}
                alt={`Starinteriors project ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Very subtle hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />
            </motion.div>
          ))}
        </div>

        {/* =========================
            MORE PROJECTS BUTTON
        ========================== */}

        {projects.length > 4 && (
          <motion.div
            className="mt-10 flex justify-center md:mt-14"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease: easeOut,
            }}
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="group border border-[#2D2D2A] px-8 py-4 text-[9px] font-medium uppercase tracking-[0.28em] text-[#2D2D2A] transition-all duration-300 hover:bg-[#2D2D2A] hover:text-[#F7F4ED] sm:px-10"
            >
              {showMore ? "SHOW LESS" : "MORE PROJECTS"}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
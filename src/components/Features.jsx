import React from "react";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import {
  Sofa,
  Paintbrush,
  Wrench,
  PencilRuler,
  LayoutGrid,
  Zap,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1];

const features = [
  {
    icon: PencilRuler,
    title: "Space Planning, Designing & Consultaion",
    body: "Thoughtful space planning and personalized design consultations that turn your ideas into functional, beautiful spaces tailored to your lifestyle and needs.",
  },
  {
    icon: Sofa,
    title: "Furniture & Modular Kitchen",
    body: "Custom furniture and modular kitchens crafted with practical layouts, quality materials, and refined finishes to bring comfort and character to your space.",
  },
  {
    icon: Wrench,
    title: "Civil Work",
    body: "From structural changes to detailed finishing, we manage civil work with precision to create a strong, seamless foundation for your interiors.",
  },
  {
    icon: Paintbrush,
    title: "Painting & False Ceiling",
    body: "Elevate every room with carefully selected finishes, colors, and ceiling designs that add depth, character, and a polished final touch.",
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    body: "Reliable electrical and plumbing solutions planned and executed with care, ensuring every essential system works efficiently and integrates seamlessly.",
  },
  {
    icon: LayoutGrid,
    title: "Fabrication",
    body: "Precision fabrication tailored to your space, from custom metalwork to functional structural elements, built for durability and a clean finish.",
  },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  const [cardRef, cardVisible] = useReveal();

  return (
    <article
      ref={cardRef}
      className={`group relative flex h-full min-h-[300px] flex-col rounded-[2px] border border-[#6B665E]/20 bg-[#FBFAF6] p-6 transition-all duration-500 hover:border-[#2D2D2A]/40 hover:shadow-[0_24px_50px_-30px_rgba(26,26,26,0.35)] sm:p-8 reveal reveal-delay-${Math.min(
        index + 1,
        4
      )} ${cardVisible ? "is-visible" : ""}`}
    >
      {/* Number */}
      <span className="mb-5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#6B665E] sm:text-[10px]">
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-[2px] border border-[#6B665E]/25 bg-white/50 transition-colors duration-500 group-hover:border-[#2D2D2A] group-hover:bg-[#2D2D2A] sm:h-14 sm:w-14">
        <Icon
          className="h-5 w-5 text-[#2D2D2A] transition-colors duration-500 group-hover:text-[#F7F7F2] sm:h-6 sm:w-6"
          strokeWidth={1.25}
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-[1.45rem] font-medium leading-[1.12] text-[#1A1A1A] sm:text-[1.6rem]">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[0.88rem] font-light leading-[1.72] text-[#3a3a36] sm:text-[0.94rem]">
        {feature.body}
      </p>

      {/* Hover Line */}
      <span className="mt-8 block h-px w-0 bg-[#2D2D2A] transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default function Features() {
  return (
    <section
      id="services"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#F0EBE0] font-body text-[#1A1A1A]"
    >
      {/* Top Divider */}
      <motion.span
        aria-hidden
        className="absolute left-[5%] right-[5%] top-0 h-px bg-[#6B665E]/25 lg:left-[6%] lg:right-[6%]"
        initial={{
          scaleX: 0,
          transformOrigin: "left",
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          ease: easeOut,
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-[6%]">

        {/* =========================
            SECTION INTRO
        ========================== */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">

          {/* Heading */}
          <motion.div
            className="md:col-span-7"
            initial={{
              opacity: 0,
              y: 24,
            }}
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
            {/* Section Label */}
            <span className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]">
              What We Do
            </span>

            {/* Tagline */}
            <h2 className="mt-5 font-display text-[clamp(2.35rem,4.6vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em]">
              Turning Empty Spaces
              <span className="block italic text-[#3a3a36]">
                Into Meaningful Experiences.
              </span>
            </h2>
          </motion.div>

          {/* Brief */}
          <motion.p
            className="self-end border-l border-[#6B665E]/25 pl-5 text-[0.94rem] font-light leading-[1.75] text-[#3a3a36] md:col-span-5 md:pl-8 md:text-[1rem]"
            initial={{
              opacity: 0,
              y: 24,
            }}
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
              delay: 0.12,
            }}
          >
            From the first concept to final execution,
            <br className="hidden md:block" />
            we create spaces that are beautiful, functional, and personal.
          </motion.p>
        </div>

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

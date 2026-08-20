import React from "react";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import { Quote } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1];

const testimonials = [
  {
  quote:
    "They understood exactly how we wanted our 3BHK to feel and turned every room into a comfortable, beautiful space. The entire process was smooth from start to finish.",
  name: "Sejal Bagwe",
  title: "Residential 3BHK",
  company: "Thane (Mumbai)",
},

{
  quote:
    "From planning the layout to the final finishing touches, the team handled our bungalow project with great attention to detail. The result feels exactly like the home we imagined.",
  name: "Deepak Rane",
  title: "Bungalow Project",
  company: "Badlapur (Maharashtra)",
},

{
  quote:
    "The team brought together the interiors and overall look of our resort beautifully. From the design details to the final execution, everything came together seamlessly.",
  name: "Rohit Patil",
  title: "Resort Project",
  company: "Goa",
},
];

const TestimonialCard = ({ item, index }) => {
  const [cardRef, cardVisible] = useReveal();

  return (
    <figure
      ref={cardRef}
      className={`relative flex h-full flex-col border border-[#6B665E]/20 bg-[#FBFAF6] p-6 transition-all duration-500 hover:shadow-[0_24px_50px_-30px_rgba(26,26,26,0.3)] sm:p-8 reveal reveal-delay-${Math.min(
        index + 1,
        4
      )} ${cardVisible ? "is-visible" : ""}`}
    >
      <span className="mb-5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#6B665E] sm:text-[10px]">
        0{index + 1}
      </span>

      <Quote
        className="mb-5 h-6 w-6 text-[#6B665E]/40"
        strokeWidth={1}
      />

      <blockquote className="flex-1 font-display text-[1.28rem] font-normal italic leading-[1.45] text-[#1A1A1A] sm:text-[1.35rem]">
        "{item.quote}"
      </blockquote>

      <figcaption className="mt-8">
        <span className="block h-px w-8 bg-[#6B665E]/40" />

        <div className="mt-4">
          <span className="block text-[0.9rem] text-[#1A1A1A]">
            {item.name}
          </span>

          <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.18em] text-[#6B665E] sm:text-[9px]">
            {item.title} · {item.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F4ED] font-body text-[#1A1A1A]">
      <motion.span
        aria-hidden
        className="absolute left-[5%] right-[5%] top-0 h-px bg-[#6B665E]/25 lg:left-[6%] lg:right-[6%]"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-[6%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <span className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]">
              Client Voices
            </span>

            <h2 className="mt-5 font-display text-[clamp(2.35rem,4.6vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em]">
              What Our Clients
              <span className="block text-[#3a3a36]">
                Have To Say.
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="self-end border-l border-[#6B665E]/25 pl-5 text-[0.94rem] font-light leading-[1.75] text-[#3a3a36] md:col-span-5 md:pl-8 md:text-[1rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.12,
            }}
          >
            Real experiences from people who trusted us to turn their ideas into spaces they love.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
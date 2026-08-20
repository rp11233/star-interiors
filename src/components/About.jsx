import useReveal from "../hooks/useReveal";
import React from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

const principles = [
  { n: "01", t: "Consult", d: "We listen first your routine, your taste, your budget before a single line is drawn." },
  { n: "02", t: "Design", d: "Space plans, material palettes, and 3D previews so you see the result before we build." },
  { n: "03", t: "Build", d: "In-house crews across every trade, coordinated on one timeline under one accountable team." },
  { n: "04", t: "Deliver", d: "Handover on the date we promised, with a walk-through and a snag-free finish." },
];

export default function About() {
  const [titleRef, titleVisible] = useReveal();
  const [cardRef, cardVisible] = useReveal();

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#F7F4ED] font-body text-[#1A1A1A]"
    >
      <motion.span
        aria-hidden
        className="absolute left-[5%] right-[5%] top-0 h-px bg-[#6B665E]/25 lg:left-[6%] lg:right-[6%]"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-[6%]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div
  ref={cardRef}
  className={`md:col-span-6 reveal reveal-delay-2 ${
    cardVisible ? "is-visible" : ""
  }`}

            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <span className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]">
              Who We Are
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.35rem,4.6vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em]">
              Quality work with
              <span className="block italic text-[#3a3a36]">Reasonable prices.</span>
            </h2>

            <p className="mt-7 max-w-[560px] border-l border-[#6B665E]/25 pl-5 text-[0.94rem] font-light leading-[1.75] text-[#3a3a36] sm:pl-7 sm:text-[1rem]">
              Star interiors brings interiors, exterior and execution under
              one roof so a single, accountable team carries your project from
              first sketch to final handover.
            </p>

            <div className="mt-9 grid max-w-[560px] grid-cols-3 gap-2 sm:gap-4">
              {[
                { n: "24+", l: "Years" },
                { n: "160+", l: "Projects" },
                { n: "40+", l: "Crew members" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="border border-[#6B665E]/20 bg-[#FBFAF6] px-3 py-5 text-center sm:px-5 sm:py-6"
                >
                  <span className="block font-display text-[1.7rem] font-medium leading-none text-[#1A1A1A] sm:text-[2rem]">
                    {stat.n}
                  </span>
                  <span className="mt-2.5 block text-[8px] font-medium uppercase tracking-[0.22em] text-[#6B665E] sm:text-[9px]">
                    {stat.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
  ref={titleRef}
  className={`md:col-span-6 reveal ${
    titleVisible ? "is-visible" : ""
  }`}
>
            <div className="border border-[#6B665E]/20 bg-[#FBFAF6] p-6 sm:p-8 md:p-9">
              <span className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]">
                Our Approach
              </span>

              <div className="mt-5 divide-y divide-[#6B665E]/15">
                {principles.map((principle) => (
                  <div key={principle.n} className="flex gap-4 py-5 first:pt-0 last:pb-0 sm:gap-6 sm:py-6">
                    <span className="w-7 shrink-0 font-display text-[1.25rem] font-medium leading-none text-[#6B665E] sm:text-[1.4rem]">
                      {principle.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.3rem] font-medium leading-tight text-[#1A1A1A] sm:text-[1.4rem]">
                        {principle.t}
                      </h3>
                      <p className="mt-1.5 text-[0.86rem] font-light leading-[1.68] text-[#3a3a36] sm:text-[0.92rem]">
                        {principle.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

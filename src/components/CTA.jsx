import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1];

export default function CTA() {
  return (
    <section
      id="start"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#F0EBE0] font-body text-[#1A1A1A]"
    >
      {/* Section divider */}
      <motion.span
        aria-hidden
        className="absolute left-[5%] right-[5%] top-0 h-px bg-[#6B665E]/25 lg:left-[6%] lg:right-[6%]"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-[6%]">
        <motion.div
          className="mx-auto max-w-[980px] border border-[#6B665E]/20 bg-[#FBFAF6] px-6 py-10 text-center shadow-[0_30px_60px_-40px_rgba(26,26,26,0.3)] sm:px-10 sm:py-12 md:px-16 md:py-14"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: easeOut,
          }}
        >
          {/* Eyebrow */}
          <motion.span
            className="block text-[9px] font-medium uppercase tracking-[0.35em] text-[#6B665E] sm:text-[10px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: 0.15,
            }}
          >
            Begin the Transformation
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="mt-5 font-display text-[clamp(2.45rem,5.5vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.22,
            }}
          >
            Your Dream Home, 
            <span className="block italic text-[#3a3a36]">
              Within Your Budget.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-[650px] text-[0.92rem] font-light leading-[1.75] text-[#3a3a36] sm:text-[1rem]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.32,
            }}
          >
            Let’s Build Your Dream
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.42,
            }}
          >
            <a
  href="https://wa.me/917020720974?text=Hello%20Starinteriors,%20I%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex h-12 max-w-full items-center justify-center gap-3 rounded-[2px] bg-[#2D2D2A] px-6 text-[9px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:px-7 sm:h-13 sm:px-8 sm:text-[10px]"
>
            
            <span className="cta-button-text">
  Get Free Consultation
</span>

              <ArrowRight
  className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
  strokeWidth={1.25}
/>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import { MapPin } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1];

const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Goa",
];

export default function PanIndia() {
  const [citiesRef, citiesVisible] = useReveal();

  return (
    <section className="relative w-full overflow-hidden bg-[#1A1A1A] font-body text-[#F7F4ED]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-[6%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-12">
          
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <span className="flex items-center gap-2.5 text-[9px] font-medium uppercase tracking-[0.35em] text-[#F7F4ED]/55 sm:text-[10px]">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.25} />
              Pan-India Execution
            </span>

            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-normal leading-[1] tracking-[-0.02em]">
              Designing Spaces Across India.
            </h2>
          </motion.div>

          <motion.p
            className="border-l border-[#F7F4ED]/15 pl-5 text-[0.92rem] font-light leading-[1.75] text-[#F7F4ED]/65 md:col-span-5 md:pl-8 md:text-[1rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.12,
            }}
          >
            We’re expanding our work across India 
            while keeping the same personal approach to every project.
          </motion.p>
        </div>

        <div
          ref={citiesRef}
          className={`mt-10 flex flex-wrap gap-2 sm:mt-12 sm:gap-2.5 reveal ${
            citiesVisible ? "is-visible" : ""
          }`}
        >
          {cities.map((city, index) => (
            <span
              key={city}
              className={`rounded-[2px] border border-[#F7F4ED]/18 px-3.5 py-2 text-[8px] font-medium uppercase tracking-[0.18em] text-[#F7F4ED]/75 sm:px-4 sm:py-2.5 sm:text-[9px] ${
                citiesVisible ? "city-pill-visible" : ""
              }`}
              style={{
                transitionDelay: `${index * 70}ms`,
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
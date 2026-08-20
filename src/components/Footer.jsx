import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  MessageCircle,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/starinteriors-logo.png";

const easeOut = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: MessageCircle,
    href: "https://wa.me/917020720974?text=Hello%20Star%20Interiors%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    label: "WhatsApp",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1BtjKuAKzg/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/akash_bagwe_007?igsh=cWpqd3YzejZrYXNr",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden border-t border-[#6B665E]/25 bg-[#ECE6DA] font-body text-[#1A1A1A]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-[6%]">

        {/* =====================================================
            CONTACT INFORMATION
           ===================================================== */}

        <motion.div
          className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
        >

          {/* Phone */}
          <motion.a
            href="tel:+917020720974"
            className="group flex items-start gap-4 border border-[#6B665E]/20 bg-[#F7F4ED]/50 p-5 transition-all duration-300 hover:border-[#2D2D2A]/40 hover:bg-[#F7F4ED]"
            whileHover={{ y: -2 }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#6B665E]/25">
              <Phone
                className="h-4 w-4 text-[#3a3a36]"
                strokeWidth={1.25}
              />
            </div>

            <div>
              <span className="block text-[8px] font-medium uppercase tracking-[0.25em] text-[#6B665E]">
                Call Us
              </span>

              <span className="mt-2 block text-[0.9rem] text-[#1A1A1A]">
                +91 70207 20974
              </span>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:star77interiors@gmail.com"
            className="group flex items-start gap-4 border border-[#6B665E]/20 bg-[#F7F4ED]/50 p-5 transition-all duration-300 hover:border-[#2D2D2A]/40 hover:bg-[#F7F4ED]"
            whileHover={{ y: -2 }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#6B665E]/25">
              <Mail
                className="h-4 w-4 text-[#3a3a36]"
                strokeWidth={1.25}
              />
            </div>

            <div className="min-w-0">
              <span className="block text-[8px] font-medium uppercase tracking-[0.25em] text-[#6B665E]">
                Email
              </span>

              <span className="mt-2 block truncate text-[0.85rem] text-[#1A1A1A]">
                star77interiors@gmail.com
              </span>
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=14%2C%20Dhagirathi%20Darshan%2C%20Golewadi%2C%20Badlapur%20East%2C%20421503"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 border border-[#6B665E]/20 bg-[#F7F4ED]/50 p-5 transition-all duration-300 hover:border-[#2D2D2A]/40 hover:bg-[#F7F4ED]"
            whileHover={{ y: -2 }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#6B665E]/25">
              <MapPin
                className="h-4 w-4 text-[#3a3a36]"
                strokeWidth={1.25}
              />
            </div>

            <div>
              <span className="block text-[8px] font-medium uppercase tracking-[0.25em] text-[#6B665E]">
                Visit Us
              </span>

              <span className="mt-2 block text-[0.85rem] leading-[1.5] text-[#1A1A1A]">
                14, Dhagirathi Darshan,
                <br />
                Golewadi, Badlapur (E) 421503
              </span>
            </div>
          </motion.a>

        </motion.div>


        {/* =====================================================
            MAIN FOOTER
           ===================================================== */}

        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
        >

          {/* Logo */}
          <motion.a
            href="#"
            className="block w-[200px] sm:w-[220px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: 0.1,
            }}
          >
            <img
              src={logo}
              alt="Starinteriors"
              className="h-auto w-full object-contain"
            />
          </motion.a>


          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#3a3a36] transition-colors duration-300 hover:text-[#1A1A1A] sm:text-[10px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: easeOut,
                  delay: 0.15 + index * 0.06,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>


          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6B665E]/30 text-[#3a3a36] transition-all duration-300 hover:border-[#2D2D2A] hover:bg-[#2D2D2A] hover:text-[#F7F7F2]"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: easeOut,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.25}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>


        {/* Divider */}
        <motion.span
          aria-hidden
          className="mt-8 block h-px w-full bg-[#6B665E]/20"
          initial={{
            scaleX: 0,
            transformOrigin: "left",
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: easeOut,
            delay: 0.25,
          }}
        />


        {/* Bottom */}
        <motion.div
          className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: easeOut,
            delay: 0.35,
          }}
        >
          <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#6B665E] sm:text-[9px]">
            © {new Date().getFullYear()} Starinteriors. All rights reserved.
          </p>

          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#6B665E] sm:text-[9px]">
            Badlapur · Maharashtra
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
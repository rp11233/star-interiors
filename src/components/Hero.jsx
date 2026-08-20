import heroImage from "../assets/HERO page image1 (2).jpeg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">

        {/* =========================
            HERO CONTENT
        ========================== */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            minWidth: 0,
          }}
        >

          {/* =========================
              BRAND NAME
          ========================== */}
          <h1 className="hero-title">
            STAR{" "}
            <span>INTERIORS.</span>
          </h1>


          {/* =========================
              SERVICES LINE
          ========================== */}
          <p
            className="hero-eyebrow"
            style={{
              fontSize: "1em",
              marginTop: "12px",
              marginBottom: "24px",
              color: "#B08D57",
            }}
          >
            Interior Designer & Contractor.
          </p>


          {/* =========================
              DESCRIPTION
          ========================== */}
          <p className="hero-description">
            Spaces that feel like home.
            <br />
            Thoughtful interiors designed around the way you live.
          </p>


          {/* =========================
              SERVICES
          ========================== */}
          <ul className="hero-services">
            <li>INTERIOR DESIGNER</li>
            <li>EXTERIOR WORK</li>
            <li>END-TO-END EXECUTION</li>
          </ul>


          {/* =========================
              START YOUR PROJECT
          ========================== */}
          <motion.a
            href="https://wa.me/917020720974?text=Hello%20Starinteriors%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group"
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.25,
            }}
          >
            <span>START YOUR PROJECT</span>

            <ArrowRight
              size={18}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

        </div>


        {/* =========================
            HERO IMAGE
        ========================== */}
        <motion.div
          className="hero-image-wrapper"
          style={{
            position: "relative",
            minWidth: 0,
            overflow: "hidden",
            zIndex: 1,
          }}
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
            duration: 1,
            ease: easeOut,
            delay: 0.15,
          }}
        >

          {/* =========================
              FLOATING IMAGE
          ========================== */}
          <motion.img
            src={heroImage}
            alt="Starinteriors interior design project"
            className="hero-image"
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

        </motion.div>

      </div>
    </section>
  );
}

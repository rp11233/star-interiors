import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import OurWork from "./components/OurWork";
import PanIndia from "./components/PanIndia";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <OurWork />
      <PanIndia />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
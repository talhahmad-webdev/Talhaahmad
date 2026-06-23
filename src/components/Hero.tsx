"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Magnetic from "./Magnetic";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";

export default function Hero() {
  const { setCursorType } = useCursor();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#080808] px-6 py-24 md:py-32"
    >
      {/* Interactive Anti-Gravity Canvas Background */}
      <AntiGravityCanvas />

      {/* Hero Content */}
      <div className="container mx-auto max-w-5xl text-center z-10 relative flex flex-col items-center">
        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full glass border border-white/5 text-[11px] font-semibold tracking-widest text-accent uppercase mb-6"
        >
          Website Developer & SEO Specialist
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-6 leading-none">
          <motion.span
            className="block text-white/50"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hi, I&apos;m
          </motion.span>
          <motion.span
            className="block mt-2 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            onMouseEnter={() => setCursorType("hover-text")}
            onMouseLeave={() => setCursorType("default")}
          >
            Talha Ahmad
          </motion.span>
        </h1>

        {/* Subtitle / Intro Text */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12"
        >
          Creating clean, responsive, and performance-optimized digital experiences from Pakistan. Specializing in frontend development, Shopify environments, and modern web applications.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-16 justify-center"
        >
          <Magnetic strength={0.2}>
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium tracking-wide flex items-center gap-2 group transition-colors duration-300 shadow-lg shadow-accent/20 border border-accent/20 text-sm"
              onMouseEnter={() => setCursorType("hover-link")}
              onMouseLeave={() => setCursorType("default")}
            >
              View My Work
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/20 rounded-full font-medium tracking-wide transition-all duration-300 text-sm"
              onMouseEnter={() => setCursorType("hover-link")}
              onMouseLeave={() => setCursorType("default")}
            >
              Hire Me
            </Link>
          </Magnetic>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-6 items-center"
        >
          <Magnetic strength={0.3}>
            <a
              href="https://www.linkedin.com/in/talha-ahmad-817b9128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/5 hover:border-accent hover:bg-accent/5 flex items-center justify-center text-zinc-400 hover:text-accent transition-all duration-300 text-sm"
              onMouseEnter={() => setCursorType("hover-link")}
              onMouseLeave={() => setCursorType("default")}
            >
              <FaLinkedinIn />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="https://github.com/talhahmad-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/5 hover:border-accent hover:bg-accent/5 flex items-center justify-center text-zinc-400 hover:text-accent transition-all duration-300 text-sm"
              onMouseEnter={() => setCursorType("hover-link")}
              onMouseLeave={() => setCursorType("default")}
            >
              <FaGithub />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

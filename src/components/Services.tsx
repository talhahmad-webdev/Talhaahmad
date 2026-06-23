"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { Code, Paintbrush, Smartphone } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Code className="w-7 h-7 text-accent" />,
    title: "Web design",
    description: "I design and develop responsive, fast, and user-friendly websites using modern frontend technologies. My focus is on clean layouts, smooth interactions, and performance-optimized designs that look great on all devices and browsers.",
  },
  {
    icon: <Paintbrush className="w-7 h-7 text-accent" />,
    title: "UI design",
    description: "I create intuitive and visually appealing user interfaces with a strong focus on usability and consistency. I transform ideas into pixel-perfect designs by following modern UI principles, ensuring a seamless and engaging user experience.",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-accent" />,
    title: "App design",
    description: "I design modern and scalable interfaces for web and mobile applications. From wireframes to final UI, I ensure clarity, accessibility, and smooth user flows that help users interact with applications effortlessly.",
  },
];

function Card({ icon, title, description }: ServiceItem) {
  const { setCursorType } = useCursor();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates on this specific card for localized radial gradient hover effect!
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorType("hover-card")}
      onMouseLeave={() => setCursorType("default")}
      className="relative overflow-hidden rounded-2xl glass-card border border-white/5 p-8 md:p-10 flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500 ease-out"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Dynamic Hover Glow Spot inside the card */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(200px at ${x}px ${y}px, rgba(255, 0, 79, 0.12), transparent 80%)`
          ),
        }}
      />

      {/* Decorative accent border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent/40 transition-all duration-500" />

      {/* Icon Frame */}
      <div className="relative z-10 w-14 h-14 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors duration-500">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#080808] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-accent font-semibold tracking-widest uppercase mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            My Services
          </motion.h2>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

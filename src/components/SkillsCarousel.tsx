"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

interface Skill {
  name: string;
  image: string;
}

const SKILLS: Skill[] = [
  { name: "HTML", image: "/images/logos/1.png" },
  { name: "CSS", image: "/images/logos/2.png" },
  { name: "JavaScript", image: "/images/logos/3.png" },
  { name: "MySQL", image: "/images/logos/4.png" },
  { name: "React", image: "/images/logos/8.png" },
  { name: "Python", image: "/images/logos/6.png" },
  { name: "Shopify", image: "/images/logos/7.png" },
  { name: "WordPress", image: "/images/logos/9.png" },
];

export default function SkillsCarousel() {
  const { setCursorType } = useCursor();

  // Duplicate list to achieve continuous loop seamlessly
  const doubledSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="py-20 bg-[#080808] relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-accent font-semibold tracking-widest uppercase mb-3"
        >
          My Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl font-display font-extrabold text-white"
        >
          Skills & Technologies
        </motion.h2>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="w-full flex overflow-hidden py-4 select-none relative"
        onMouseEnter={() => setCursorType("hover-link")}
        onMouseLeave={() => setCursorType("default")}
      >
        {/* Left and Right Fades for depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        {/* Ticker Row */}
        <motion.div
          className="flex gap-6 whitespace-nowrap min-w-full"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {doubledSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-4 px-8 py-5 rounded-2xl glass border border-white/5 bg-zinc-900/40 min-w-[200px] justify-center transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.02]"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-lg font-medium tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

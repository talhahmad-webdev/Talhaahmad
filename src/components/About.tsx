"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

type TabName = "skills" | "experience" | "education";

const TABS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export default function About() {
  const { setCursorType } = useCursor();
  const [activeTab, setActiveTab] = useState<TabName>("skills");

  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
            onMouseEnter={() => setCursorType("hover-image")}
            onMouseLeave={() => setCursorType("default")}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src="/images/user-talha.png"
                alt="Talha Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Glowing accents behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-pink-600 opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.div>

          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6">
              About Me
            </h2>

            <p className="text-zinc-400 font-light leading-relaxed mb-8 text-base md:text-lg">
              Hey! I’m Talha Ahmad, a <span className="text-accent font-medium">Website Developer</span> and SEO specialist from Pakistan. I enjoy creating online stores and websites that are clean, responsive, and perform well on search engines. I’ve worked on Shopify themes, product SEO, and digital marketing — everything that helps a business grow online.
              <br /><br />
              I’m currently learning more about React and exploring AI integration to build smarter and more dynamic web experiences. I believe in growing a little every day and creating work that makes a real difference.
            </p>

            {/* Premium Tab Buttons */}
            <div className="flex border-b border-white/10 pb-2 mb-8 relative gap-4">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabName)}
                  className={`relative py-2.5 px-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                    activeTab === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  onMouseEnter={() => setCursorType("hover-link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Languages</h4>
                      <p className="text-zinc-400 font-light text-base">HTML, CSS, JavaScript, C++, Python, MSSQL</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Tools</h4>
                      <p className="text-zinc-400 font-light text-base">Visual Studio, Canva, Figma</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">SEO Expertise</h4>
                      <p className="text-zinc-400 font-light text-base">ON/OFF page Search Engine Optimization</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">Tara Technologies</span>
                      <h4 className="text-white font-semibold text-base mt-1">Junior Web Developer (Intern)</h4>
                    </div>
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">Freelancing - Fiverr</span>
                      <h4 className="text-white font-semibold text-base mt-1">Shopify Theme Development</h4>
                    </div>
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">Freelancing - Fiverr</span>
                      <h4 className="text-white font-semibold text-base mt-1">SEO Specialist & Optimization</h4>
                    </div>
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">2022 - 2026 (Current)</span>
                      <h4 className="text-white font-semibold text-base mt-1">BS Computer Science</h4>
                      <p className="text-zinc-500 font-light text-sm mt-1">Lahore Garrison University</p>
                    </div>
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">2020 - 2022</span>
                      <h4 className="text-white font-semibold text-base mt-1">Intermediate</h4>
                      <p className="text-zinc-500 font-light text-sm mt-1">Garrison College Lahore</p>
                    </div>
                    <div className="border-l-2 border-accent/20 pl-4 py-1">
                      <span className="text-xs text-accent font-semibold tracking-widest uppercase">2019 - 2020</span>
                      <h4 className="text-white font-semibold text-base mt-1">Matriculation</h4>
                      <p className="text-zinc-500 font-light text-sm mt-1">The Educators Sahar Campus</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

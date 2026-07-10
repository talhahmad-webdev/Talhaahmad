"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Magnetic from "./Magnetic";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "SafeMother: Pregnancy Health Monitoring System",
    description: "An IoT-enabled maternal healthcare platform (Final Year Project) designed to monitor pregnant mothers' vitals (heart rate, temperature, SpO2) in real-time. Features biometric sensor integration, cloud-based data streaming, and automated emergency alert systems for early risk detection.",
    tags: ["Python", "MongoDB", "HTML", "CSS", "JavaScript", "Arduinoide", "IoT", "ESP32", "FastAPI", "REST API", "chart.js"],
    video: "/images/safemother video.mp4",
    githubUrl: "https://github.com/talhahmad-webdev/safemother-fyp",
  },
  {
    title: "Cutzncraft Website",
    description: "A modern, responsive landing page for Omnifood, a fictional AI-powered food delivery service. Features clean UI design, responsive layouts, and interactive elements optimized for seamless conversion.",
    tags: ["shopify", "liquid", "javascript", "html", "css"],
    image: "/images/work-1.png",
    liveUrl: "https://cutzncraft.com/",
  },
  {
    title: "AI Social Awkwardness Assistant",
    description: "Built an AI-powered web application that analyzes users' text messages to detect emotions such as anxiety, stress, confusion, and confidence using Natural Language Processing (NLP). The system generates personalized AI responses, stores user interaction history, and provides emotion analytics through an interactive dashboard.",
    tags: ["Python", "Streamlit", "FastAPI", "uvicorn", "pandas", "numpy", "pytorch", "Hugging Face Transformers"],
    image: "/images/work-3.png",
    githubUrl: "https://github.com/talhahmad-webdev/ai-awkwardness-detection",
  },
  {
    title: "Fault Detection & Healing System",
    description: "Developed an AI-powered smart grid fault detection system using BiLSTM, Transformer, and Gemini AI. The system analyzes sensor data to detect faults and generates intelligent self-healing recommendations through LangChain, enabling automated and context-aware grid recovery.",
    tags: ["Python", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Gemini AI", "LangChain"],
    image: "/images/work-2.png",
    githubUrl: "https://github.com/talhahmad-webdev/fault_detection_and_self_healing-",
  },
  {
    title: "Digital Voting System",
    description: "A secure RFID and PIR sensor-based digital voting system using Arduino. Features hardware integrations, LCD display outputs, push-button inputs, and real-time counting mechanisms.",
    tags: ["Arduino", "C++", "Sensors", "Hardware Integration"],
    video: "/images/work-video.mp4",
    githubUrl: "https://github.com/talhahmad-webdev/DigitalVotingSystem-project-",
  },
  {
    title: "OmniFood Website",
    description: "A modern, responsive landing page for Omnifood, a fictional AI-powered food delivery service. Features clean UI design, responsive layouts, and interactive elements optimized for seamless conversion.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/images/work-1.png",
    liveUrl: "https://omnifood-website-silk.vercel.app/",
  },
];


export default function Projects() {
  const { setCursorType } = useCursor();

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#080808] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-accent font-semibold tracking-widest uppercase mb-3"
          >
            Selected Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Visual Asset (Image or Video) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} relative group`}
                  onMouseEnter={() => setCursorType("hover-image")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                    ) : (
                      project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 640px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                        />
                      )
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Ambient Backdrop Glow */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-700" />
                </motion.div>

                {/* Details Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col gap-6`}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-semibold tracking-wider text-zinc-300 bg-white/5 rounded-full border border-white/5 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 items-center mt-2">
                    {project.liveUrl && (
                      <Magnetic strength={0.25}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-full font-medium transition-all duration-300 text-xs"
                          onMouseEnter={() => setCursorType("hover-link")}
                          onMouseLeave={() => setCursorType("default")}
                        >
                          Live Demo
                          <FiExternalLink />
                        </a>
                      </Magnetic>
                    )}

                    {project.githubUrl && (
                      <Magnetic strength={0.25}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/20 rounded-full font-medium transition-all duration-300 text-xs"
                          onMouseEnter={() => setCursorType("hover-link")}
                          onMouseLeave={() => setCursorType("default")}
                        >
                          Codebase
                          <FiGithub />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

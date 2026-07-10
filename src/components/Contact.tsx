"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Magnetic from "./Magnetic";
import { FiMail, FiPhone, FiDownload, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { setCursorType } = useCursor();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        console.warn("Web3Forms Access Key is missing. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact: ${formData.name}`,
          from_name: "Talha's Portfolio",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#080808] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column (Contact Details) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-12"
          >
            <div>
              <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">Contact Me</h2>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:talhaahmad6229@gmail.com"
                  className="flex items-center gap-4 group"
                  onMouseEnter={() => setCursorType("hover-link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                    <FiMail className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase">Email Me</p>
                    <p className="text-white text-sm md:text-base font-light transition-colors group-hover:text-accent">talhaahmad6229@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+923191854622"
                  className="flex items-center gap-4 group"
                  onMouseEnter={() => setCursorType("hover-link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                    <FiPhone className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase">Call Me</p>
                    <p className="text-white text-sm md:text-base font-light transition-colors group-hover:text-accent">+92 3191854622</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              {/* CV Button */}
              <Magnetic strength={0.2}>
                <a
                  href="/Talha_Ahmad.pdf"
                  download="Talha_Ahmad.pdf"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-medium tracking-wide transition-colors duration-300 mb-8 text-xs border border-accent/20"
                  onMouseEnter={() => setCursorType("hover-link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Download CV
                  <FiDownload className="text-sm" />
                </a>
              </Magnetic>

              {/* Social links */}
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, url: "#" },
                  { icon: <FaInstagram />, url: "#" },
                  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/talha-ahmad-817b9128a/" },
                  { icon: <FaGithub />, url: "https://github.com/talhahmad-webdev" },
                ].map((social, index) => (
                  <Magnetic key={index} strength={0.3}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-sm"
                      onMouseEnter={() => setCursorType("hover-link")}
                      onMouseLeave={() => setCursorType("default")}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form Panel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl glass-card border border-white/5 p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <FiCheckCircle className="text-accent text-6xl mb-4 animate-bounce" />
                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400 font-light max-w-sm mb-6">
                      Thank you for reaching out. I will read your message and reply as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-zinc-500 font-semibold tracking-wider uppercase">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/40 focus:bg-zinc-900 transition-colors"
                          onMouseEnter={() => setCursorType("hover-text")}
                          onMouseLeave={() => setCursorType("default")}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-zinc-500 font-semibold tracking-wider uppercase">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/40 focus:bg-zinc-900 transition-colors"
                          onMouseEnter={() => setCursorType("hover-text")}
                          onMouseLeave={() => setCursorType("default")}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-zinc-500 font-semibold tracking-wider uppercase">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message details..."
                        required
                        className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-accent/40 focus:bg-zinc-900 transition-colors resize-none"
                        onMouseEnter={() => setCursorType("hover-text")}
                        onMouseLeave={() => setCursorType("default")}
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-rose-500 text-xs mt-2">
                        <FiAlertCircle />
                        <span>Failed to send. Please check your network and try again.</span>
                      </div>
                    )}

                    <div className="mt-4 flex justify-end">
                      <Magnetic strength={0.15}>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="px-8 py-4 bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-600 rounded-full font-semibold transition-all duration-300 text-xs shadow-lg shadow-white/5 flex items-center justify-center min-w-[140px]"
                          onMouseEnter={() => setCursorType("hover-link")}
                          onMouseLeave={() => setCursorType("default")}
                        >
                          {status === "loading" ? "Sending..." : "Submit Message"}
                        </button>
                      </Magnetic>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

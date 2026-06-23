"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Magnetic from "./Magnetic";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { setCursorType } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "py-4 glass border-b border-white/5" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Magnetic strength={0.15}>
            <Link
              href="#home"
              className="flex items-center gap-3 font-semibold"
              onMouseEnter={() => setCursorType("hover-link")}
              onMouseLeave={() => setCursorType("default")}
            >
              <div className="relative w-9 h-9 overflow-hidden rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Talha Logo"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <span className="tracking-widest text-white uppercase text-sm font-semibold">Talha Ahmad</span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.label} strength={0.2}>
                <Link
                  href={item.href}
                  className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors py-2 relative group"
                  onMouseEnter={() => setCursorType("hover-link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </nav>

          {/* Burger Button */}
          <div className="md:hidden flex items-center">
            <Magnetic strength={0.3}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl focus:outline-none p-2"
                onMouseEnter={() => setCursorType("hover-link")}
                onMouseLeave={() => setCursorType("default")}
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-30 md:hidden flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-[280px] h-full bg-[#0d0d0d] border-l border-white/5 p-8 flex flex-col justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, type: "spring" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-semibold text-white hover:text-accent transition-colors block py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

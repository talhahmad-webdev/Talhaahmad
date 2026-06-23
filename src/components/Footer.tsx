"use client";

import React from "react";
import { useCursor } from "@/context/CursorContext";

export default function Footer() {
  const { setCursorType } = useCursor();

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-[#080808] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-zinc-500 text-xs md:text-sm font-light">
          &copy; {new Date().getFullYear()} Developer Portfolio by{" "}
          <span
            className="text-accent font-semibold transition-colors duration-300 hover:text-accent-dark"
            onMouseEnter={() => setCursorType("hover-text")}
            onMouseLeave={() => setCursorType("default")}
          >
            Talha Ahmad.
          </span>{" "}
          All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs font-light">
          Built with Next.js, Tailwind CSS, & Framer Motion
        </p>
      </div>
    </footer>
  );
}

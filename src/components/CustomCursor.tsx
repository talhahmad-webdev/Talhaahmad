"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for trail
  const springConfig = { damping: 35, stiffness: 350, mass: 0.35 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    const timeoutId = setTimeout(() => {
      setIsMobile(!mediaQuery.matches);
    }, 0);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      clearTimeout(timeoutId);
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  // Variants for cursor styling based on cursorType
  const cursorVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.45)",
    },
    "hover-link": {
      width: 56,
      height: 56,
      backgroundColor: "rgba(255, 0, 79, 0.15)",
      border: "1.5px solid #ff004f",
    },
    "hover-card": {
      width: 70,
      height: 70,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: "1px solid #ffffff",
    },
    "hover-text": {
      width: 6,
      height: 40,
      backgroundColor: "#ff004f",
      border: "none",
      borderRadius: 3,
    },
    "hover-image": {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 0, 79, 0.2)",
      border: "1.5px solid #ff004f",
    }
  };

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={cursorType}
        variants={cursorVariants}
        transition={{ type: "spring", stiffness: 450, damping: 25, mass: 0.2 }}
      >
        {cursorType === "hover-card" && (
          <span className="text-[10px] uppercase font-bold text-black tracking-widest">
            View
          </span>
        )}
        {cursorType === "hover-image" && (
          <span className="text-[10px] uppercase font-bold text-white tracking-widest">
            Open
          </span>
        )}
      </motion.div>

      {/* Inner cursor dot */}
      {cursorType !== "hover-text" && cursorType !== "hover-card" && cursorType !== "hover-image" && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: mouseX,
            y: mouseY,
          }}
          transition={{ type: "tween", duration: 0 }}
        />
      )}
    </>
  );
}

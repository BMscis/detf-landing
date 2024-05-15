"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactNode, useEffect, useRef } from "react";
import { Providers } from "./providers";
import { motion, useMotionValue, useTransform } from "framer-motion";
export default function MainComponent({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const viewport = useViewportDimensions();
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  const background = useTransform<number, string>(
    [gradientX, gradientY],
    ([x, y]) =>
      `conic-gradient(from 0deg at ${x * 100}% ${
        y * 100
      }%, cyan, magenta, yellow, cyan)`,
  );
  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
    console.log(event.clientX, event.clientY);
  };
  useEffect(() => {
    const updateBackground = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = centerX - mouseX.get();
      const offsetY = centerY - mouseY.get();
      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
      const scale = distance / Math.max(window.innerWidth, window.innerHeight);

      const gradientX = centerX + offsetX * 0.5;
      const gradientY = centerY + offsetY * 0.5;

      const gradient = `radial-gradient(circle at ${gradientX}px ${gradientY}px, #0e2e54, transparent ${scale * 100}%)`;
      document.body.style.background = gradient;
    };

    const updateHandler = () => {
      updateBackground();
    };

    window.addEventListener("mousemove", updateHandler);

    return () => {
      window.removeEventListener("mousemove", updateHandler);
    };
  }, [mouseX, mouseY]);
  return (
    <motion.div
      style={{ background }}
      onPointerMove={(e) => {
        gradientX.set(e.clientX / viewport.width);
        gradientY.set(e.clientY / viewport.height);
      }}
    ></motion.div>
  );
}

function useViewportDimensions() {
  const dimensions = useRef({ width: 0, height: 0 });

  // Note: This won't accurately reflect viewport size changes
  useEffect(() => {
    dimensions.current.width = window.innerWidth;
    dimensions.current.height = window.innerHeight;
  }, []);

  return dimensions.current;
}

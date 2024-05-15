"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features, {
  Feature0,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  FeatureTitle,
} from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import {
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValue,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function Container({ id, children }: { id: number; children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return <section ref={ref}>{children}</section>;
}
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 100,
    restDelta: 0.001,
  });
  const viewport = useViewportDimensions();
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  const background = useTransform<number, string>(
    [gradientX, gradientY],
    ([x, y]) =>
      `conic-gradient(from 0deg at ${x * 100}% ${
        y * 100
      }%, transparent, transparent,#257fd8, transparent, transparent)`,
  );
  const Components = [
    <Hero />,
    <FeatureTitle />,
    <Feature0 />,
    <Feature1 />,
    <Feature2 />,
    <Feature3 />,
    <Feature4 />,
    <Feature5 />,
    <Video />,
    <Brands />,
    <AboutSectionOne
      title="Crafted for Startup, SaaS and Business Sites."
      paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
      lists={[
        "Premium quality",
        "Tailwind CSS",
        "Use for lifetime",
        "Next.js",
        "Rich documentation",
        "Developer friendly",
      ]}
    />,
    <AboutSectionTwo />,
    <Testimonials />,
    <Pricing />,
    <Blog />,
    <Contact />,
  ];
  return Components.map((Component, index) => (
    <Container key={index} id={index}>
      {Component}
    </Container>
  ));
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

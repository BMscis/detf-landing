"use client";

import Contact from "@/components/Contact";
import {
  Feature0,
  Feature1,
  Feature2,
  Feature3,
  FeatureTitle
} from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {ReactNode, useEffect} from "react";

function Container({id, children}: {id: string; children: ReactNode}) {
  return (
    <section id={id} className="relative">
      {children}
    </section>
  );
}
export default function Home() {
  const Components = [
    {id: "Hero", component: <Hero />},
    {id: "FeatureTitle", component: <FeatureTitle />},
    {id: "Feature0", component: <Feature0 />},
    {id: "Feature1", component: <Feature1 />},
    {id: "Feature2", component: <Feature2 />},
    {id: "Feature3", component: <Feature3 />},
    {id: "Contact", component: <Contact />},
    {id: "Footer", component: <Footer />}
  ];

  useEffect(() => {
    window.addEventListener("scroll", e => {
      console.log(`Scrolling: `, e);
    });
  }, []);
  return Components.map((Component, index) => (
    <Container key={index} id={Component.id}>
      {Component.component}
    </Container>
  ));
}

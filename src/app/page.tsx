import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";
import Skills from "@/components/skills-section";
import React from "react";
import Service from "@/components/service-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Service />
    </>
  );
}

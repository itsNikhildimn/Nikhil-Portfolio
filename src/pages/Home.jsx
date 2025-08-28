import React from "react";
import ThemenToggle from "../components/ThemenToggle";
import StarBackground from "./StarBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* { Theme Toggle} */}
      <ThemenToggle />

      {/* {Background Effect} */}
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

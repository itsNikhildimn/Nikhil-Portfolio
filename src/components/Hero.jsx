import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="#hero"
      className="relative min-h-screen flex flex-col item-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in ">Hi I'm </span>
            <span className=" text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nikhil
            </span>
            <span className=" text-gradinet ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dhiman
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Detail-oriented Web Developer with 1.5 years of experience in
            WordPress, JavaScript, React.js, SQL, and hosting/server management.
            Skilled at building responsive and user-friendly websites,
            performing QA testing, optimizing performance, and resolving
            technical issues. Familiar with Core Java concepts (OOP,
            collections, exception handling) and experienced in managing
            projects from client requirement gathering through to final delivery
            and deployment.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button ">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-small text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;

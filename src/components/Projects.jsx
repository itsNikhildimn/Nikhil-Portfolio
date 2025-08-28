import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "A beautiful landing page using React.js",
    image: "https://picsum.photos/id/1011/600/400",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Full-featured online store with shopping cart and checkout built using Next.js & Stripe",
    image: "https://picsum.photos/id/1019/600/400",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing skills and projects, built with React and Tailwind CSS",
    image: "https://picsum.photos/id/1019/600/400",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Dynamic blog platform with Markdown support and comments, powered by Node.js and MongoDB",
    image: "https://picsum.photos/id/1025/600/400",
    tags: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    id: 5,
    title: "Task Manager App",
    description:
      "Productivity app to manage daily tasks with drag & drop, built using React and Redux",
    image: "https://picsum.photos/id/1035/600/400",
    tags: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Real-time weather forecasting app using OpenWeather API and React",
    image: "https://picsum.photos/id/1043/600/400",
    tags: ["React", "API Integration", "CSS3"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muteer-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent ptojects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag) => (
                    <span className=" px-2 py-1 text-xs font border  rounded-full bg-secondary text-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center item-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href=""
          >
            {" "}
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

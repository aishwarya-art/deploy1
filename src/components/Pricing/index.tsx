"use client";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const ProjectCard = ({ title, description, githubLink, techStack }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-[#1A1A2E] text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-[#0F3460] text-white px-2 py-1 rounded-md"
          >
            #{tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Covid-19 Tracker",
      description:
        "Web-based platform that allows users to search, filter, and look for active COVID-19 cases around the world. A visual representation of the various categories provides an aesthetic view of the infection rate.",
      githubLink: "https://github.com/yourusername/covid-19-tracker",
      techStack: ["react", "mongodb", "scss", "javascript"],
    },
    {
      title: "E-Commerce App",
      description:
        "A modern e-commerce platform with features like product browsing, cart management, and payment integration.",
      githubLink: "https://github.com/yourusername/ecommerce-app",
      techStack: ["react", "firebase", "tailwindcss"],
    },
    {
      title: "Weather App",
      description:
        "A simple app to check real-time weather updates using OpenWeatherMap API.",
      githubLink: "https://github.com/yourusername/weather-app",
      techStack: ["javascript", "css", "html"],
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Projects"
          paragraph="Here are some of the projects we have worked on. Click the GitHub icon to view the source code."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

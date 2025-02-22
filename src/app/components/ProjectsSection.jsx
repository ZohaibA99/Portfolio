"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dropbox Clone",
    description: "Dropbox clone made using: Nextjs, Clerk Authentication, Firebase firestore/database, Responsive, Dark/Light Theme",
    image: "/images/projects/drop-box.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://dropbox-clone-66pv3y12u-zohaiba99.vercel.app/",
  },
  {
    id: 2,
    title: "Authentication Template",
    description: "Project utilizes: MERN Stack, JWT Authentication, Bcrypt, React Router, Full stack, CRUD implementation",
    image: "/images/projects/authenticate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZohaibA99/auth-template",
    previewUrl: "https://mern-auth-tmkd.onrender.com/",
  },
  {
    id: 3,
    title: "Anime Vault",
    description: "NextJS, Framer Motion, Infinite Scrolling with animations",
    image: "/images/projects/anime-vault.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZohaibA99/anime_vault",
    previewUrl: "https://anime-vault-9qd9zrpyu-zohaiba99.vercel.app/",
  },
  {
    id: 4,
    title: "Responsive Playstation Store Clone",
    description: "Project Utilizes: HTML/CSS/SASS/Responsive Web Design",
    image: "/images/projects/playstation.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZohaibA99/ResponsivePlayStation",
    previewUrl: "https://zohaiba99.github.io/ResponsivePlayStation/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

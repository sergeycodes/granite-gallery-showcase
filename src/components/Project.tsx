import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects'; // Import the projects

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-granite-50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-granite-800">
          Our Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover md:h-72"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-granite-800">{title}</h3>
        <p className="text-granite-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
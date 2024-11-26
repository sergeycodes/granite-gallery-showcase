import React from "react";
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  mainImage: string;
  title: string;
  description: string;
}

const ProjectCard = ({ id, mainImage, title, description }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card cursor-pointer" onClick={handleClick}>
      <img
        src={mainImage}
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
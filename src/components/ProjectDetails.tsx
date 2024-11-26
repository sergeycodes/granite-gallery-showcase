import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Import the CSS file

const projectDetails = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    description: "Elegant black granite countertops with waterfall edges",
    mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    material: "Black Granite",
  },
  {
    id: 2, 
    title: "Luxury Bathroom",
    description: "White marble vanity with custom-cut granite details",
    mainImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
    ],
    material: "White Marble",
  },
  {
    id: 3, 
    title: "Contemporary Living",
    description: "Stunning granite fireplace surround and accent walls",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    material: "Granite",
  },
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails.find(p => p.id === parseInt(id!));

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="error-icon">🚧</div>
        <h1>Oops! Project Not Found</h1>
        <p>We couldn't find the project you're looking for. It might have been moved or deleted.</p>
        <p>Please check the URL or go back to the <a href="/">home page</a>.</p>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <h1 className="project-details-title">{project.title}</h1>
      <div className="project-details-grid">
        <div className="project-details-main-image">
          <img src={project.mainImage} alt={project.title} className="main-image" />
        </div>
        {project.images.map((image, index) => (
          <div key={index} className={`project-details-image-wrapper image-${index + 1}`}>
            <img src={image} alt={`${project.title} ${index + 1}`} className="project-details-image" />
          </div>
        ))}
      </div>
      <div className="project-details-info">
        <h2>Material</h2>
        <p>{project.material}</p>
        <h2>Description</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
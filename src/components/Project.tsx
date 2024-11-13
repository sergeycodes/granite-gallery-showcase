import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Modern Kitchen Renovation",
    description: "Elegant black granite countertops with waterfall edges",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Luxury Bathroom",
    description: "White marble vanity with custom-cut granite details",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Contemporary Living",
    description: "Stunning granite fireplace surround and accent walls",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Outdoor Kitchen",
    description: "Durable granite countertops for outdoor cooking spaces",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Office Reception",
    description: "Elegant granite reception desk and flooring",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Hotel Lobby",
    description: "Luxurious granite flooring and wall accents",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Residential Bathroom",
    description: "Custom granite vanity and shower walls",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Commercial Space",
    description: "Granite countertops and flooring for commercial spaces",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Luxury Apartment",
    description: "Granite kitchen countertops and bathroom vanities",
  },
];

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
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
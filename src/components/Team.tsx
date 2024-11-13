import React from "react";
import TeamMember from "./TeamMember";

const team = [
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    name: "Sarah Johnson",
    role: "Lead Designer",
    bio: "With over 15 years of experience in interior design, Sarah brings creativity and precision to every project.",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    name: "Michael Chen",
    role: "Installation Manager",
    bio: "Michael ensures every installation meets our high standards of quality and craftsmanship.",
  },
  {
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    name: "David Miller",
    role: "Master Craftsman",
    bio: "David's attention to detail and expertise in stone cutting sets the standard for excellence.",
  },
];

const Team = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-granite-800">
          Meet Our Team
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
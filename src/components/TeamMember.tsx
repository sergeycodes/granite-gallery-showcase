import React from "react";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMember = ({ image, name, role, bio }: TeamMemberProps) => {
  return (
    <div className="team-member">
      <img
        src={image}
        alt={name}
        className="h-96 w-full object-cover"
      />
      <div className="team-member-info">
        <h3 className="mb-1 text-xl font-semibold">{name}</h3>
        <p className="mb-2 text-granite-200">{role}</p>
        <p className="text-sm text-granite-100">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
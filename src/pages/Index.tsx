import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Team from "../components/Team";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <Team />
    </main>
  );
};

export default Index;
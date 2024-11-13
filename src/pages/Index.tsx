import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Map from "../components/Map";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <Team />
      <Map />
    </main>
  );
};

export default Index;
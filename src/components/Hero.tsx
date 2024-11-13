import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative flex h-full items-center">
        <div className="max-w-2xl animate-fadeIn text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Crafting Timeless Beauty in Stone
          </h1>
          <p className="mb-8 text-xl leading-relaxed">
            Premium granite installations that transform your space into a
            masterpiece of elegance and durability.
          </p>
          <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-granite-800 transition-colors hover:bg-granite-100">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
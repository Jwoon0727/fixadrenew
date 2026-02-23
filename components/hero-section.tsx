"use client";

import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };

const SLIDES = [
  {
    label: "slide_1",
    src: "/hero/5.png",
  },
];

export function HeroSection() {
  return (
    <div id="hero" className="bg-gray-100 h-screen relative">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div
        className="absolute inset-x-1/2 inset-y-1/2 w-32 lg:w-48 h-auto z-20"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      >
        <img
          src="hero/logo.png"
          alt="logo_center"
          style={{
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
}

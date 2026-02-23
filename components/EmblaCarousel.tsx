"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface Slide {
  label: string;
  src: string;
}

interface EmblaCarouselProps {
  slides: Slide[];
  options?: any;
}

export default function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla is ready");
    }
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

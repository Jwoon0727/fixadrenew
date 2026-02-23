"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Logo {
  name: string;
  src: string;
  width?: number;
  height?: number;
}

const logos: Logo[] = [
  { name: "Logo1", src: "/marqeelogo/1.png", width: 120, height: 40 },
  { name: "Logo2", src: "/marqeelogo/2.png", width: 120, height: 40 },
  { name: "Logo3", src: "/marqeelogo/3.png", width: 100, height: 40 },
  { name: "Logo4", src: "/marqeelogo/4.png", width: 100, height: 40 },
  { name: "Logo5", src: "/marqeelogo/5.png", width: 120, height: 40 },
  { name: "Logo6", src: "/marqeelogo/6.png", width: 120, height: 40 },
  { name: "Logo7", src: "/marqeelogo/7.png", width: 90, height: 40 },
  { name: "Logo8", src: "/marqeelogo/8.png", width: 100, height: 40 },
  { name: "Logo9", src: "/marqeelogo/9.png", width: 80, height: 40 },
  { name: "Logo10", src: "/marqeelogo/10.png", width: 100, height: 40 },
  { name: "Logo11", src: "/marqeelogo/11.png", width: 100, height: 40 },
  { name: "Logo12", src: "/marqeelogo/12.png", width: 80, height: 40 },

  // 아래처럼 계속 추가해서 30개 채우면 됩니다.
  { name: "Logo13", src: "/marqeelogo/13.png", width: 120, height: 40 },
  { name: "Logo14", src: "/marqeelogo/14.png", width: 120, height: 40 },
  { name: "Logo15", src: "/marqeelogo/15.png", width: 120, height: 40 },
  { name: "Logo16", src: "/marqeelogo/16.png", width: 120, height: 40 },
  { name: "Logo17", src: "/marqeelogo/17.png", width: 120, height: 40 },
  { name: "Logo18", src: "/marqeelogo/18.png", width: 120, height: 40 },
  { name: "Logo19", src: "/marqeelogo/19.png", width: 120, height: 40 },
  { name: "Logo20", src: "/marqeelogo/20.png", width: 120, height: 40 },
  { name: "Logo21", src: "/marqeelogo/21.png", width: 120, height: 40 },
  { name: "Logo22", src: "/marqeelogo/22.png", width: 120, height: 40 },
  { name: "Logo23", src: "/marqeelogo/23.png", width: 120, height: 40 },
  { name: "Logo24", src: "/marqeelogo/24.png", width: 120, height: 40 },
  { name: "Logo25", src: "/marqeelogo/25.png", width: 120, height: 40 },
  { name: "Logo26", src: "/marqeelogo/26.png", width: 120, height: 40 },
  { name: "Logo27", src: "/marqeelogo/27.png", width: 120, height: 40 },
  { name: "Logo28", src: "/marqeelogo/28.png", width: 120, height: 40 },
  { name: "Logo29", src: "/marqeelogo/29.png", width: 120, height: 40 },
  { name: "Logo30", src: "/marqeelogo/30.png", width: 120, height: 40 },
  { name: "Logo31", src: "/marqeelogo/31.png", width: 120, height: 40 },
  { name: "Logo32", src: "/marqeelogo/32.png", width: 120, height: 40 },
  { name: "Logo33", src: "/marqeelogo/33.png", width: 120, height: 40 },
  { name: "Logo34", src: "/marqeelogo/34.png", width: 120, height: 40 },
];

function MarqueeRow({
  direction = "left",
  speed = 30,
  logosSubset,
}: {
  direction?: "left" | "right";
  speed?: number;
  logosSubset?: Logo[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId = 0;
    let position = 0;
    const totalWidth = el.scrollWidth / 2;

    const animate = () => {
      if (direction === "left") {
        position -= speed / 60;
        if (position <= -totalWidth) position = 0;
      } else {
        position += speed / 60;
        if (position >= 0) position = -totalWidth;
      }

      el.style.transform = `translate3d(${position}px,0,0)`;
      animationId = requestAnimationFrame(animate);
    };

    if (direction === "right") position = -totalWidth;
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  const row = logosSubset ?? logos;

  return (
    <div className="overflow-hidden relative">
      <div ref={scrollRef} className="flex items-center will-change-transform">
        {[...row, ...row].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-6 md:px-10 lg:px-14 py-5 opacity-30 hover:opacity-80 transition-opacity duration-500"
            aria-label={logo.name}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width ?? 120}
              height={logo.height ?? 40}
              className="h-6 md:h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  const firstRow = logos.slice(0, 10);
  const secondRow = logos.slice(10, 20);
  const thirdRow = logos.slice(20, 30);

  return (
    <section className="w-full pt-5 md:pt-8 pb-5 md:pb-8 overflow-hidden bg-white text-[#0a0a0a] relative">
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #ffffff 0%, transparent 100%)",
          }}
        />

        <div className="flex flex-col gap-2 md:gap-4">
          <MarqueeRow direction="left" speed={22} logosSubset={firstRow} />
          <MarqueeRow direction="right" speed={18} logosSubset={secondRow} />
          <MarqueeRow direction="left" speed={26} logosSubset={thirdRow} />
        </div>
      </div>
    </section>
  );
}

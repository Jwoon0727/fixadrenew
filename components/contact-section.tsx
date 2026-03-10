"use client";

import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-8 md:py-24 text-black overflow-hidden"
    >
      {/* Base white + subtle warm tint + faint texture */}
      <div className="absolute inset-0 z-0 bg-white" />
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 20%, rgba(253,227,220,0.35) 60%, rgba(245,218,205,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div
        data-animate="scale-in"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
        style={{ transitionDelay: "0.1s" }}
      >
        <p
          data-animate="fade-up"
          className="text-neutral-600 text-sm tracking-widest uppercase mb-4"
          style={{ transitionDelay: "0.2s" }}
        >
          Contact
        </p>
        <h2
          data-animate="fade-up"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 md:mb-8 text-balance"
          style={{ transitionDelay: "0.3s" }}
        >
          브랜드에 진심을 담아,
          <br />
          성과로 이어드립니다.
        </h2>
        <p
          data-animate="fade-up"
          className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-12"
          style={{ transitionDelay: "0.4s" }}
        >
          지금 바로 상담 문의하세요 :) <br />
          픽스애드가 당신의 든든한 마케팅 파트너가 되겠습니다.
        </p>

        <div
          data-animate="fade-up"
          className="flex flex-col sm:flex-row gap-4"
          style={{ transitionDelay: "0.5s" }}
        >
          <a
            href="https://pf.kakao.com/_eCxoxoxj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors duration-300 group"
          >
            카카오톡 문의하기
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-white text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero/contact.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div
        data-animate="scale-in"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
        style={{ transitionDelay: "0.1s" }}
      >
        <p
          data-animate="fade-up"
          className="text-neutral-200 text-sm tracking-widest uppercase mb-4"
          style={{ transitionDelay: "0.2s" }}
        >
          Contact
        </p>
        <h2
          data-animate="fade-up"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 text-balance"
          style={{ transitionDelay: "0.3s" }}
        >
          브랜드에 진심을 담아,
          <br />
          성과로 이어드립니다.
        </h2>
        <p
          data-animate="fade-up"
          className="text-neutral-200 text-base md:text-lg leading-relaxed max-w-xl mb-12"
          style={{ transitionDelay: "0.4s" }}
        >
          지금 바로 상담을 시작하세요. 픽스애드가 브랜드의 성장을 함께
          설계합니다.
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
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-300 group"
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

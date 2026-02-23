"use client";

import Image from "next/image";
import { Globe, Search, Instagram, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Google",
    subtitle: "구글 SEO",
    description: "구글맵, 비즈니스 프로필 관리 및 세팅 등",
    icon: Globe,
    image: "/images/services/google.jpeg",
  },
  {
    number: "02",
    title: "Naver",
    subtitle: "네이버 SEO",
    description: "플레이스, 블로그, 퍼포먼스 솔루션 등",
    icon: Search,
    image: "/images/services/naver.jpeg",
  },
  {
    number: "03",
    title: "Instagram",
    subtitle: "인스타그램 퍼널",
    description: "콘텐츠 기획, CPC 등",
    icon: Instagram,
    image: "/images/services/inst.jpg",
  },
  {
    number: "04",
    title: "Xiaohongshu",
    subtitle: "중국마케팅",
    description: "왕홍 체험단, 기업 인증, 계정 관리 대행 등",
    icon: Users,
    image: "/images/services/sha.jpg",
  },
  {
    number: "05",
    title: "따종디엔핑",
    subtitle: "따종디엔핑",
    description: "매장 등록, CPC 등",
    icon: Users,
    image: "/images/services/dda.jpg",
  },
  {
    number: "06",
    title: "Youtube",
    subtitle: "유튜브",
    description: "유튜브 SEO, 키워드 세팅, 채널 운영 등",
    icon: Users,
    image: "/images/services/google.jpeg",
  },
];

export function ServicesSection() {
  const sectionRef = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla carousel ready");
    }
  }, [emblaApi]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-white text-[#0a0a0a]"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
        <div>
          <p
            data-animate="fade-up"
            className="text-neutral-400 text-sm tracking-widest uppercase mb-4"
            style={{ transitionDelay: "0s" }}
          >
            company
          </p>
          <h2
            data-animate="fade-up"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a]"
            style={{ transitionDelay: "0.1s" }}
          >
            SERVICE
          </h2>
        </div>
        <p
          data-animate="fade-up"
          className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-md"
          style={{ transitionDelay: "0.2s" }}
        >
          브랜드의 목표에 가장 정확히 맞는 방식으로 결과 중심의 마케팅 캠페인을
          설계합니다.
        </p>
      </div>

      {/* 데스크톱: Grid */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 hidden md:block">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.number}
              data-animate="fade-up"
              className="relative border border-neutral-200 border-t-0 group hover:border-neutral-400 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[500px] md:min-h-[550px] rounded-lg"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={`${service.title} 서비스 이미지`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* 콘텐츠 */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                {/* 상단: 아이콘 */}
                <div className="flex justify-end"></div>

                {/* 하단: 텍스트 정보 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#E26263] text-xs font-mono tracking-wider font-medium">
                      {service.number}
                    </span>
                    <div className="h-px flex-1 bg-[#E26263]/30"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#E26263] text-sm font-medium tracking-wide">
                    {service.subtitle}
                  </p>

                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 모바일 슬라이더 - Embla Carousel */}
      <div className="md:hidden overflow-hidden -mx-6" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="flex-[0_0_85%] min-w-0 pl-6 pr-2"
              >
                <div className="relative border border-neutral-200 border-t-0 group hover:border-neutral-400 hover:shadow-xl transition-all duration-500 overflow-hidden h-[550px] rounded-lg">
                  {/* 배경 이미지 */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={`${service.title} 서비스 이미지`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* 그라데이션 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* 상단: 아이콘 */}
                    <div className="flex justify-end"></div>

                    {/* 하단: 텍스트 정보 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[#E26263] text-xs font-mono tracking-wider font-medium">
                          {service.number}
                        </span>
                        <div className="h-px flex-1 bg-[#E26263]/30"></div>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-[#E26263] text-sm font-medium tracking-wide">
                        {service.subtitle}
                      </p>

                      <p className="text-white/80 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

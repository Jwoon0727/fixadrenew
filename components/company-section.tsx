"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// 갤러리 이미지 데이터 (12장)
const galleryImages = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/${i + 1}.jpg`,
  alt: `갤러리 이미지 ${i + 1}`,
}));

export function CompanySection() {
  const sectionRef = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  // 키보드 이벤트
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  };

  return (
    <section
      id="company"
      ref={sectionRef}
      className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] text-white"
    >
      {/* Section Label */}
      <p
        data-animate="fade-up"
        className="text-neutral-500 text-sm tracking-widest uppercase mb-4"
        style={{ transitionDelay: "0s" }}
      >
        Company
      </p>
      <h2
        data-animate="fade-up"
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-10 md:mb-14"
        style={{ transitionDelay: "0.1s" }}
      >
        ABOUT US
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* 이미지 갤러리 - Left */}
        <div data-animate="fade-left" style={{ transitionDelay: "0.2s" }}>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}

            {/* 더보기 버튼 */}
            <div
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-black border border-neutral-800 flex items-center justify-center group hover:border-[#E26263] transition-all duration-300"
              onClick={() => openModal(8)}
            >
              <div className="text-center">
                <p className="text-white text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  +3
                </p>
                <p className="text-neutral-400 text-sm tracking-wide group-hover:text-white transition-colors">
                  더보기
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message - Right */}
        <div data-animate="fade-right" style={{ transitionDelay: "0.3s" }}>
          <div className="flex flex-col gap-6">
            <p className="text-white text-base md:text-lg leading-relaxed">
              픽스애드(주식회사 진심픽스)는 브랜드의 성장을 설계하는 디지털 SNS
              마케팅 전문 기업입니다. 다양한 산업의 고객과 브랜드를 함께
              성장시키며 축적해온 경험을 바탕으로, 단순한 광고 운영을 넘어
              브랜드의 지속 가능한 성장을 위한 전략적 마케팅 솔루션을
              제공합니다.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed">
              오늘날 디지털 플랫폼은 언어와 문화를 넘어 전 세계의 소비자와
              브랜드를 연결하는 핵심 인프라로 자리 잡았습니다. 이에 따라 디지털
              마케팅은 단순한 노출을 넘어 브랜드의 신뢰를 구축하고 글로벌 시장과
              연결하는 중요한 전략적 수단으로 발전하고 있습니다.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed">
              픽스애드는 국내 주요 플랫폼은 물론, 빠르게 변화하는 글로벌 디지털
              환경에 대응하여 글로벌 플랫폼까지 확장되는 통합 마케팅 전략을
              제공합니다. 이를 통해 광고주분들의 브랜드가 국내 시장을 넘어 더
              넓은 글로벌 시장에서 새로운 기회를 발견하고 지속적으로 성장할 수
              있도록 돕습니다.
              <br /> 또한 N사 출신 개발자들과 차별화된 마케팅 솔루션을 직접
              개발하고 운영하며, 데이터와 기술을 기반으로 변화하는 디지털 시장
              속에서 고객 브랜드의 경쟁력을 지속적으로 강화하고 있습니다.
            </p>
            <p className="text-white text-base leading-relaxed font-medium">
              픽스애드는 단기적인 성과에 머무르지 않고, 브랜드가 시장에서 오래
              사랑받을 수 있도록 진정성과 신뢰를 바탕으로 함께 성장하는 마케팅
              파트너가 되겠습니다.
            </p>
            <br />
            <blockquote className="mt-4 border-l-2 border-[#E26263] pl-6">
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium italic">
                {
                  "“픽스애드는 고객의 브랜드가 오래 사랑받을 수 있도록, 진심을 담아 함께하겠습니다.”"
                }
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* 닫기 버튼 */}
          <button
            className="absolute top-4 right-4 z-50 text-white hover:text-amber-400 transition-colors p-2"
            onClick={closeModal}
            aria-label="닫기"
          >
            <X size={32} />
          </button>

          {/* 이전 버튼 */}
          <button
            className="absolute left-4 z-50 text-white hover:text-amber-400 transition-colors p-2 bg-black/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="이전 이미지"
          >
            <ChevronLeft size={40} />
          </button>

          {/* 다음 버튼 */}
          <button
            className="absolute right-4 z-50 text-white hover:text-amber-400 transition-colors p-2 bg-black/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="다음 이미지"
          >
            <ChevronRight size={40} />
          </button>

          {/* 이미지 */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 이미지 카운터 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          {/* 썸네일 네비게이션 */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-amber-400 scale-110"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

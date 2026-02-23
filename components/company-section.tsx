"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// 갤러리 이미지 데이터 (12장)
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
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
                  +4
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
              처음엔 일개 광고회사 사원으로 시작했습니다. 수많은 고객을 만나고,
              그들의 브랜드를 함께 키워오며 저 역시 몇 년 동안 끊임없이 배우고
              성장해 왔습니다.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed">
              고객 한 분 한 분의 성과는 제게 단순한 결과가 아닌, 진심을 담은
              마케팅의 가치를 다시금 깨닫게 해주는 동력이었습니다. 그러한
              경험들이 쌓여 더 많은 분들과 진정성 있게 일하고 싶다는 마음으로
              픽스애드를 설립하게 되었습니다.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed">
              SNS 플랫폼은 이제 언어와 문화를 넘어 브랜드를 연결하는 도구가
              되었고, 디지털 광고는 단순 노출이 아닌 글로벌 신뢰의 시작점이
              되었습니다.
            </p>
            <p className="text-white text-base leading-relaxed font-medium">
              픽스애드는 N사 출신 개발자들과 함께 다른 곳에 없는 마케팅 솔루션을
              직접 개발하며 시장을 선도합니다. 고객의 브랜드가 오래 사랑받을 수
              있도록, 진심을 담아 함께하겠습니다.
            </p>
            <br />
            <blockquote className="mt-4 border-l-2 border-[#E26263] pl-6">
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium italic">
                {'"진심이 만든 전략, 증명하는 성과, 오래 찾는 픽스애드"'}
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

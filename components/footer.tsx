"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 md:px-12 lg:px-20 py-12 bg-[#0a0a0a] text-white">
      <div className="flex flex-col items-center text-center gap-8">
        {/* 로고 영역 */}
        <div className="flex flex-col items-center">
          <Image
            src="/hero/logo.png" // 로고 경로
            alt="FIXAD 로고"
            width={120}
            height={40}
            className="object-contain"
          />
          <p className="text-neutral-500 text-xs mt-3 tracking-wide">
            픽스애드(FIXAD) | 주식회사 주식회사 진심픽스(JINSIMFIX Co., Ltd.)
          </p>
        </div>

        {/* 메뉴 */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
          <p className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
            대표이사: 김예진
          </p>
          <p className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
            사업자등록번호: 349-87-03693
          </p>
          <p className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
            서울특별시 금천구 디지털로 178, 가산퍼블릭 A동 15층 1503호
          </p>
        </div>

        {/* 카피라이트 */}
        <p className="text-neutral-500 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} © 2025 JINSIMFIX, Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

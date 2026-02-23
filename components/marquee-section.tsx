// MarqueeSection.tsx
export function MarqueeSection() {
  const items = [
    "GOOGLE SEO",
    "NAVER SEO",
    "INSTAGRAM",
    "XIAOHONGSHU",
    "DIANPING",
    "YOUTUBE",
    "BUSINESS PROFILE",
  ];

  // 한 세트를 2번 붙여서 끊김 없는 루프 만들기
  const loopItems = [...items, ...items];

  return (
    <section className="py-10 md:py-12 border-y border-neutral-200 overflow-hidden bg-white">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {loopItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-none text-neutral-200 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mx-6 md:mx-10 select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

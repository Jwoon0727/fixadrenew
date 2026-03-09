# 네이버/구글 SEO 체크리스트

## 완료된 설정

- [x] 메타 title (핵심 키워드 앞단 배치: 네이버 SEO, 구글 SEO)
- [x] 메타 description (150자 내외, 네이버 권장)
- [x] keywords 메타태그
- [x] Open Graph / Twitter 카드
- [x] canonical URL
- [x] robots.txt (네이버 Yeti, 구글 Googlebot 허용)
- [x] sitemap.xml (`/sitemap.xml`)
- [x] JSON-LD 구조화 데이터 (Organization, LocalBusiness, WebSite, Service)
- [x] manifest.json (모바일·PWA)
- [x] `<html lang="ko">`

## 직접 진행해야 할 작업

### 1. 네이버 서치어드바이저 등록 (필수)

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 사이트 등록 후 **소유확인** → **HTML 메타태그** 방식 선택
3. 발급받은 코드를 `app/layout.tsx`의 `metadata`에 추가:

```ts
export const metadata: Metadata = {
  // ...
  verification: {
    naver: "발급받은_네이버_인증코드",
  },
};
```

4. 등록 후 **사이트맵 제출**: `https://fixadd.vercel.app/sitemap.xml`

### 2. 구글 서치콘솔 등록 (선택)

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 소유권 확인 후 `verification.google` 추가
3. 사이트맵 제출: `https://fixadd.vercel.app/sitemap.xml`

### 3. 도메인 변경 시

`app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `public/manifest.json`에서  
`https://fixadd.vercel.app`를 실제 도메인으로 일괄 교체하세요.

### 4. 추가 권장

- **네이버 블로그/카페**: 웹사이트만으로는 한계가 있으므로, 블로그·카페 연동 권장
- **이미지 alt**: 갤러리 등 이미지에 구체적인 설명 alt 작성
- **콘텐츠 확장**: 블로그/케이스 스터디 페이지 추가 시 검색 노출 유리

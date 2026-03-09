import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = "https://www.fixadcompany.com";
const SITE_NAME = "픽스애드 - FIXAD";
const DEFAULT_TITLE =
  "네이버 SEO, 구글 SEO 전문 | 픽스애드 - 인스타그램 마케팅, 글로벌 체험단";
const DEFAULT_DESC =
  "픽스애드(FIXAD)는 구글 SEO, 네이버 SEO, 인스타그램 마케팅, 따종디엔핑, 유튜브, 왕홍 체험단 등 디지털 마케팅을 전문으로 합니다. 서울 금천구 위치. 브랜드 성과 검증.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: [
    "네이버 SEO",
    "구글 SEO",
    "픽스애드",
    "픽스애드 - FIXAD",
    "디지털 마케팅",
    "인스타그램 마케팅",
    "글로벌 체험단",
    "왕홍 체험단",
    "따종디엔핑",
    "네이버 플레이스",
    "구글맵 SEO",
    "디지털 마케팅 에이전시",
    "서울 마케팅",
  ],
  authors: [{ name: "픽스애드", url: SITE_URL }],
  creator: "픽스애드 FIXAD",
  publisher: "주식회사 진심픽스",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: `${SITE_URL}/hero/logo.png`,
        width: 1200,
        height: 630,
        alt: "픽스애드 - 디지털 마케팅 전문 에이전시",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [`${SITE_URL}/hero/logo.png`],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/hero/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/hero/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/hero/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/hero/logo.png",
  },
  category: "marketing",
  other: {
    "naver-site-verification": "naver35e892db9de451044167c195763a280a",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "픽스애드 FIXAD",
        alternateName: "주식회사 진심픽스",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/hero/logo.png` },
        description: DEFAULT_DESC,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "픽스애드",
        image: `${SITE_URL}/hero/logo.png`,
        url: SITE_URL,
        telephone: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "디지털로 178, 가산퍼블릭 A동 15층 1503호",
          addressLocality: "금천구",
          addressRegion: "서울특별시",
          postalCode: "08501",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.4709,
          longitude: 126.8793,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        serviceType: "디지털 마케팅",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "KR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "픽스애드 서비스",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "구글 SEO" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "네이버 SEO" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "인스타그램 마케팅" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "왕홍 체험단" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "유튜브 SEO" },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fixadd.vercel.app"),
  title: "FIXAD - 진심이 만든 전략, 증명하는 성과",
  description:
    "픽스애드 | 구글 SEO, 네이버 SEO, 인스타그램 마케팅, 글로벌 체험단 전문 디지털 마케팅 에이전시",
  openGraph: {
    images: ["/hero/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero/logo.png"],
  },
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
  return (
    <html lang="ko">
      <head>
        <meta
          property="og:image"
          content="https://fixadd.vercel.app/hero/logo.png"
        />
        <meta
          property="og:image:url"
          content="https://fixadd.vercel.app/hero/logo.png"
        />
        <meta
          name="twitter:image"
          content="https://fixadd.vercel.app/hero/logo.png"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import React from "react";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "썸뷰 | 유튜브 썸네일 미리보기",
  description: "유튜브 썸네일 미리보기로 클릭률을 높이세요!",
  keywords: "썸뷰, 유튜브 썸네일, 썸네일 미리보기, 유튜브 클릭률, 썸네일 최적화, 유튜브 크리에이터, CTR 개선, 썸네일 디자인, 유튜브 성장, 썸네일 제작, 유튜브 마케팅, 썸내일, 쌈네일",
  authors: [{ name: "썸뷰" }],
  creator: "썸뷰",
  publisher: "썸뷰",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://someview.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "썸뷰 | 유튜브 썸네일 미리보기",
    description: "유튜브 썸네일 미리보기로 클릭률을 높이세요!",
    url: "https://someview.kr",
    siteName: "썸뷰",
    images: [
      {
        url: "https://someview.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "썸뷰 - 유튜브 썸네일 미리보기 서비스",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "썸뷰 | 유튜브 썸네일 미리보기",
    description: "유튜브 썸네일 미리보기로 클릭률을 높이세요!",
    images: ["https://someview.kr/og-image.png"],
    creator: "@someview",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    nocache: true,
  },
  verification: {
    google: "OnTTi82xeLoj5Fv1A229q8WqIL24qxSwvDEFVWvTrO0",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <head>
        <title>썸뷰 | 유튜브 썸네일 미리보기</title>
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CK991WD1MG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CK991WD1MG');
          `}
        </Script>

        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4931955840341505" crossOrigin="anonymous"></script>

        {/* 기본 메타 태그 */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF4646" />
        <meta name="robots" content="index, follow" />

        {/* 검색 엔진 인증 */}
        <meta name="naver-site-verification" content="f842f00879dafecfc5d1048a9732e60886d42b50" />

        {/* 파비콘 및 애플 터치 아이콘 설정 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF4646" />
        <meta name="msapplication-TileColor" content="#FF4646" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO 메타 태그 */}
        <meta name="description" content="유튜브 썸네일 미리보기로 클릭률을 높이세요! 썸뷰에서 썸네일을 미리 확인하고 최적화하세요." />
        <meta name="keywords" content="썸뷰, 썸네일, 조회수, 유튜브 썸네일, 썸네일 미리보기, 유튜브 클릭률, 썸네일 최적화, 유튜브 크리에이터, CTR 개선, 썸내일, 쌈네일" />
        <meta name="author" content="썸뷰" />
        <link rel="canonical" href="https://someview.kr" />

        {/* Open Graph (OG) 설정 */}
        <meta property="og:title" content="썸뷰 | 유튜브 썸네일 미리보기" />
        <meta property="og:description" content="유튜브 썸네일 미리보기로 클릭률을 높이세요! 썸뷰에서 썸네일을 미리 확인하고 최적화하세요." />
        <meta property="og:image" content="https://someview.kr/og-image.png" />
        <meta property="og:url" content="https://someview.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="썸뷰" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="썸뷰 | 유튜브 썸네일 미리보기" />
        <meta name="twitter:description" content="유튜브 썸네일 미리보기로 클릭률을 높이세요! 썸뷰에서 썸네일을 미리 확인하고 최적화하세요." />
        <meta name="twitter:image" content="https://someview.kr/og-image.png" />
        <meta name="twitter:creator" content="@someview" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Script id="beusable" strategy="beforeInteractive">
          {`
            (function(w, d, a){
                w.__beusablerumclient__ = {
                    load : function(src){
                        var b = d.createElement("script");
                        b.src = src; b.async=true; b.type = "text/javascript";
                        d.getElementsByTagName("head")[0].appendChild(b);
                    }
                };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
            })(window, document, "//rum.beusable.net/load/b250117e110247u814");
          `}
        </Script>
      </body>
    </html>
  );
}
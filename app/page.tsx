import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Philosophy from "@/components/Philosophy";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "株式会社ジャカコン",
    "url": "https://www.jacacon-k10.com",
    "logo": "https://www.jacacon-k10.com/logo.png", // TODO: 実際のロゴURLに変更
    "description": "コンテナハウス・トランクルームのパイオニア、株式会社ジャカコン。10,000件以上の実績。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "西川町28-1 202号",
      "addressLocality": "糸満市",
      "addressRegion": "沖縄県",
      "postalCode": "901-0304",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-98-860-2335",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    },
    "sameAs": [
      "https://www.instagram.com/jacacon_west/", // TODO: 実際のアカウントに変更
      "https://www.facebook.com/jacacon", // TODO: 実際のアカウントに変更
      "https://www.youtube.com/@jacacon" // TODO: 実際のアカウントに変更
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Philosophy />
      <Gallery />
      <Contact />
    </div>
  );
}

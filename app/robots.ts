import { MetadataRoute } from 'next';

// 静的エクスポート(output: 'export')のために必要
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // 本番URLに合わせて変更してください
  const baseUrl = 'https://jacaconjapanhp.github.io/jacacon-renewal';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

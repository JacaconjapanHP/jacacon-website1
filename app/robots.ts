import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.jacacon-k10.com'; // TODO: 本番ドメインに変更してください

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

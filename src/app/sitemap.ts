import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shaanvienterprises.co.in';

  const routes = [
    '/',
    '/about',
    '/abroad-studies',
    '/contact',
    '/insurance',
    '/interior-design',
    '/loans',
    '/private-finance',
    '/real-estate',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
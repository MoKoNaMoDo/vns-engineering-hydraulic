import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vns-engineering.com';

  const routes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/products/stainless-304',
    '/products/hydraulic-hose',
    '/products/stainless-steel-flexible-hose',
    '/products/ptfe-teflon-hose',
    '/products/r7-thermoplastic-hose',
    '/products/steam-hose',
    '/products/toyox',
    '/products/industrial-hose',
    '/products/tube-fittings',
    '/products/camlock-coupling',
    '/products/quick-coupling',
    '/products/hydraulic-ball-valve',
    '/products/industrial-pipe-service',
    '/services/fitting-and-adapter',
    '/services/hydraulic-hose',
    '/services/industrial-hose',
    '/services/metal-hose',
    '/services/ptfe-teflon-hose',
    '/services/steam-hose'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/products/') || route.startsWith('/services/') ? 0.8 : 0.6,
  }));
}

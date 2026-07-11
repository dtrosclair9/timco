import type { MetadataRoute } from 'next'
import { SERVICES, CITY_PAGES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl
  const now = new Date()

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceDetails: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const cityPages: MetadataRoute.Sitemap = CITY_PAGES.map((c) => ({
    url: `${base}/services/${c.service}-${c.city}-la`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...core, ...serviceDetails, ...cityPages]
}

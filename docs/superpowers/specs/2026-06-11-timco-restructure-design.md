# TIMCO Restructure — Design

**Date:** 2026-06-11
**Context:** Client (Tim Cailouet) finalized the service architecture. Remove all kennel/retriever content from this site — TIMCO is now a property + land management company. TIMCO Kennels becomes a separate site in a future build.

## Goal

Restructure the existing TIMCO build from a three-headed (property + land + kennels) site into a clean two-bucket service architecture:

- **Property Management** → Property Restoration · Residential Property Mgmt · Commercial Property Mgmt
- **Land Management** → Land Restoration · Recreational Land Mgmt

Each bucket is a hub page linking to its leaf service pages. All kennel/retriever content is removed.

## Decisions (locked)

- **Bucket structure:** Hub pages + leaf pages. Each bucket gets its own SEO page that introduces the category and links to its leaf services.
- **Restoration split:** By property type. Property Restoration = developed lots near structures (homes, businesses). Land Restoration = raw rural acreage.
- **Restoration vs Management distinction:** Restoration = one-time cleanup of a neglected/overgrown property. Residential & Commercial Mgmt = recurring scheduled lawn/grounds service. No keyword cannibalization.
- **City pages:** One high-ticket service per bucket gets Thibodaux + Houma pages → `property-restoration` (Property bucket) + `recreational-land-management` (Land bucket). Mirrors current setup.
- **Visual system:** Unchanged. Content/structure change only — keep current rugged-but-clean design, colors, layouts.
- **TIMCO Kennels standalone site:** Out of scope. Future separate build.

## Service model (`src/lib/site.ts`)

Drop the `division` field. Add `bucket: 'property' | 'land'` to every service.

New `SERVICES` (5 leaf):

| Slug | Bucket | Title | Scope |
|---|---|---|---|
| `property-restoration` *(rescope)* | property | Property Restoration | One-time overgrown cleanup on developed lots near structures — homes, businesses; brush clearing, debris/trash removal, site work around buildings |
| `residential-property-management` *(new)* | property | Residential Property Management | Recurring lawn/grounds care for homeowners — mowing, weed eating, chemical spraying, tree trimming, debris cleanup |
| `commercial-property-management` *(rename of `commercial-property-maintenance`)* | property | Commercial Property Management | Recurring grounds maintenance for offices, apartment complexes, HOAs |
| `land-restoration` *(new)* | land | Land Restoration | Raw rural acreage reclamation — large-scale clearing, drainage, site work, reclaiming neglected land |
| `recreational-land-management` *(keep)* | land | Recreational Land Management | Ongoing acreage care — cutting, spraying, prescribed burns, tree/brush clearing, shooting lanes, food plots |

New `BUCKETS` array (2 entries) for the hub pages:

```ts
export const BUCKETS = [
  { slug: 'property-management', title: 'Property Management', intro: '…', members: ['property-restoration', 'residential-property-management', 'commercial-property-management'] },
  { slug: 'land-management',     title: 'Land Management',     intro: '…', members: ['land-restoration', 'recreational-land-management'] },
] as const
```

`CITY_PAGES`: remove the `retriever-training` Thibodaux entry. Keep `property-restoration` ×2 and `recreational-land-management` ×2.

`NAV_LINKS`: two groups, each group header links to its hub page. Replace all `'division' in s` filters with `bucket === 'property'` / `bucket === 'land'`.

## Routes

**New hub pages:**
- `/services/property-management`
- `/services/land-management`

Each: H1, category intro paragraph, linked leaf-service cards, service-area callout, CTA, full metadata, `CollectionPage` + `ItemList` JSON-LD.

**New leaf pages** (full service-page treatment — H1 "[Service] in Thibodaux, LA", why-choose-us H3s with paragraphs, what's-included list, service-area callout, CTA, metadata, canonical, OG, `Service` JSON-LD with provider/areaServed/serviceType):
- `/services/residential-property-management`
- `/services/land-restoration`

**Rename directory:**
- `commercial-property-maintenance/` → `commercial-property-management/` (update slug, title, metadata, canonical, internal links, schema)

**Edit:**
- `property-restoration/` — rescope copy to developed lots near structures (so it doesn't overlap land-restoration)

**Delete:**
- `/services/retriever-training/`
- `/services/retriever-training-thibodaux-la/`

## Navigation (`NAV_LINKS` + `Header.tsx`)

```
Services ▾
── Property Management ──   (group header → /services/property-management)
   Property Restoration
   Residential Property Mgmt
   Commercial Property Mgmt
── Land Management ──        (group header → /services/land-management)
   Land Restoration
   Recreational Land Mgmt
```

`Header.tsx`: replace the `propertyServices` / `kennelServices` (`'division' in s`) split with `bucket`-based filtering; render the two buckets; make each group header a link to its hub. Same change in the mobile menu section.

## Kennel teardown (file-by-file)

| File | Change |
|---|---|
| `src/lib/site.ts` | `division`→`bucket`; remove retriever service + city page; new BUCKETS; tagline |
| `src/app/layout.tsx` | Title/description/keywords drop retriever/kennel/Labrador |
| `src/app/page.tsx` | Remove hero "Labrador retriever kennel" subline, services intro kennel clause, the entire "See the kennel" section + link, the division badge in the services grid; regroup services by bucket; metadata |
| `src/app/about/page.tsx` | Remove TIMCO Kennels paragraph; "three operations" → two; swap kennel HQ photos (`kennel-facility`, `about-brand-hat`, `about-trainer-dog`) for property/land shots; metadata |
| `src/app/contact/page.tsx` | Remove "For Kennel Inquiries" block; title/description |
| `src/app/services/page.tsx` | Remove kennel section; regroup into the two buckets with hub links; metadata |
| `src/app/services/recreational-land-management/page.tsx` | Replace "Tim runs TIMCO Kennels too…" trust paragraph with a land-experience credibility angle |
| `src/app/services/recreational-land-management-thibodaux-la/page.tsx` | Same kennel trust paragraph removal; remove retriever related-link |
| `src/app/services/recreational-land-management-houma-la/page.tsx` | Same kennel trust paragraph removal |
| `src/app/services/property-restoration-thibodaux-la/page.tsx` | Replace retriever related-link with a land-restoration / recreational link |
| `src/components/Footer.tsx` | Drop "Labrador retriever training" from blurb |
| `src/app/sitemap.ts` | Remove 2 retriever routes; rename commercial route; add 2 hub routes + 2 new leaf routes |

## Brand / SEO

- `SITE.tagline` → "Property & Land Management, Restoration & Maintenance in Thibodaux, LA" (or close variant).
- All page `<title>`s drop "Retriever Training".
- Home `LocalBusiness` schema `serviceType` / makesOffer list: drop retriever training, reflect the 5 new services.
- Every new page: canonical + full OG via the existing `BASE_URL`/`SITE.baseUrl` constant.
- City pages keep their 30%+ unique `localContext` + FAQs + FAQPage/Breadcrumb schema.

## Images

Kennel/Lab images become orphaned (left in `public/images/` but unreferenced — safe to leave or prune later). On-page slots filled from the brief slot map:

- **Residential Property Management (new):** `IMG_5549`, `IMG_5550`, `IMG_5554` (maintenance "after" shots), `IMG_5092` (weed-eating action)
- **Land Restoration (new):** restoration before/after pairs (`IMG_5052`/`5058`, `IMG_5053`/`5074`), `IMG_5055`/`5059` (Bobcat in brush/field)
- **Property Management hub:** `IMG_5770` (oak-shaded home), restoration after shot
- **Land Management hub:** `IMG_6379` (barn + horses), `IMG_6105` (lone pine pasture)
- **About:** swap owner-with-puppy / kennel HQ photos for `IMG_6306` (equipment shed) and property/land work shots
- Home hero (`hero-restoration.jpg`) unchanged.

## Out of scope

- TIMCO Kennels standalone site (future build).
- Visual redesign — design system stays as-is.
- New photography — work from the existing brief slot map.

## Success criteria

- No kennel/retriever/Labrador string anywhere in `src/` (verified by grep).
- 5 leaf service pages + 2 hub pages live; all reachable from nav and the services hub.
- One-per-bucket city pages intact (property-restoration + recreational-land-management, Thibodaux + Houma).
- `sitemap.ts` lists every live page and no dead routes; no orphan pages.
- Each page: one H1, clean heading hierarchy, canonical, OG, correct JSON-LD.
- `next build` passes clean.

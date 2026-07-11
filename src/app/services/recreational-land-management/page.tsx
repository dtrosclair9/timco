import type { Metadata } from 'next'
import { SITE, ogImage } from '@/lib/site'
import {
  ServiceHero,
  IncludedList,
  WhyGrid,
  PhotoStrip,
  ServiceAreaBand,
  ServiceCta,
  buildServiceSchema,
} from '@/components/ServiceFrame'

const SLUG = 'recreational-land-management'

export const metadata: Metadata = {
  title: 'Recreational Land Management & Bush Hogging, Thibodaux',
  description:
    'Bush hogging, land clearing, drainage, and canal & right-of-way clearing for hunting ground and rural acreage across Thibodaux and the Bayou Region. Insured.',
  openGraph: {
    title: 'Recreational Land Management & Bush Hogging in Thibodaux, LA | TIMCO',
    description: 'Bush hogging, land clearing, drainage, prescribed burns, and canal/right-of-way clearing for rural acreage.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
    images: [ogImage],
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Recreational Land Management',
  description:
    'Recreational land management in the Bayou Region of Louisiana — reclaiming overgrown acreage, then cutting, spraying, drainage, prescribed burns, and tree clearing for hunting ground and rural landowners.',
})

export default function RecreationalLandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Recreational Land Management"
        title={
          <>
            Recreational land<br />
            <span className="text-accent">management</span> in {SITE.address.city}.
          </>
        }
        intro={
          <>
            You bought the 60 acres. Now somebody has to bush-hog it, spray it, clear the
            trees, torch the brush, and open the canal back up so it actually drains.
            That&apos;s the work TIMCO does for recreational landowners across the Bayou
            Region — by boat or on foot, boots and chainsaws.
          </>
        }
        image="/images/land-canal-cypress.jpg"
        imageAlt="A cypress-lined canal cleared and opened back up by TIMCO in the Louisiana Bayou Region"
      />

      <IncludedList
        label="Restore & Manage"
        heading="Reclaim it, then keep it open."
        description="A lot of rural acreage starts with a heavy reclaim — clearing land that's grown over for years — and moves to ongoing care: the cutting and spraying that keeps fields open, the prescribed burns that reset the cycle, and the drainage and tree work that prevents next year's problems."
        items={[
          'Heavy clearing &amp; land reclamation',
          'Canal, bayou &amp; right-of-way clearing',
          'Ditch &amp; culvert drainage cleanup',
          'Bush-hogging &amp; field cutting',
          'Chemical application (weed kill, fence lines, food plots)',
          'Brush, scrub &amp; small tree clearing',
          'Selective tree work &amp; deadfall removal',
          'Prescribed brush burns &amp; pile burns',
          'Access road grading &amp; food plot prep',
        ]}
        image="/images/land-ditch-clearing.jpg"
        imageAlt="TIMCO crew clearing a ditch bank with equipment to open up drainage in the Bayou Region"
      />

      <WhyGrid
        label="Why TIMCO"
        heading="Why hunters and landowners use us."
        items={[
          {
            title: "Hunter's perspective",
            body: "Tim hunts and works rural ground himself — he gets why your land matters. We manage it like somebody who actually uses recreational land, not just a vendor running a mower.",
          },
          {
            title: 'Prescribed burns, handled safely',
            body: 'Pile burns and controlled brush burns on appropriate days, with the right equipment on site. Resets pasture and reduces wildfire load without the headache of doing it yourself.',
          },
          {
            title: 'Recurring or one-time',
            body: 'Set us up for a routine season schedule, or call us in for the big once-a-year reset. Either way we know what your land looked like last visit.',
          },
          {
            title: 'Right equipment for rural',
            body: "Bobcat, zero-turn, trailers, sprayer, and the trucks to get them onto remote ground. We don't show up undersized for the job.",
          },
          {
            title: 'Canals, bayous & right-of-ways',
            body: "Opening up canals, bayous, servitudes, and right-of-ways that grew over and stopped draining is work Tim takes pride in. We pull every bit of debris — by boat or on foot, boots and chainsaws — until a ditch that was unnavigable runs patent and drains again.",
          },
          {
            title: 'Local presence',
            body: `Based at ${SITE.address.street} in ${SITE.address.city}. We're close enough to handle quick callouts across ${SITE.serviceArea.parishes.join(', ')} without inflated mobilization charges.`,
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="The look of land that's being managed."
        photos={[
          { src: '/images/land-field-road.jpg', alt: 'Lush managed field with a grass turn-row in the Bayou Region' },
          { src: '/images/land-burn-field.jpg', alt: 'TIMCO controlled brush burn in an open field' },
          { src: '/images/land-pine.jpg', alt: 'Lone pine in a mowed field on managed land' },
          { src: '/images/land-burn-night.jpg', alt: 'Campfire at dusk among cypress on managed acreage' },
          { src: '/images/land-marsh.jpg', alt: 'Flooded marsh and treeline on recreational ground in Louisiana' },
          { src: '/images/land-deer-stand.jpg', alt: 'Wooded canal with footbridge and feeders on recreational land' },
          { src: '/images/land-bayou-dock-1.jpg', alt: 'Concrete dock and piling on a calm bayou serving recreational land' },
          { src: '/images/land-field-cleared.jpg', alt: 'A freshly cleared field after TIMCO land reclamation' },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Recreational Land Management in Thibodaux' },
          { href: `/services/${SLUG}-houma-la`, label: 'Recreational Land Management in Houma' },
          { href: `/services/${SLUG}-raceland-la`, label: 'Recreational Land Management in Raceland' },
        ]}
      />

      <ServiceCta
        heading="Acres that need looked after?"
        body="Tell us where the land is, the rough acreage, and what state it's in. Tim will set up a walkthrough and put a number on a one-time reclaim, a seasonal plan, or both."
      />
    </>
  )
}

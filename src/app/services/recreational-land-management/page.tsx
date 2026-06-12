import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
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
  title: 'Recreational Land Management in Thibodaux, LA – Clear, Cut, Drain, Burn',
  description:
    'TIMCO reclaims and manages recreational acreage in Lafourche, Terrebonne, and Assumption — clearing overgrown land, then cutting, spraying, drainage, prescribed burns, and tree work. Built for hunting ground and rural landowners.',
  openGraph: {
    title: 'Recreational Land Management in Thibodaux, LA | TIMCO',
    description: 'Reclaim overgrown acreage, then keep it open — clearing, cutting, drainage, prescribed burns, tree work.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
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
        label="Land Management"
        title={
          <>
            Recreational land<br />
            <span className="text-accent">management</span> in {SITE.address.city}.
          </>
        }
        intro={
          <>
            You bought the 60 acres. Now somebody has to cut it, spray it, run the
            drainage, clear the trees, and torch the brush before it gets away from
            you again. That's the work TIMCO does for recreational landowners
            across the Bayou Region.
          </>
        }
        image="/images/land-hero.jpg"
        imageAlt="Dogs running past an old tin-roof barn on managed recreational acreage in Louisiana"
      />

      <IncludedList
        label="Restore & Manage"
        heading="Reclaim it, then keep it open."
        description="A lot of rural acreage starts with a heavy reclaim — clearing land that's grown over for years — and moves to ongoing care: the cutting and spraying that keeps fields open, the prescribed burns that reset the cycle, and the drainage and tree work that prevents next year's problems."
        items={[
          'Heavy clearing &amp; land reclamation',
          'Bush-hogging &amp; field cutting',
          'Chemical application (weed kill, fence lines, food plots)',
          'Brush, scrub &amp; small tree clearing',
          'Selective tree work &amp; deadfall removal',
          'Drainage cleanup &amp; reshaping',
          'Prescribed brush burns &amp; pile burns',
          'Access road grading &amp; food plot prep',
        ]}
        image="/images/land-burn-day.jpg"
        imageAlt="TIMCO controlled brush pile burn for recreational land management in Louisiana"
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
            title: 'Prescribed burns done right',
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
            title: 'Drainage we understand',
            body: 'South Louisiana land without drainage is a swamp by August. We re-cut ditches, clear culverts, and shape sheet flow so the ground actually drains.',
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
          { src: '/images/land-hero.jpg', alt: 'Dogs running past an old barn on managed recreational acreage' },
          { src: '/images/land-burn-day.jpg', alt: 'Controlled brush pile burn by a pond for land management' },
          { src: '/images/land-burn-night.jpg', alt: 'Campfire at dusk among cypress on managed acreage' },
          { src: '/images/land-deer-stand.jpg', alt: 'Wooded canal with footbridge and feeders on recreational land' },
          { src: '/images/land-cypress.jpg', alt: 'Cypress trees along a bayou bank on recreational land' },
          { src: '/images/land-pine.jpg', alt: 'Lone pine in a mowed field on managed land' },
          { src: '/images/land-bayou-dock-1.jpg', alt: 'Concrete dock and piling on a calm bayou serving recreational land' },
          { src: '/images/land-bayou-dock-2.jpg', alt: 'Wooden dock and jon boat on a wooded bayou' },
          { src: '/images/land-camp-dock.jpg', alt: 'Jon boat at a covered camp dock on a canal' },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Recreational Land Management in Thibodaux' },
        ]}
      />

      <ServiceCta
        heading="Acres that need looked after?"
        body="Tell us where the land is, the rough acreage, and what state it's in. Tim will set up a walkthrough and put a number on a one-time reclaim, a seasonal plan, or both."
      />
    </>
  )
}

import type { Metadata } from 'next'
import { SITE, ogImage } from '@/lib/site'
import {
  ServiceHero,
  IncludedList,
  WhyGrid,
  PhotoStrip,
  ServiceAreaBand,
  ServiceCta,
  ServiceFaqs,
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

      {/* TODO(owner): confirm specifics (price/acre ranges, typical timeline) to strengthen */}
      <ServiceFaqs
        heading="Recreational land management, answered."
        faqs={[
          {
            q: 'When is the best time to clear and bush-hog recreational land in South Louisiana?',
            a: 'Late fall through early spring is usually the window for the heaviest work. Cooler, drier months firm up the ground so equipment can reach back acreage without tearing it up, growth has died back so land clearing and bush hogging go faster, and it lines up ahead of hunting season. That said, the Bayou Region stays green most of the year, so ongoing cutting and spraying happen right through the warm months too. The real answer depends on how wet your ground is and how grown-over it has gotten — call us for a free walkthrough and we will tell you the best time for your specific tract.',
          },
          {
            q: 'Can you reach land that only has boat or limited access?',
            a: 'Often, yes. A lot of recreational and hunting ground across Lafourche, Terrebonne, and Assumption parishes sits behind a canal, a servitude, or a stretch with no real road, and reclaiming canals, bayous, and right-of-ways is work TIMCO takes pride in — by boat or on foot, boots and chainsaws. Access is the biggest factor in what a job takes, so the honest step is a walkthrough: send us the location and how you currently get to it, and we will tell you what is workable before quoting anything.',
          },
          {
            q: 'What is the difference between bush hogging and forestry mulching?',
            a: 'Bush hogging cuts down grass, weeds, and light brush with a rotary mower to keep open ground open, and it is the right tool for fields, food plots, and turn-rows. Forestry mulching grinds heavier brush, saplings, and small trees into mulch that stays on the ground as ground cover, so it is what you want when acreage has grown over into thick scrub and you need to reclaim it. Many overgrown tracts need heavier clearing first, then bush hogging to maintain. On a walkthrough we will tell you which your land actually needs so you are not paying for more machine than the job calls for.',
          },
          {
            q: 'How much does it cost to clear recreational acreage per acre?',
            a: 'It depends on the acreage, how thick the brush and trees are, how the land drains, and how easy it is to get equipment in — a clean field mows for far less than dense, wet, boat-access scrub. Because those variables swing the number so much, we do not quote sight-unseen. Call us for a free estimate and Tim will walk the land, then put an honest number on a one-time reclaim, a seasonal plan, or both.',
          },
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

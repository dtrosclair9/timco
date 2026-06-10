import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Retriever Training',
  serviceSlug: 'retriever-training',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/retriever-training',
  hero: {
    image: '/images/retriever-hero-boat.jpg',
    imageAlt: 'Two Labrador retrievers in a flat-bottom boat — TIMCO Kennels, Thibodaux, LA',
  },
  intro:
    "TIMCO Kennels is a 10-run Labrador retriever board-and-train at our 619 Hwy 308 headquarters in Thibodaux. Programs run 3 to 9 months — from basic obedience through advanced retriever (hand signals, duck blind etiquette). One dedicated trainer on every dog, start to finish.",
  highlights: [
    'Basic obedience (sit, stay, here, place)',
    'Basic retriever (force fetch, marks, delivery)',
    'Advanced retriever (hand signals, blinds)',
    'Duck blind etiquette & steady to shot',
    '10 dedicated kennel runs',
    'Daily field & water work nearby',
    '3 to 9 month programs',
    'One dedicated trainer per dog',
  ],
  localContext: [
    {
      heading: 'Local drop-off & visits',
      body: 'Thibodaux-area owners can drop off and pick up by appointment at the Hwy 308 facility — no shipping a dog three states away. Stay close enough to visit during the program if you want.',
    },
    {
      heading: 'Built for Louisiana duck hunting',
      body: 'TIMCO Kennels trains Labs for the kind of hunting Lafourche and Terrebonne hunters actually do — flooded blinds, marsh boats, multi-dog setups. Training environment matches the season.',
    },
    {
      heading: 'Working operation',
      body: "The kennel runs at the same HQ as the property crew — somebody is on site every day. Your dog isn't sitting in a back-yard hobby setup. Daily field work on rural ground nearby.",
    },
    {
      heading: 'One dedicated trainer',
      body: "Your Lab learns from one consistent voice and standard from day one to graduation. No revolving handlers, no mixed signals, no dog-walker-of-the-week.",
    },
  ],
  faqs: [
    {
      q: 'What age can my Lab start a TIMCO program?',
      a: 'Most pups start basic obedience around 5 to 7 months. Force fetch and retriever foundation typically begins around 8 to 10 months once obedience is solid. Older dogs (1 to 4 years) can absolutely start — we tailor the program to the dog.',
    },
    {
      q: 'How long is a typical program?',
      a: 'Three to nine months depending on the dog and the goal. Basic obedience is shorter; full advanced retriever with steady-to-shot and blind work takes longer. We give an honest assessment after evaluating your dog.',
    },
    {
      q: 'Can I visit my Lab during the program?',
      a: 'Yes — by appointment. We encourage Thibodaux-area owners to come learn the cues and handling so the dog stays trained after pickup. Training a dog and not the handler is a recipe for regression.',
    },
    {
      q: "Do you train dogs other than Labs?",
      a: 'TIMCO Kennels is set up for Labrador retrievers and gun-dog work specifically. We can talk through other retriever breeds case-by-case, but we don\'t do protection, agility, or pet-only obedience training.',
    },
    {
      q: 'Do you breed or sell Labrador puppies?',
      a: "No — TIMCO Kennels is strictly board-and-train. We don't breed or sell pups. If you're sourcing a dog, we can talk through what to look for, but the litter has to come from a breeder, not us.",
    },
    {
      q: 'What\'s included in the program cost?',
      a: 'Kennel boarding, daily training and field work, basic feeding, kennel maintenance — all in. Vet emergencies and food brand preferences are handled case-by-case. Pricing depends on program length and stage; ask in your inquiry.',
    },
  ],
  photos: [
    { src: '/images/kennel-hero.jpg', alt: 'TIMCO Kennels Labrador retrievers in kennel runs in Thibodaux' },
    { src: '/images/kennel-pack-action.jpg', alt: 'Pack of Labradors playing in TIMCO Kennels yard, Thibodaux LA' },
    { src: '/images/retriever-hero-boat.jpg', alt: 'Two Labrador retrievers in flat-bottom boat through Louisiana swamp' },
    { src: '/images/retriever-sunset-1.jpg', alt: 'Three Labradors running toward camera at sunset, Bayou Region' },
    { src: '/images/retriever-sunset-2.jpg', alt: 'Three Labradors spread across field at sunset' },
    { src: '/images/kennel-three-labs.jpg', alt: 'Three Labradors — white, yellow, golden — at TIMCO Kennels' },
    { src: '/images/kennel-white-lab-bench.jpg', alt: 'White Labrador on bench by TIMCO sign in Thibodaux' },
    { src: '/images/kennel-yellow-lab-hallway.jpg', alt: 'Yellow Lab in TIMCO Kennels training hallway' },
    { src: '/images/kennel-black-lab-alert.jpg', alt: 'Black Lab sitting alert with kennel runs behind in Thibodaux' },
    { src: '/images/retriever-puppy-kennel.jpg', alt: 'Golden retriever puppy at TIMCO Kennels' },
    { src: '/images/kennel-facility.jpg', alt: 'TIMCO Kennels facility exterior at the Hwy 308 headquarters' },
    { src: '/images/retriever-puppy-sweet.jpg', alt: 'Golden puppy looking sweetly at camera at TIMCO Kennels' },
  ],
  relatedCityPages: [
    { href: '/services/property-restoration-thibodaux-la', label: 'Property Restoration in Thibodaux' },
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Land Management in Thibodaux' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}

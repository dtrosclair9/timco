import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `${SITE.legalName}'s accessibility statement — our commitment to WCAG 2.2 AA, the steps we take, and how to report an accessibility barrier on this land management website.`,
  openGraph: {
    title: `Accessibility Statement | ${SITE.name}`,
    description: `How ${SITE.legalName} works to keep this website usable for everyone, and how to report an accessibility issue.`,
    url: `${SITE.baseUrl}/accessibility`,
    images: [ogImage],
  },
  alternates: { canonical: `${SITE.baseUrl}/accessibility` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 11, 2026'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Accessibility Statement | ${SITE.legalName}`,
  url: `${SITE.baseUrl}/accessibility`,
  description: `The accessibility statement for ${SITE.legalName}, a land management company in ${SITE.address.city}, ${SITE.address.region}. Describes the site's conformance target (WCAG 2.2 Level AA) and how to report an accessibility barrier.`,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.baseUrl,
  },
  about: {
    '@type': 'LocalBusiness',
    name: SITE.legalName,
    url: SITE.baseUrl,
    telephone: SITE.phoneRaw,
    email: SITE.email,
  },
}

export default function AccessibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white">
        <div className="container-wide py-16">
          <p className="section-label text-accent-light">Legal</p>
          <h1 className="heading-xl text-white mt-3">Accessibility Statement</h1>
          <p className="text-gray-300 mt-3 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow prose-tim">
          <Body>
            <p className="lede">
              {SITE.legalName} ("TIMCO," "we," "our") is committed to making this website usable for everyone,
              including people who rely on assistive technologies such as screen readers, screen magnifiers,
              voice control, and keyboard-only navigation.
            </p>

            <H2>1. Conformance Target</H2>
            <p>
              We aim to conform to the{' '}
              <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
              </a>
              . These guidelines explain how to make web content more accessible to people with a wide range
              of disabilities. Level AA is the standard most widely referenced for legal and regulatory
              compliance, including the Americans with Disabilities Act (ADA).
            </p>

            <H2>2. What We Do</H2>
            <p>To work toward that target, this site is built with:</p>
            <ul>
              <li>Color contrast that meets the WCAG AA thresholds for text and interactive elements</li>
              <li>A visible keyboard-focus indicator on every link, button, and form field</li>
              <li>A &ldquo;Skip to main content&rdquo; link for keyboard and screen-reader users</li>
              <li>Semantic headings, landmarks, and labels on every form field</li>
              <li>Descriptive alternative text on meaningful images, with decorative graphics hidden from assistive technology</li>
              <li>A layout that reflows and stays usable at 390px, 810px, and 1440px widths and when text is enlarged</li>
            </ul>

            <H2>3. Measures &amp; Testing</H2>
            <p>
              We test this site with automated accessibility tooling (axe-core against WCAG 2.0/2.1/2.2 A and
              AA rules) and manual keyboard checks. Accessibility is an ongoing effort — as we add pages and
              features, we re-test and correct issues we find.
            </p>

            <H2>4. Known Limitations</H2>
            <p>
              Despite our efforts, some content may not yet be fully accessible. Third-party components — such
              as the embedded contact form provider — are partly outside our direct control. If you hit a
              barrier anywhere on the site, please tell us using the contact details below and we will work to
              fix it.
            </p>

            <H2>5. Reporting a Barrier</H2>
            <p>
              If you have trouble accessing any part of this website, or you need information from it in a
              different format, contact us and we will help directly and use your feedback to improve the site:
            </p>
            <p>
              <strong>{SITE.legalName}</strong><br />
              {SITE.address.street}<br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postal}<br />
              Phone:{' '}
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
              <br />
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              We aim to respond to accessibility feedback within a few business days.
            </p>

            <p className="mt-10 text-sm">
              <Link href="/" className="text-accent-dark hover:text-primary font-semibold uppercase tracking-mega text-xs">
                ← Back to home
              </Link>
            </p>
          </Body>
        </div>
      </section>
    </>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-tight mt-12 mb-4">{children}</h2>
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed [&_a]:text-accent-dark [&_a]:font-semibold [&_a:hover]:text-primary [&_strong]:text-primary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-700">
      {children}
    </div>
  )
}

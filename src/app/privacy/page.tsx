import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${SITE.legalName}'s privacy policy. What we collect, how we use it, and the third parties involved when you contact us.`,
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'June 8, 2026'

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container-wide py-16">
          <p className="section-label">Legal</p>
          <h1 className="heading-xl text-white mt-3">Privacy Policy</h1>
          <p className="text-gray-300 mt-3 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow prose-tim">
          <Body>
            <p className="lede">
              This page explains what information {SITE.legalName} ("TIMCO," "we," "our") collects through this website, how we use it, and the third-party services involved. We do not sell your information.
            </p>

            <H2>1. Information We Collect</H2>
            <p>
              We only collect the information you choose to send us through the contact form on this website. That includes:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your phone number (optional)</li>
              <li>Your email address</li>
              <li>The service you're interested in (optional)</li>
              <li>Any message you write to us about your project</li>
            </ul>
            <p>
              Our web host also automatically records standard technical information — IP address, browser type, pages visited, and timestamps — the same kind of logs every website on the internet keeps for security and performance.
            </p>

            <H2>2. How We Use Your Information</H2>
            <p>
              We use the information you send us strictly to respond to your inquiry — emailing you back, calling you back, or scheduling a site visit. We do not share, rent, or sell your information to third parties. We do not use it for marketing other than replying to the conversation you started.
            </p>

            <H2>3. Third-Party Services</H2>
            <p>This website uses the following third-party services. Each handles a specific function and has its own privacy practices.</p>
            <ul>
              <li>
                <strong>Formspree</strong> — processes contact form submissions and delivers them to our email.{' '}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree Privacy Policy</a>.
              </li>
              <li>
                <strong>Vercel</strong> — hosts this website and may log standard request data for security and uptime.{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
              </li>
              <li>
                <strong>Google Fonts</strong> — serves the typefaces used on this site.{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
              </li>
            </ul>

            <H2>4. Cookies & Tracking</H2>
            <p>
              This website does not set advertising or analytics cookies. The only browser storage used is what's technically required to load the page (fonts, etc.). If we add analytics in the future, we'll update this policy and note the change above.
            </p>

            <H2>5. Children's Privacy</H2>
            <p>
              This website is intended for adults. We do not knowingly collect information from anyone under 13. If you believe a child has submitted information through this site, contact us and we'll delete it.
            </p>

            <H2>6. Your Rights</H2>
            <p>
              You can ask us at any time to confirm what information we have on you, correct it, or delete it. Send the request to the contact info below and we'll handle it.
            </p>

            <H2>7. Contact</H2>
            <p>
              For privacy questions or any of the requests above, reach us at:
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

            <H2>8. Changes to This Policy</H2>
            <p>
              We may update this policy as the site evolves. The "Last updated" date at the top of this page will reflect any changes. Continued use of the site after a change means you accept the updated policy.
            </p>

            <p className="mt-10 text-sm">
              <Link href="/" className="text-accent hover:text-accent-dark font-semibold uppercase tracking-mega text-xs">
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
    <div className="space-y-4 text-gray-700 leading-relaxed [&_a]:text-accent [&_a]:font-semibold [&_a:hover]:text-accent-dark [&_strong]:text-primary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-700">
      {children}
    </div>
  )
}

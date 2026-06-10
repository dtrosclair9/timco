import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact TIMCO – Property Restoration & Retriever Training in Thibodaux, LA',
  description: `Contact TIMCO for a free quote on property restoration, land management, commercial maintenance, or Labrador retriever training in Thibodaux, LA. Call ${SITE.phoneDisplay} or send a message.`,
  openGraph: {
    title: `Contact ${SITE.name} | Thibodaux, LA`,
    description: `Request a free quote from TIMCO. Call ${SITE.phoneDisplay} or fill out the contact form.`,
    url: `${SITE.baseUrl}/contact`,
  },
  alternates: { canonical: `${SITE.baseUrl}/contact` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE.legalName}`,
  url: `${SITE.baseUrl}/contact`,
  description: `Contact page for ${SITE.legalName}, a property restoration and retriever training company in ${SITE.address.city}, ${SITE.address.region}.`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE.legalName,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white" aria-label="Contact page hero">
        <div className="container-wide py-20">
          <p className="section-label">Get in Touch</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            Tell {SITE.ownerShort} what you're dealing with.
          </h1>
          <p className="lede text-gray-300 mt-5 max-w-2xl">
            Property that needs cleared, acreage that needs managed, a Lab that needs trained — send the details and Tim will follow up within a business day with a quote.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="contact-grid-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <aside className="lg:col-span-5 space-y-8">
              <div>
                <h2 id="contact-grid-heading" className="heading-md text-primary mb-6">
                  Reach Out Directly
                </h2>
                <div className="space-y-5">
                  <ContactRow label="Phone">
                    <a href={`tel:${SITE.phoneRaw}`} className="text-lg font-display font-semibold text-primary hover:text-accent transition-colors">
                      {SITE.phoneDisplay}
                    </a>
                  </ContactRow>
                  <ContactRow label="Email">
                    <a href={`mailto:${SITE.email}`} className="text-primary hover:text-accent transition-colors break-all">
                      {SITE.email}
                    </a>
                  </ContactRow>
                  <ContactRow label="Headquarters">
                    <p className="text-primary">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                    </p>
                  </ContactRow>
                  <ContactRow label="Hours">
                    <p className="text-primary">7:00 AM – 5:00 PM<br />7 days a week</p>
                  </ContactRow>
                </div>
              </div>

              <div className="bg-primary text-white p-8">
                <p className="section-label text-accent">Free Walkthroughs</p>
                <p className="heading-sm text-white mt-2">
                  No charge to look at it.
                </p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  Tim drives out, walks the property with you, and gives an honest number. No pressure, no upsell on installs we don't do.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-5">
                <p className="text-xs font-bold uppercase tracking-mega text-gray-500">For Kennel Inquiries</p>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  Asking about board-and-train availability? Mention it in the message and Tim'll loop in current openings (10 runs, programs run 3–9 months).
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 p-8 md:p-10 border border-gray-100">
                <h2 className="heading-md text-primary mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-1 h-12 bg-accent shrink-0" aria-hidden="true" />
      <div>
        <p className="text-xs font-bold uppercase tracking-mega text-gray-500 mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

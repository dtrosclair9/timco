'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SERVICES, SITE } from '@/lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140)
  }

  const isServicesActive = pathname.startsWith('/services')

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      } border-b border-gray-100`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label={`${SITE.name} – Home`}>
            <Image
              src="/images/logo-timco.png"
              alt={`${SITE.name}`}
              width={520}
              height={90}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <NavLink href="/" label="Home" pathname={pathname} />

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  isServicesActive ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full pt-3 w-[28rem]"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <div className="bg-white shadow-xl border border-gray-100 grid grid-cols-1 divide-y divide-gray-100">
                    <div className="p-3 flex flex-col">
                      {SERVICES.map((s) => (
                        <DropLink key={s.slug} href={`/services/${s.slug}`} title={s.title} sub={s.short} />
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <Link
                        href="/services"
                        className="text-accent text-xs font-bold uppercase tracking-mega hover:text-accent-dark"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/about" label="About" pathname={pathname} />
            <NavLink href="/contact" label="Contact" pathname={pathname} />

            <a
              href={`tel:${SITE.phoneRaw}`}
              className="btn-accent text-xs ml-3"
              aria-label={`Call TIMCO at ${SITE.phoneDisplay}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-gray-100 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col">
              <MobileLink href="/" label="Home" pathname={pathname} />
              <div className="px-2 py-3">
                <Link
                  href="/services"
                  className="block text-xs font-bold uppercase tracking-mega text-gray-400 hover:text-accent mb-2"
                >
                  Services
                </Link>
                <div className="flex flex-col gap-1 ml-1">
                  {SERVICES.map((s) => (
                    <MobileLink
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      label={s.title}
                      pathname={pathname}
                      compact
                    />
                  ))}
                </div>
              </div>
              <MobileLink href="/about" label="About" pathname={pathname} />
              <MobileLink href="/contact" label="Contact" pathname={pathname} />

              <a
                href={`tel:${SITE.phoneRaw}`}
                className="btn-accent text-xs mt-4 mx-2"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
        active ? 'text-accent' : 'text-primary hover:text-accent'
      }`}
    >
      {label}
    </Link>
  )
}

function MobileLink({
  href,
  label,
  pathname,
  compact = false,
}: {
  href: string
  label: string
  pathname: string
  compact?: boolean
}) {
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-2 ${compact ? 'py-1.5 text-sm' : 'py-3 text-base font-semibold uppercase tracking-wider'} ${
        active ? 'text-accent' : 'text-primary hover:text-accent'
      } transition-colors`}
    >
      {label}
    </Link>
  )
}

function DropLink({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <Link href={href} className="px-3 py-2.5 hover:bg-gray-50 transition-colors group" role="menuitem">
      <p className="text-sm font-semibold text-primary group-hover:text-accent uppercase tracking-wide">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
    </Link>
  )
}

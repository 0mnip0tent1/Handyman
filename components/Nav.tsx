'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#services',     label: 'Services' },
    { href: '#why-us',       label: 'Why Us' },
    { href: '#testimonials', label: 'Reviews' },
  ]

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[4vw] h-[68px]
        bg-cream/[0.88] backdrop-blur-[14px] border-b border-edge
        transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_24px_rgba(61,43,31,0.08)]' : ''}`}
    >
      {/* Logo */}
      <Link href="/" aria-label="Ridgeline Handyman Co. – Home" className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-forest rounded-[6px] grid place-items-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sand" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 4H9v3H6v5h3v8h6v-8h3V7h-3V4z"/>
          </svg>
        </div>
        <div className="font-display text-[1.1rem] font-bold text-forest leading-tight">
          Ridgeline
          <span className="block font-mono text-[0.6rem] tracking-[0.14em] uppercase text-muted font-normal">
            Handyman Co.
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none" role="list">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm font-medium text-bark relative pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-0 after:h-[1.5px] after:bg-sienna
                after:transition-[width] after:duration-300
                hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-sienna text-cream px-5 py-2 rounded text-sm font-semibold
              transition-all duration-200 hover:bg-forest hover:-translate-y-px"
          >
            Get a Quote
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1.5"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className="block w-[22px] h-0.5 bg-bark rounded-sm transition-transform duration-300" />
        <span className="block w-[22px] h-0.5 bg-bark rounded-sm transition-opacity duration-300" />
        <span className="block w-[22px] h-0.5 bg-bark rounded-sm transition-transform duration-300" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 bg-cream border-b border-edge
          shadow-[0_8px_32px_rgba(61,43,31,0.1)] z-[99] flex flex-col gap-5 px-[4vw] py-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-bark"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sienna text-cream px-5 py-2 rounded text-sm font-semibold text-center
              transition-all duration-200 hover:bg-forest"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}

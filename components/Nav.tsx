'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#why',      label: 'Why WJ' },
    { href: '#reviews',  label: 'Reviews' },
    { href: '#contact',  label: 'Contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-[70px]
        border-b"
      style={{
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(61,220,92,0.15)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-11 h-11 bg-lime rounded-full flex items-center justify-center font-display text-[18px] text-jet font-black tracking-wide flex-shrink-0">
          WJ
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display text-[20px] text-white tracking-wider">WJ Construction Team LLC</span>
          <span className="text-[10px] text-lime tracking-[2px] uppercase font-semibold">Built Right, Every Time</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-silver text-[13px] tracking-[1.5px] uppercase font-semibold no-underline transition-colors duration-200 hover:text-lime"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-lime text-jet px-[22px] py-2.5 rounded-sm text-[12px] font-bold tracking-[1.5px] uppercase no-underline transition-all duration-200 hover:bg-lime2 hover:-translate-y-px"
          >
            Get a Free Quote
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1.5"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className="block w-[22px] h-0.5 bg-silver rounded-sm" />
        <span className="block w-[22px] h-0.5 bg-silver rounded-sm" />
        <span className="block w-[22px] h-0.5 bg-silver rounded-sm" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[70px] left-0 right-0 z-[99] flex flex-col gap-5 px-6 py-6 border-b"
          style={{ background: 'rgba(10,10,10,0.97)', borderColor: 'rgba(61,220,92,0.15)' }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-silver text-[13px] tracking-[1.5px] uppercase font-semibold no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-lime text-jet px-5 py-2.5 rounded-sm text-[12px] font-bold tracking-[1.5px] uppercase text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}

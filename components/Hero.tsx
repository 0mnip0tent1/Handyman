'use client'
import { useEffect, useRef } from 'react'

const trustBadges = [
  {
    label: 'Licensed & Insured',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  },
  {
    label: '4.9★ · 200+ Reviews',
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  },
  {
    label: 'Same-Week Availability',
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  },
]

export default function Hero() {
  const eyebrow  = useRef<HTMLDivElement>(null)
  const headline = useRef<HTMLHeadingElement>(null)
  const sub      = useRef<HTMLParagraphElement>(null)
  const actions  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [eyebrow, headline, sub, actions]
    els.forEach((ref, i) => {
      if (!ref.current) return
      const el = ref.current
      el.style.transitionDelay = `${i * 0.1}s`
      setTimeout(() => el.classList.add('visible'), 60)
    })
  }, [])

  return (
    <section
      className="relative min-h-svh bg-forest flex flex-col justify-end px-[4vw] pb-[7vh] overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(196,98,45,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(61,43,31,0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative bg text */}
      <div
        className="absolute top-1/2 -right-[2%] -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: 'clamp(120px, 20vw, 260px)', color: 'rgba(255,255,255,0.035)', letterSpacing: '-0.04em' }}
        aria-hidden="true"
      >
        Craft
      </div>

      {/* Trust badges – desktop only */}
      <div
        className="hidden md:flex absolute top-[88px] right-[4vw] flex-col gap-2.5 items-end"
        aria-hidden="true"
      >
        {trustBadges.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3.5 py-2 rounded-md border"
            style={{
              background: 'rgba(245,239,224,0.07)',
              borderColor: 'rgba(245,239,224,0.12)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px] text-sienna"
            >
              {icon}
            </svg>
            <span className="text-[0.78rem] font-medium whitespace-nowrap" style={{ color: 'rgba(245,239,224,0.8)' }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div ref={eyebrow} className="reveal flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-sienna" />
          <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase" style={{ color: 'rgba(245,239,224,0.65)' }}>
            Serving the Dallas Fort Worth Area
          </span>
        </div>

        <h1
          ref={headline}
          id="hero-headline"
          className="reveal font-display font-black text-sand italic mb-7"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '16ch' }}
        >
          Good Work,<br />
          <em className="not-italic text-sienna">Done Right.</em>
        </h1>

        <p
          ref={sub}
          className="reveal font-light mb-10 leading-[1.7]"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'rgba(245,239,224,0.72)', maxWidth: '42ch' }}
        >
          From a leaky faucet to a full kitchen renovation – we show up on time, do it properly,
          and leave your home better than we found it. No runaround. No surprises.
        </p>

        <div ref={actions} className="reveal flex items-center gap-5 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-sienna text-cream px-8 py-3.5 rounded text-[0.95rem] font-semibold
              transition-all duration-200 hover:bg-[#d9703a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,98,45,0.35)]
              [&:hover_svg]:translate-x-0.5"
          >
            Get a Free Quote
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-1.5 text-sand text-[0.95rem] font-medium opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            (555) 123-4567
          </a>
        </div>
      </div>

      {/* Scroll indicator – desktop only */}
      <div
        className="hidden md:flex absolute bottom-8 right-[4vw] flex-col items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.15em] uppercase"
        style={{ color: 'rgba(245,239,224,0.4)' }}
        aria-hidden="true"
      >
        <div className="w-px h-12 animate-scroll-pulse" style={{ background: 'linear-gradient(to bottom, rgba(245,239,224,0.4), transparent)' }} />
        <span>Scroll</span>
      </div>
    </section>
  )
}

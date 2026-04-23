'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    refs.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.animationDelay = `${0.1 + i * 0.15}s`
      ref.current.classList.add('animate-fade-up')
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-end px-6 md:px-[60px] pb-20 pt-[70px] overflow-hidden bg-jet"
      aria-labelledby="hero-headline"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 80% 40%, rgba(61,220,92,0.07) 0%, transparent 70%),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(61,220,92,0.015) 40px,
              rgba(61,220,92,0.015) 41px
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Geometric right panel – desktop only */}
      <div
        className="hidden md:block absolute top-0 right-0 bottom-0 w-[48%] z-[1]"
        style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
          borderLeft: '2px solid rgba(61,220,92,0.2)',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center pl-16">
          <div
            className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center"
            style={{ border: '2px solid rgba(61,220,92,0.3)' }}
          >
            <div
              className="absolute inset-[-12px] rounded-full"
              style={{ border: '1px solid rgba(61,220,92,0.12)' }}
            />
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px]">
              <line x1="20" y1="80" x2="70" y2="30" stroke="#3ddc5c" strokeWidth="5" strokeLinecap="round"/>
              <rect x="60" y="16" width="26" height="18" rx="3" stroke="#3ddc5c" strokeWidth="4" transform="rotate(45 73 25)"/>
              <line x1="75" y1="25" x2="85" y2="15" stroke="#3ddc5c" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="28" cy="72" r="10" stroke="#3ddc5c" strokeWidth="4"/>
              <line x1="35" y1="65" x2="78" y2="22" stroke="#3ddc5c" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-[2] max-w-[600px]">
        <div ref={refs[0]} className="opacity-0 flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-lime" />
          <span className="text-[11px] tracking-[3px] uppercase text-lime font-semibold">
            Serving the Dallas Fort Worth Area
          </span>
        </div>

        <h1
          ref={refs[1] as React.RefObject<HTMLHeadingElement>}
          id="hero-headline"
          className="opacity-0 font-display text-white tracking-widest mb-3"
          style={{ fontSize: 'clamp(64px, 8vw, 110px)', lineHeight: 0.9 }}
        >
          Quality<br />Craftsmanship
          <em className="not-italic text-lime block">
            &amp; Creative<br />Solutions
          </em>
        </h1>

        <p
          ref={refs[2] as React.RefObject<HTMLParagraphElement>}
          className="opacity-0 text-[16px] font-light leading-[1.7] my-6 max-w-[460px]"
          style={{ color: '#aaa' }}
        >
          From custom woodworking to full-scale renovations – we show up on time, build it right,
          and leave your space better than we found it. No runaround. No surprises.
        </p>

        <div ref={refs[3]} className="opacity-0 flex items-center gap-6 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-lime text-jet px-9 py-4 rounded-sm
              text-[13px] font-bold tracking-[2px] uppercase no-underline
              transition-all duration-200 hover:bg-lime2 hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(61,220,92,0.25)]
              [&:hover_svg]:translate-x-1"
          >
            Get a Free Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="tel:8177335323"
            className="flex items-center gap-2.5 text-silver text-[17px] font-semibold no-underline transition-colors duration-200 hover:text-lime"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ border: '1px solid rgba(61,220,92,0.3)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.28 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63a16 16 0 0 0 5.46 5.46l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            (817) 733-5323
          </a>
        </div>
      </div>
    </section>
  )
}

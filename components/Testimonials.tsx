import Reveal from './Reveal'

const testimonials = [
  {
    text: '"Called on a Monday, they were here Wednesday. Fixed a stubborn door, patched two holes in the drywall, and repaired a light switch – all in one visit. Honestly impressed. Will be my first call from now on."',
    service: 'Home Repairs',
    initials: 'MK',
    name: 'Mike K.',
    location: 'Fort Worth, TX',
  },
  {
    text: '"Had custom shelving built in our home office. The quote was fair, the work was clean, and they actually suggested a smarter design than what I\'d planned. Looks like it came with the house."',
    service: 'Woodworking',
    initials: 'SL',
    name: 'Sarah L.',
    location: 'Dallas, TX',
  },
  {
    text: '"The price I was quoted was the price on the invoice. Not a penny more. That alone makes them stand out. The bathroom fixture replacement looks great and hasn\'t leaked since. Reliable people."',
    service: 'Plumbing',
    initials: 'DT',
    name: 'David T.',
    location: 'Arlington, TX',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-[100px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
      {/* Decorative number */}
      <div
        className="absolute right-[60px] top-[60px] font-display leading-none pointer-events-none select-none"
        style={{ fontSize: '160px', color: 'rgba(255,255,255,0.03)', letterSpacing: '-4px' }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="w-[min(1200px,100%)] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-lime" />
          <span className="text-[10px] tracking-[3px] uppercase text-lime font-bold">From Real Customers</span>
        </div>

        <Reveal as="h2" className="font-display text-white tracking-wider mb-14" style={{ fontSize: 'clamp(42px,5vw,72px)', lineHeight: 0.95 }}>
          Don&apos;t take our word <em className="italic text-lime">for it.</em>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {testimonials.map(({ text, service, initials, name, location }, i) => (
            <Reveal key={name} delay={i * 0.1} className="bg-cardbg px-8 py-9">
              <div className="text-lime text-[16px] tracking-[2px] mb-5" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="text-[14px] font-light leading-[1.75] mb-6 italic" style={{ color: '#aaa' }}>{text}</p>
              <span
                className="inline-block text-[10px] tracking-[2px] uppercase text-lime font-bold px-2.5 py-1 mb-5 rounded-sm"
                style={{ border: '1px solid rgba(61,220,92,0.3)' }}
              >
                {service}
              </span>
              <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <div className="flex items-center gap-3">
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[12px] font-bold text-lime flex-shrink-0"
                  style={{ background: 'rgba(61,220,92,0.15)' }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <strong className="block text-[14px] text-white font-semibold">{name}</strong>
                  <span className="text-[12px]" style={{ color: '#555' }}>{location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

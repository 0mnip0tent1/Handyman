import Reveal from './Reveal'

const testimonials = [
  {
    text: "Called on a Monday, they were here Wednesday. Fixed a stubborn door, patched two holes in the drywall, and repaired a light switch – all in one visit. Honestly impressed. Will be my first call from now on.",
    service: 'Home Repairs',
    initials: 'MK',
    name: 'Mike K.',
    location: 'Oakdale, CA',
  },
  {
    text: "Had custom shelving built in our home office. The quote was fair, the work was clean, and they actually suggested a smarter design than what I'd planned. Looks like it came with the house.",
    service: 'Carpentry',
    initials: 'SL',
    name: 'Sarah L.',
    location: 'Modesto, CA',
  },
  {
    text: "The price I was quoted was the price on the invoice. Not a penny more. That alone makes them stand out. The bathroom fixture replacement looks great and hasn't leaked since. Reliable people.",
    service: 'Plumbing',
    initials: 'DT',
    name: 'David T.',
    location: 'Turlock, CA',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-sand py-28 px-[4vw] overflow-hidden" aria-labelledby="testimonials-title">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <span
          className="absolute top-12 right-[4vw] font-display font-black leading-none pointer-events-none select-none"
          style={{ fontSize: 'clamp(5rem,10vw,9rem)', color: 'rgba(61,43,31,0.06)' }}
          aria-hidden="true"
        >
          03
        </span>

        <Reveal className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-sienna" aria-hidden="true" />
          <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted">From Real Customers</span>
        </Reveal>

        <Reveal delay={0.1} as="h2" id="testimonials-title" className="font-display font-bold text-forest mb-16" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1 }}>
          Don&apos;t take our word <em className="text-sienna">for it.</em>
        </Reveal>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))' }}
        >
          {testimonials.map(({ text, service, initials, name, location }, i) => (
            <Reveal
              key={name}
              delay={i * 0.1}
              className="relative bg-cream border-[1.5px] border-edge rounded-[10px] p-8 flex flex-col gap-5
                hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(61,43,31,0.1)] transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 font-display text-[5rem] leading-[0.7] text-sienna opacity-25 pointer-events-none" aria-hidden="true">"</div>

              {/* Stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                <span className="text-sienna text-sm" aria-hidden="true">★★★★★</span>
              </div>

              <p className="text-[0.95rem] text-bark leading-[1.75] flex-1">{text}</p>

              <span className="inline-block px-2.5 py-1 rounded bg-sienna/10 text-sienna text-[0.72rem] font-semibold tracking-[0.05em] uppercase w-fit mt-auto">
                {service}
              </span>

              <div className="flex items-center gap-3.5 pt-4 border-t border-edge">
                <div className="w-10 h-10 rounded-full bg-forest grid place-items-center font-display text-[1.1rem] font-bold text-sand flex-shrink-0" aria-hidden="true">
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-[0.9rem] text-forest">{name}</div>
                  <div className="text-[0.78rem] text-muted font-mono">{location}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

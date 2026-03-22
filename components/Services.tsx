import Reveal from './Reveal'

const services = [
  {
    name: 'Home Repairs',
    desc: 'Doors that stick, drywall dings, leaky faucets, broken fixtures – the everyday stuff handled properly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: 'Carpentry & Trim',
    desc: 'Custom shelving, baseboards, crown molding, cabinet installs. Built to fit, built to last.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    name: 'Painting & Finishing',
    desc: 'Interior walls, trim, ceilings, and touch-ups. Clean prep, clean lines, no splatter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'Plumbing & Fixtures',
    desc: 'Faucet swaps, toilet repairs, shower installs, minor pipe fixes. We stop the drip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93A10 10 0 0 0 19.07 19.07"/>
      </svg>
    ),
  },
  {
    name: 'Electrical Basics',
    desc: 'Outlets, light fixtures, ceiling fans, and switches. Safe, code-compliant work every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: 'Assembly & Installs',
    desc: 'Furniture assembly, TV mounting, appliance hookups, smart home devices. Box to done.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5EFE0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-28 px-[4vw]" aria-labelledby="services-title">
      <div className="w-[min(1200px,92vw)] mx-auto">
        {/* Decorative number */}
        <span
          className="absolute top-12 right-[4vw] font-display font-black leading-none pointer-events-none select-none text-edge"
          style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
          aria-hidden="true"
        >
          01
        </span>

        {/* Header */}
        <div className="grid grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-sienna" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted">What We Do</span>
            </div>
            <Reveal as="h2" className="font-display font-bold text-forest" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, maxWidth: '18ch' }} id="services-title">
              No job too small,<br /><em className="text-sienna">no shortcut taken.</em>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="font-light text-muted leading-[1.7] max-w-[36ch]">
            We handle the fixes, upgrades, and projects that have been on your list.
            Done with care, done once.
          </Reveal>
        </div>

        {/* Grid */}
        <div
          className="grid gap-[1.5px] bg-edge border-[1.5px] border-edge rounded-[10px] overflow-hidden"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))' }}
        >
          {services.map(({ name, desc, icon }, i) => (
            <Reveal
              key={name}
              delay={[0, 0.1, 0.2, 0.3, 0.1, 0.2][i]}
              className="group bg-cream px-8 py-9 flex flex-col gap-4 hover:bg-sand transition-colors duration-300 cursor-default"
            >
              <div className="w-11 h-11 bg-forest rounded-lg grid place-items-center mb-1" aria-hidden="true">
                {icon}
              </div>
              <div className="font-display text-[1.3rem] font-bold text-forest leading-tight">{name}</div>
              <p className="text-[0.9rem] text-muted leading-[1.65] flex-1">{desc}</p>
              <div className="text-sienna text-xl opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 self-start" aria-hidden="true">→</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

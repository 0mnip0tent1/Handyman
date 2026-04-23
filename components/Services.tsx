import Reveal from './Reveal'

const services = [
  {
    name: 'Home Repairs',
    desc: 'Doors that stick, drywall dings, leaky faucets, broken fixtures – the everyday stuff handled properly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: 'Custom Woodworking',
    desc: 'Custom shelving, baseboards, crown molding, cabinet installs, and unique builds. Built to fit, built to last.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'Plumbing & Fixtures',
    desc: 'Faucet swaps, toilet repairs, shower installs, minor pipe fixes. We stop the drip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    name: 'Electrical Basics',
    desc: 'Outlets, light fixtures, ceiling fans, and switches. Safe, code-compliant work every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    name: 'Assembly & Installs',
    desc: 'Furniture assembly, TV mounting, appliance hookups, smart home devices, and unique outdoor structures. Box to done.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 1 2-2"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-[100px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
      {/* Decorative number */}
      <div
        className="absolute right-[60px] top-[60px] font-display leading-none pointer-events-none select-none"
        style={{ fontSize: '160px', color: 'rgba(255,255,255,0.03)', letterSpacing: '-4px' }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="w-[min(1200px,100%)] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-lime" />
          <span className="text-[10px] tracking-[3px] uppercase text-lime font-bold">What We Do</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-16">
          <Reveal as="h2" className="font-display text-white tracking-wider" style={{ fontSize: 'clamp(42px,5vw,72px)', lineHeight: 0.95 }}>
            No job too small,<br /><em className="italic text-lime">no shortcut taken.</em>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[340px] font-light text-[15px] pt-2" style={{ color: '#888' }}>
            We handle the fixes, upgrades, and projects that have been on your list. Done with care, done once.
          </Reveal>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {services.map(({ name, desc, icon }) => (
            <Reveal
              key={name}
              className="group relative bg-cardbg px-9 py-10 transition-colors duration-300 hover:bg-[#1c1c1c] overflow-hidden cursor-default"
            >
              {/* Arrow decoration */}
              <div
                className="absolute bottom-8 right-8 text-xl transition-all duration-200"
                style={{ color: 'rgba(61,220,92,0.3)' }}
                aria-hidden="true"
              >
                ↗
              </div>
              <div
                className="w-12 h-12 rounded-md mb-5 flex items-center justify-center"
                style={{ background: 'rgba(61,220,92,0.12)' }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3 tracking-[0.3px]">{name}</h3>
              <p className="text-[14px] font-light leading-[1.65]" style={{ color: '#777' }}>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

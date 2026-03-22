import Reveal from './Reveal'

const reasons = [
  {
    num: '1',
    title: 'We show up. On time.',
    desc: 'No two-hour arrival windows or forgotten appointments. We respect your schedule and stick to it.',
  },
  {
    num: '2',
    title: 'Transparent pricing, always',
    desc: 'You get a clear quote before we start. No hidden fees, no surprise invoices. What we say is what you pay.',
  },
  {
    num: '3',
    title: 'Licensed, bonded & insured',
    desc: 'Your home is protected. We carry full liability insurance and are properly licensed for every type of work.',
  },
  {
    num: '4',
    title: 'We clean up after ourselves',
    desc: "We leave your space tidy when the job's done. Tools picked up, dust swept, garbage bagged. Every time.",
  },
]

const stats = [
  { num: '12', sup: '+', label: 'Years in Business' },
  { num: '800', sup: '+', label: 'Jobs Completed' },
  { num: '4.9', sup: '★', label: 'Average Rating' },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-forest py-28 px-[4vw] overflow-hidden"
      aria-labelledby="why-us-title"
      style={{
        backgroundImage: 'radial-gradient(ellipse 70% 70% at 90% 20%, rgba(196,98,45,0.12) 0%, transparent 60%)',
      }}
    >
      <div className="w-[min(1200px,92vw)] mx-auto">
        {/* Decorative number */}
        <span
          className="absolute top-12 right-[4vw] font-display font-black leading-none pointer-events-none select-none"
          style={{ fontSize: 'clamp(5rem,10vw,9rem)', color: 'rgba(245,239,224,0.06)' }}
          aria-hidden="true"
        >
          02
        </span>

        <Reveal className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-sienna" aria-hidden="true" />
          <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase" style={{ color: 'rgba(245,239,224,0.5)' }}>
            Why Ridgeline
          </span>
        </Reveal>

        <Reveal delay={0.1} as="h2" id="why-us-title" className="font-display font-bold text-sand mb-0" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, maxWidth: '18ch' }}>
          We work like we&apos;d<br /><em className="text-sienna">work on our own home.</em>
        </Reveal>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12 mt-16">
          {reasons.map(({ num, title, desc }, i) => (
            <Reveal key={num} delay={i * 0.1} className="flex gap-5 items-start">
              <div className="font-display text-5xl font-black text-sienna leading-none opacity-70 flex-shrink-0 min-w-[2.5rem]" aria-hidden="true">
                {num}
              </div>
              <div>
                <div className="font-display text-[1.2rem] font-bold text-sand mb-2">{title}</div>
                <p className="text-[0.9rem] leading-[1.7] font-light" style={{ color: 'rgba(245,239,224,0.6)' }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats strip */}
        <Reveal delay={0.2} className="mt-20">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-lg border"
            style={{ background: 'rgba(245,239,224,0.12)', borderColor: 'rgba(245,239,224,0.12)' }}
          >
            {stats.map(({ num, sup, label }) => (
              <div key={label} className="text-center py-8 px-6" style={{ background: 'rgba(245,239,224,0.04)' }}>
                <div className="font-display font-black text-sand leading-none mb-1.5" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
                  {num}<sup className="text-[0.5em] align-super text-sienna">{sup}</sup>
                </div>
                <div className="text-[0.8rem] tracking-[0.1em] uppercase font-mono" style={{ color: 'rgba(245,239,224,0.5)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

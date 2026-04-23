import Reveal from './Reveal'

const reasons = [
  { num: '01', title: 'We Show Up. On Time.', desc: 'No two-hour arrival windows or forgotten appointments. We respect your schedule and stick to it.' },
  { num: '02', title: 'Transparent Pricing, Always', desc: 'You get a clear quote before we start. No hidden fees, no surprise invoices. What we say is what you pay.' },
  { num: '03', title: 'Licensed, Bonded & Insured', desc: 'Your home is protected. We carry full liability insurance and are properly licensed for every type of work.' },
  { num: '04', title: 'We Clean Up After Ourselves', desc: "We leave your space tidy when the job's done. Tools picked up, dust swept, garbage bagged. Every time." },
]

const stats = [
  { num: '12', sup: '+', label: 'Years in Business' },
  { num: '800', sup: '+', label: 'Jobs Completed' },
  { num: '4.9', sup: '★', label: 'Average Rating' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-darkbg py-[100px] px-6 md:px-[60px]">
      {/* Decorative number */}
      <div
        className="absolute right-[60px] top-[60px] font-display leading-none pointer-events-none select-none"
        style={{ fontSize: '160px', color: 'rgba(255,255,255,0.03)', letterSpacing: '-4px' }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="w-[min(1200px,100%)] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-lime" />
          <span className="text-[10px] tracking-[3px] uppercase text-lime font-bold">Why WJ Construction</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left */}
          <div>
            <Reveal as="h2" className="font-display text-white tracking-wider mb-6" style={{ fontSize: 'clamp(42px,5vw,72px)', lineHeight: 0.95 }}>
              We work like we&apos;d<br /><em className="italic text-lime">work on our own home.</em>
            </Reveal>
            <Reveal delay={0.1} className="font-light text-[15px] leading-[1.7]" style={{ color: '#777' }}>
              Every job gets the same attention whether it&apos;s a $50 repair or a full renovation. That&apos;s how we&apos;ve stayed in business and kept our reputation for over a decade.
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2} className="flex gap-8 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {stats.map(({ num, sup, label }) => (
                <div key={label}>
                  <div className="font-display text-lime leading-none tracking-wider" style={{ fontSize: '52px' }}>
                    {num}<sup className="text-[24px]">{sup}</sup>
                  </div>
                  <div className="text-[11px] tracking-[2px] uppercase font-semibold mt-1" style={{ color: '#666' }}>{label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right – 2x2 grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {reasons.map(({ num, title, desc }, i) => (
              <Reveal
                key={num}
                delay={i * 0.1}
                className="bg-cardbg px-7 py-9 transition-colors duration-200 hover:bg-[#1c1c1c]"
              >
                <div className="font-display text-[42px] leading-none mb-4" style={{ color: 'rgba(61,220,92,0.2)' }}>{num}</div>
                <h3 className="text-[16px] font-bold text-white mb-2.5">{title}</h3>
                <p className="text-[13px] font-light leading-[1.65]" style={{ color: '#666' }}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

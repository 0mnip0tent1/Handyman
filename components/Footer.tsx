export default function Footer() {
  const navLinks = [
    { href: '#services',     label: 'Services' },
    { href: '#why-us',       label: 'Why Ridgeline' },
    { href: '#testimonials', label: 'Customer Reviews' },
    { href: '#contact',      label: 'Get a Quote' },
  ]

  const linkCls = "text-[0.875rem] transition-colors duration-200 hover:text-sand"
  const mutedLink = { color: 'rgba(245,239,224,0.55)' }

  return (
    <footer className="bg-bark px-[4vw] pt-14 pb-8" role="contentinfo" style={{ color: 'rgba(245,239,224,0.65)' }}>
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div
          className="grid gap-12 pb-12 mb-8 border-b"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderColor: 'rgba(245,239,224,0.1)',
          }}
        >
          {/* Brand */}
          <div>
            <div className="font-display text-[1.2rem] font-bold text-sand mb-3">Ridgeline Handyman Co.</div>
            <p className="text-[0.85rem] leading-[1.6] mb-5">
              Honest work, fair prices, and a job done right the first time.
              Serving the Dallas Fort Worth Area since 2012.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <div className="font-mono text-[0.8rem] font-semibold text-sand tracking-[0.1em] uppercase mb-4">Navigate</div>
            <ul className="flex flex-col gap-2.5 list-none" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={linkCls} style={mutedLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div className="font-mono text-[0.8rem] font-semibold text-sand tracking-[0.1em] uppercase mb-4">Contact</div>
            <ul className="flex flex-col gap-2.5 list-none" role="list">
              <li><a href="tel:+15551234567" className={linkCls} style={mutedLink}>(555) 123-4567</a></li>
              <li><a href="mailto:hello@ridgelinehandyman.com" className={linkCls} style={mutedLink}>hello@ridgelinehandyman.com</a></li>
              <li className="text-[0.8rem] mt-2" style={{ color: 'rgba(245,239,224,0.35)' }}>
                Mon–Fri 7am–6pm<br />Sat 8am–3pm
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="font-mono text-[0.78rem]" style={{ color: 'rgba(245,239,224,0.35)' }}>
            © 2025 Ridgeline Handyman Co. All rights reserved.
          </p>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded font-mono text-[0.72rem]"
            style={{
              background: 'rgba(245,239,224,0.07)',
              border: '1px solid rgba(245,239,224,0.1)',
              color: 'rgba(245,239,224,0.45)',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3" style={{ fill: '#C4622D', opacity: 0.6 }} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Licensed &amp; Insured
          </div>
        </div>
      </div>
    </footer>
  )
}

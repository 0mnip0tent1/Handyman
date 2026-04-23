export default function Footer() {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#why',      label: 'Why WJ' },
    { href: '#reviews',  label: 'Reviews' },
    { href: '#contact',  label: 'Get a Quote' },
  ]

  return (
    <footer
      className="px-6 md:px-[60px] pt-12 pb-6 flex flex-wrap justify-between items-center gap-6"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="flex flex-col gap-1.5">
        <div className="font-display text-[22px] text-white tracking-wider">WJ Construction Team LLC</div>
        <div className="text-[12px] font-light" style={{ color: '#444' }}>Quality Craftsmanship &amp; Creative Solutions · Dallas Fort Worth Area</div>
      </div>

      <div className="flex gap-6 flex-wrap">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-[12px] tracking-wider uppercase font-semibold no-underline transition-colors duration-200 hover:text-lime"
            style={{ color: '#555' }}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-lime font-bold">
        <div className="w-2 h-2 rounded-full bg-lime" />
        Licensed &amp; Insured
      </div>

      <div
        className="w-full text-[12px] font-light pt-6"
        style={{ color: '#333', borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        © 2025 WJ Construction Team LLC. All rights reserved. &nbsp;·&nbsp; (817) 733-5323 &nbsp;·&nbsp; WJconstuctionteamllc@gmail.com &nbsp;·&nbsp; Mon–Fri 7am–6pm &nbsp; Sat 8am–3pm
      </div>
    </footer>
  )
}

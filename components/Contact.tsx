'use client'
import { useState } from 'react'
import Reveal from './Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const promises = [
  'Response within a few hours on weekdays',
  'Free quote – no obligation, no sales pitch',
  'Same-week scheduling usually available',
]

const serviceOptions = [
  'Home Repairs',
  'Carpentry & Trim',
  'Painting & Finishing',
  'Plumbing & Fixtures',
  'Electrical Basics',
  'Assembly & Installation',
  'Other / Not Sure',
]

export default function Contact() {
  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [email,   setEmail]   = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [status,  setStatus]  = useState<Status>('idle')

  const inputCls = `w-full px-4 py-3 bg-cream border-[1.5px] border-edge rounded-md
    font-body text-[0.9rem] text-bark outline-none appearance-none
    focus:border-sienna focus:shadow-[0_0_0_3px_rgba(196,98,45,0.12)]
    transition-[border-color,box-shadow] duration-200`

  async function handleSubmit() {
    if (!name || !email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, service, message }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-cream py-28 px-[4vw]" aria-labelledby="contact-title">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <span
          className="absolute top-12 right-[4vw] font-display font-black leading-none pointer-events-none select-none text-edge"
          style={{ fontSize: 'clamp(5rem,10vw,9rem)' }}
          aria-hidden="true"
        >
          04
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – info */}
          <div>
            <Reveal className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-sienna" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted">Get in Touch</span>
            </Reveal>

            <Reveal delay={0.1} as="h2" id="contact-title" className="font-display font-bold text-forest" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1 }}>
              Ready to cross it<br /><em className="text-sienna">off the list?</em>
            </Reveal>

            <Reveal delay={0.2} className="text-muted font-light leading-[1.7] mt-4" style={{ maxWidth: '42ch' }}>
              Tell us what you need. We&apos;ll get back to you within a few hours with a straight answer and a fair quote. No pressure, no runaround.
            </Reveal>

            <Reveal delay={0.3} className="mt-10 flex flex-col gap-4">
              {promises.map(p => (
                <div key={p} className="flex items-start gap-3 text-[0.9rem] text-bark">
                  <div className="w-1.5 h-1.5 rounded-full bg-sienna flex-shrink-0 mt-[0.45rem]" aria-hidden="true" />
                  {p}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.4} className="mt-10 p-6 bg-sand border-[1.5px] border-edge rounded-lg flex items-center gap-4">
              <div className="w-11 h-11 bg-forest rounded-full grid place-items-center flex-shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sand" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[0.7rem] text-muted tracking-[0.12em] uppercase mb-0.5">Call or text anytime</div>
                <a href="tel:+15551234567" className="font-display text-[1.4rem] font-bold text-forest hover:text-sienna transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right – form */}
          <Reveal delay={0.2} className="bg-sand border-[1.5px] border-edge rounded-xl p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-forest rounded-full grid place-items-center mx-auto mb-5" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-sand stroke-2 fill-none">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="font-display text-[1.5rem] font-bold text-forest mb-2">Got it – thanks!</div>
                <p className="text-[0.9rem] text-muted leading-[1.65]">
                  We&apos;ll review your request and get back to you<br />within a few hours with a quote.
                </p>
              </div>
            ) : (
              <>
                <div className="font-display text-[1.4rem] font-bold text-forest mb-1">Request a Free Quote</div>
                <p className="text-[0.875rem] text-muted mb-8">Takes about 60 seconds. We&apos;ll handle the rest.</p>

                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-[0.8rem] font-semibold text-bark tracking-[0.03em]">Your Name</label>
                    <input id="form-name" type="text" placeholder="Jane Smith" autoComplete="name" value={name} onChange={e => setName(e.target.value)} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-phone" className="text-[0.8rem] font-semibold text-bark tracking-[0.03em]">Phone Number</label>
                    <input id="form-phone" type="tel" placeholder="(555) 000-0000" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="form-email" className="text-[0.8rem] font-semibold text-bark tracking-[0.03em]">Email Address</label>
                  <input id="form-email" type="email" placeholder="jane@email.com" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} />
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="form-service" className="text-[0.8rem] font-semibold text-bark tracking-[0.03em]">Type of Work</label>
                  <select id="form-service" value={service} onChange={e => setService(e.target.value)} className={inputCls}>
                    <option value="" disabled>Select a service…</option>
                    {serviceOptions.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="form-message" className="text-[0.8rem] font-semibold text-bark tracking-[0.03em]">Tell Us About the Job</label>
                  <textarea
                    id="form-message"
                    placeholder="Describe what needs doing – as much or as little as you know…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={`${inputCls} resize-y min-h-[100px]`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[0.8rem] text-red-600 mb-3">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 bg-sienna text-cream font-semibold text-[0.95rem] rounded-md
                    transition-all duration-200 hover:bg-forest hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(44,62,45,0.25)]
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send My Request'}
                  {status !== 'loading' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>

                <p className="text-center text-[0.75rem] text-muted mt-3 font-mono">No spam. Just a real person getting back to you.</p>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

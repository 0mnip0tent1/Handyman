'use client'
import { useState } from 'react'
import Reveal from './Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions = [
  'Home Repairs',
  'Custom Woodworking & Carpentry',
  'Painting & Finishing',
  'Plumbing & Fixtures',
  'Electrical Basics',
  'Assembly & Installs',
  'Outdoor Structures',
  'Other',
]

const perks = [
  'Response within a few hours on weekdays',
  'Free quote – no obligation, no sales pitch',
  'Same-week scheduling usually available',
]

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [phone,     setPhone]     = useState('')
  const [email,     setEmail]     = useState('')
  const [service,   setService]   = useState('')
  const [message,   setMessage]   = useState('')
  const [status,    setStatus]    = useState<Status>('idle')

  const inputCls = `w-full px-4 py-3.5 font-body text-[14px] font-light text-white outline-none
    transition-[border-color] duration-200 rounded-sm`
  const inputStyle = {
    background: '#181818',
    border: '1px solid rgba(255,255,255,0.07)',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName || !email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone, email, service, message }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-jet py-[100px] px-6 md:px-[60px] overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse 50% 80% at 70% 50%, rgba(61,220,92,0.05) 0%, transparent 70%)',
      }}
    >
      {/* Decorative number */}
      <div
        className="absolute right-[60px] top-[60px] font-display leading-none pointer-events-none select-none"
        style={{ fontSize: '160px', color: 'rgba(255,255,255,0.03)', letterSpacing: '-4px' }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="w-[min(1200px,100%)] mx-auto relative z-[1]">
        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-lime" />
          <span className="text-[10px] tracking-[3px] uppercase text-lime font-bold">Get in Touch</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <Reveal as="h2" className="font-display text-white tracking-wider mb-7" style={{ fontSize: 'clamp(42px,5vw,72px)', lineHeight: 0.95 }}>
              Ready to cross it<br /><em className="italic text-lime">off the list?</em>
            </Reveal>
            <Reveal delay={0.1} className="font-light text-[15px] leading-[1.7] mb-8" style={{ color: '#777' }}>
              Tell us what you need. We&apos;ll get back to you within a few hours with a straight answer and a fair quote. No pressure, no runaround.
            </Reveal>

            <Reveal delay={0.2} className="flex flex-col gap-3.5 mb-10">
              {perks.map(p => (
                <div key={p} className="flex items-center gap-3 text-[15px] font-light" style={{ color: '#aaa' }}>
                  <span className="text-lime font-bold text-[13px] flex-shrink-0">✓</span>
                  {p}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="flex items-center gap-4 px-7 py-5 rounded-sm"
                style={{ background: '#181818', border: '1px solid rgba(61,220,92,0.2)' }}
              >
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(61,220,92,0.12)' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3ddc5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.28 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63a16 16 0 0 0 5.46 5.46l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase font-semibold mb-0.5" style={{ color: '#555' }}>Call or Text Anytime</div>
                  <a href="tel:8177335323" className="text-[22px] font-bold text-white no-underline hover:text-lime transition-colors">(817) 733-5323</a>
                </div>
              </div>
              <p className="mt-4 text-[13px]" style={{ color: '#555' }}>
                Or email us:{' '}
                <a href="mailto:quotes@wjconstructionteam.com" className="text-lime no-underline hover:underline">
                  quotes@wjconstructionteam.com
                </a>
              </p>
            </Reveal>
          </div>

          {/* Right – form */}
          <Reveal delay={0.2}>
            {status === 'success' ? (
              <div
                className="text-center px-9 py-12 rounded-sm"
                style={{ background: '#181818', border: '1px solid rgba(61,220,92,0.3)' }}
              >
                <div className="w-14 h-14 rounded-full bg-lime flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display text-[32px] text-white tracking-wider mb-2.5">Got it – thanks!</h3>
                <p className="text-[14px] font-light" style={{ color: '#666' }}>We&apos;ll review your request and get back to you within a few hours with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>First Name</label>
                    <input type="text" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} className={inputCls} style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>Last Name</label>
                    <input type="text" placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)} className={inputCls} style={inputStyle} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>Phone Number</label>
                  <input type="tel" placeholder="(817) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} className={inputCls} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>Service Needed</label>
                  <select value={service} onChange={e => setService(e.target.value)} className={inputCls} style={{ ...inputStyle, color: service ? 'white' : '#555' }}>
                    <option value="" style={{ background: '#1a1a1a' }}>Select a service…</option>
                    {serviceOptions.map(s => <option key={s} style={{ background: '#1a1a1a' }}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase font-semibold" style={{ color: '#555' }}>Describe Your Project</label>
                  <textarea
                    placeholder="Tell us what you need help with…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    className={`${inputCls} resize-y`}
                    style={inputStyle}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[13px] text-red-400">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="self-start flex items-center gap-2 bg-lime text-jet px-9 py-4 rounded-sm
                    text-[13px] font-bold tracking-[2px] uppercase
                    transition-all duration-200 hover:bg-lime2 hover:-translate-y-0.5
                    hover:shadow-[0_8px_30px_rgba(61,220,92,0.25)]
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Request'}
                  {status !== 'loading' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

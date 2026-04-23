import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, service, message } = await req.json()

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const fullName = `${firstName} ${lastName}`.trim()

    const html = `
      <h2>New Quote Request – WJ Construction Team LLC</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px;font-weight:600;background:#f5f5f5;width:140px;">Name</td><td style="padding:8px;">${fullName}</td></tr>
        <tr><td style="padding:8px;font-weight:600;background:#f5f5f5;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:600;background:#f5f5f5;">Email</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:600;background:#f5f5f5;">Service</td><td style="padding:8px;">${service || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:600;background:#f5f5f5;vertical-align:top;">Project Details</td><td style="padding:8px;white-space:pre-wrap;">${message || '—'}</td></tr>
      </table>
    `

    const { error } = await resend.emails.send({
      from:    process.env.CONTACT_FROM_EMAIL ?? 'WJ Construction <onboarding@resend.dev>',
      to:      process.env.CONTACT_TO_EMAIL   ?? 'WJconstuctionteamllc@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${fullName}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}

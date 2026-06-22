import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're booked — Nucli AI",
  robots: { index: false, follow: false },
}

const F = 'Inter, system-ui, sans-serif'

export default function ThankYouPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#fff', fontFamily: F }}>
      {/* Nav */}
      <nav style={{
        padding: '0 32px', height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/logonuclipng.jpg" alt="Nucli AI" width={26} height={26}
            style={{ objectFit: 'contain', filter: 'invert(1)', opacity: 0.9 }} />
          <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', color: '#fff' }}>
            Nucli AI
          </span>
        </div>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '80px 32px 120px' }}>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          color: '#ffffff',
          marginBottom: 40,
        }}>
          You're booked. Here's what happens next.
        </h1>

        {/* Email confirmation */}
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 56 }}>
          Check your email — your confirmation and calendar invite are on their way from Calendly.
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 48 }} />

        {/* What to expect */}
        <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
          What to expect from the call
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { time: 'First 5 minutes', desc: 'I ask you about your studio and how you currently handle your inbox.' },
            { time: 'Next 5 minutes', desc: 'I show you the live system handling a real conversation.' },
            { time: 'Last 5 minutes', desc: 'We talk about whether it makes sense for your studio and what it would cost.' },
          ].map((item, i, arr) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: 20,
              padding: '24px 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              alignItems: 'start',
            }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', paddingTop: 2 }}>— {item.time}</p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.65)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '48px 0' }} />

        {/* Reminder */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
            This is a demo, not a sales call. If you see it and it's not the right fit, I'll tell you. If it is — we can have your system live by Friday.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>
            See you soon.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
            — Stevan Marroquin, tattoo artist and founder of Nucli AI
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 48 }} />

        {/* CTA */}
        <a
          href="https://www.instagram.com/stevanmarroquintattoo"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-link"
        >
          Questions before the call? Message me on Instagram → @stevanmarroquintattoo
        </a>
      </main>

      <style>{`
        .ig-link {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          font-family: Inter, system-ui, sans-serif;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ig-link:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'

const DEMO_URL = 'https://calendly.com/stevanmarroquin/consulta-gratuita-nucli-ai'
const F = 'Inter, system-ui, sans-serif'

// ─── Spinning text ball ───────────────────────────────────────
function SpinBall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const text = 'EVERY DM ANSWERED · 24/7 · '
    const chars = text.split('')
    let angle = 0
    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const rx = 110
      const ry = 38

      chars.forEach((char, i) => {
        const t = (i / chars.length) * Math.PI * 2 + angle
        const x = cx + rx * Math.cos(t)
        const y = cy + ry * Math.sin(t)
        const scale = (ry + ry * Math.sin(t)) / (ry * 2)
        const alpha = 0.35 + 0.65 * ((Math.sin(t) + 1) / 2)
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(t + Math.PI / 2)
        ctx.globalAlpha = alpha
        ctx.font = `bold ${10 + scale * 6}px ${F}`
        ctx.fillStyle = '#ffffff'
        ctx.textAlign = 'center'
        ctx.fillText(char, 0, 0)
        ctx.restore()
      })

      angle += 0.008
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} width={280} height={280} style={{ display: 'block' }} />
}

// ─── Scroll reveal ────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Tag({ children }: { children: string }) {
  return (
    <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: F }}>
      {children}
    </span>
  )
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '0 32px', height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#080808',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="/logonuclipng.jpg" alt="Nucli AI" width={26} height={26}
          style={{ objectFit: 'contain', filter: 'invert(1)', opacity: 0.9 }} />
        <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', color: '#fff', fontFamily: F }}>
          Nucli AI
        </span>
      </div>
      <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
        fontSize: 12, fontWeight: 500, color: '#080808', background: '#ffffff',
        padding: '8px 18px', textDecoration: 'none', letterSpacing: '-0.01em', fontFamily: F,
      }}>
        Book demo →
      </a>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '56px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Spinning ball top-right */}
      <div style={{ position: 'absolute', top: 72, right: 0, width: 280, height: 280, pointerEvents: 'none' }}>
        <SpinBall />
      </div>

      <div style={{ maxWidth: 820, paddingTop: 80, paddingBottom: 80 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: '#ffffff',
          marginBottom: 48,
          fontFamily: F,
        }}>
          Wake up to consultations already booked.
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 560,
          margin: '0 auto 48px',
          fontFamily: F,
        }}>
          Your AI agent handled the inbox while you slept. Every DM answered. Every lead qualified. Every booking link sent. You just show up and tattoo.
        </p>

        <div style={{ marginBottom: 48 }}>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', fontSize: 15, fontWeight: 500,
            color: '#080808', background: '#ffffff',
            padding: '14px 28px', textDecoration: 'none',
            letterSpacing: '-0.01em', fontFamily: F,
          }}>
            Book a free 15-minute demo →
          </a>
        </div>

        {/* Emphasized tagline */}
        <div style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: 6,
          padding: '16px 24px',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.04)',
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em', fontFamily: F, margin: 0 }}>
            Live in 5 days &nbsp;·&nbsp; You do nothing &nbsp;·&nbsp; Built for tattoo artists and studios
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em', fontFamily: F, margin: 0 }}>
            30-day satisfaction guarantee or your money back
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Pain ─────────────────────────────────────────────────────
function Pain() {
  const ref = useReveal()
  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto' }}>
        <Tag>The problem</Tag>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700,
          letterSpacing: '-0.035em', lineHeight: 1.05, color: '#ffffff',
          marginTop: 24, marginBottom: 48, maxWidth: 640, fontFamily: F,
        }}>
          You're losing clients every time you don't answer immediately.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.1)' }}>
          {[
            { n: '01', body: "Someone DMs your studio at 10pm. You're asleep. They send the same message to two other studios. The first one to reply gets the booking. That studio isn't better than you. They just answered faster." },
            { n: '02', body: "This happens to the average tattoo studio 20 to 40 times a week. At $300 a session, that's $6,000 to $12,000 walking out the door every month." },
            { n: '03', body: "Not because your work isn't good enough. Because no one was there to answer." },
          ].map((item, i) => (
            <div key={i} style={{ background: '#080808', padding: '40px 32px' }}>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 20, fontFamily: F, letterSpacing: '0.15em' }}>{item.n}</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontFamily: F }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Origin ───────────────────────────────────────────────────
function Origin() {
  const ref = useReveal()
  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto' }}>
        <Tag>Origin</Tag>
        <div className="origin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 48, alignItems: 'start' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff', fontFamily: F }}>
            I'm a tattoo artist. I built this for my own studio first.
          </h2>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: F }}>
              I run Soul's Anchor Tattoo Studio in Guatemala City. I was losing clients I never even knew I had — people who DM'd at night or while I was tattooing, didn't hear back until I finished, and booked somewhere else by the time I replied.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: F }}>
              I tried hiring a social media person. But paying someone to respond to your messages — someone who only replies Monday through Friday in office hours, doesn't reply immediately, requires a lot of training to know about tattoos and answer like you, and is still very expensive — is not the solution.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: F }}>
              So I built an AI agent to handle the inbox. Not a chatbot with canned responses. A real conversational agent that asks the right questions, understands what the client wants, gives a quote, and sends my booking link — in my voice, at any hour.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 32, fontFamily: F }}>
              It worked. Now I focus on tattooing and rest at night without worrying about messages not being handled. That's why this exists.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', fontFamily: F }}>
              — Stevan Marroquin, tattoo artist and founder of Nucli AI
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .origin-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────
function HowItWorks() {
  const ref = useReveal()
  const steps = [
    {
      n: 'Step 1',
      title: 'You answer 4 questions.',
      body: "Tell us your pricing model, your booking process, your FAQ, and how you want the AI to sound. That's your only job.",
    },
    {
      n: 'Step 2',
      title: 'We build everything.',
      body: "We configure your AI agent, connect your Instagram and Facebook, write the conversation flows, set up your follow-up sequences, and install everything on your accounts. You don't touch a single thing.",
    },
    {
      n: 'Step 3',
      title: 'It goes live Friday.',
      body: 'Monday you sign. Friday your AI is live. Saturday morning you wake up to your first handled conversations. Style noted. Placement discussed. Booking link sent. Deposit requested. While you slept.',
    },
  ]

  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Tag>How it works</Tag>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff', marginTop: 24, marginBottom: 64, fontFamily: F }}>
          Three steps. You're only involved in one.
        </h2>
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,0.1)' }}>
          {steps.map((step, i) => (
            <div key={i} className="step-row" style={{ background: '#080808', padding: '36px 32px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'start' }}>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', paddingTop: 4, fontFamily: F }}>{step.n}</p>
              <div>
                <p style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 12, letterSpacing: '-0.01em', fontFamily: F }}>{step.title}</p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontFamily: F }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 480px) { .step-row { grid-template-columns: 1fr !important; gap: 8px !important; } }`}</style>
    </section>
  )
}

// ─── What It Does ─────────────────────────────────────────────
function WhatItDoes() {
  const ref = useReveal()
  const points = [
    'Every DM answered in under 90 seconds — 24 hours a day, 7 days a week.',
    "Collects everything you'd normally ask yourself — idea, style, size, body area, reference.",
    'Gives a quote or books a consultation, depending on how you want it set up.',
    'Follows up automatically when leads go cold.',
    'Hands off to you the moment a conversation needs a human.',
    'Sounds like you — trained on your words, your tone, your way of explaining things.',
    'When Meta updates their platform, we handle it. When the AI needs tuning, we handle it. When something breaks, we fix it.',
  ]

  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Tag>What it does</Tag>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff', marginTop: 24, marginBottom: 64, fontFamily: F }}>
          Everything a front desk person would do, at 3am, in your voice.
        </h2>
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          {points.map((point, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 20, padding: '24px 0', borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', alignItems: 'start' }}>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, paddingTop: 3, fontFamily: F }}>→</span>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontFamily: F }}>{point}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 48, fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.8)', fontFamily: F }}>
          Your job is to tattoo.
        </p>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────
type Feature = { text: string; included: boolean; bold?: boolean }

const plans: {
  name: string
  price: string
  setup: string
  monthly: string
  margin: string
  popular: boolean
  features: Feature[]
}[] = [
  {
    name: 'STARTER',
    price: '$999',
    setup: 'one-time setup',
    monthly: '$67 /mo retainer',
    margin: '~$32–45/mo net margin',
    popular: false,
    features: [
      { text: 'Instagram DMs only', included: true },
      { text: 'AI responds 24/7 under 90s', included: true },
      { text: 'Lead qualification', included: true },
      { text: 'Consult booking link', included: true },
      { text: 'Human escalation', included: true },
      { text: 'Standard AI voice', included: true },
      { text: 'Async WhatsApp support', included: true },
      { text: 'Custom voice', included: false },
      { text: 'Follow-up sequences', included: false },
      { text: 'Facebook', included: false },
      { text: 'Website chatbot', included: false },
    ],
  },
  {
    name: 'STUDIO',
    price: '$1,499',
    setup: 'one-time setup',
    monthly: '$117 /mo retainer',
    margin: '~$72–87/mo net margin',
    popular: true,
    features: [
      { text: 'Instagram + Facebook DMs', included: true },
      { text: 'AI responds 24/7 under 90s', included: true },
      { text: 'Lead qualification', included: true },
      { text: 'Pricing option: quote or consult', included: true },
      { text: 'Human escalation', included: true },
      { text: 'Custom AI voice', included: true, bold: true },
      { text: '3-touch follow-up sequence', included: true, bold: true },
      { text: 'Monthly performance summary', included: true },
      { text: 'Async WhatsApp support', included: true },
      { text: 'Website chatbot', included: false },
      { text: 'Dedicated support group', included: false },
    ],
  },
  {
    name: 'STUDIO PRO',
    price: '$2,997',
    setup: 'one-time setup',
    monthly: '$197 /mo retainer',
    margin: '~$127–152/mo net margin',
    popular: false,
    features: [
      { text: 'Instagram + Facebook + website chatbot', included: true },
      { text: 'AI responds 24/7 under 90s', included: true },
      { text: 'Full qualification + pricing logic', included: true },
      { text: 'Human escalation', included: true },
      { text: 'Deep custom voice — per artist', included: true, bold: true },
      { text: '5-touch follow-up — 30 days', included: true, bold: true },
      { text: 'Dedicated WhatsApp/Slack group', included: true, bold: true },
      { text: '4hr response Mon–Fri', included: true },
      { text: 'Monthly tuning + optimization', included: true },
      { text: 'Monthly performance report', included: true },
      { text: 'Up to 2 artist profiles', included: true },
    ],
  },
]

function Pricing() {
  const ref = useReveal()
  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Tag>Pricing</Tag>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff', marginTop: 24, marginBottom: 64, fontFamily: F }}>
          Three plans. One system. Live in 5 days.
        </h2>

        <div ref={ref} className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: '#0f0f0f',
              border: plan.popular ? '2px solid rgba(255,255,255,0.45)' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 20,
                  padding: '4px 14px',
                  fontSize: 11,
                  color: '#fff',
                  fontFamily: F,
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(4px)',
                }}>
                  Most popular
                </div>
              )}

              <p style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', fontFamily: F, marginBottom: 10 }}>{plan.name}</p>
              <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: 4, fontFamily: F }}>{plan.price}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: F, marginBottom: 16 }}>{plan.setup}</p>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />

              <p style={{ fontSize: plan.popular ? 14 : 13, color: plan.popular ? 'rgba(100,180,255,0.9)' : 'rgba(255,255,255,0.55)', fontFamily: F, marginBottom: 4 }}>{plan.monthly}</p>
              <p style={{ fontSize: 11, color: plan.popular ? 'rgba(100,180,255,0.6)' : 'rgba(255,255,255,0.3)', fontFamily: F, marginBottom: 20 }}>{plan.margin}</p>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ fontSize: 12, color: f.included ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: 1 }}>
                      {f.included ? '✓' : '—'}
                    </span>
                    <span style={{
                      fontSize: 12,
                      lineHeight: 1.5,
                      color: f.included ? (f.bold ? '#fff' : 'rgba(255,255,255,0.65)') : 'rgba(255,255,255,0.25)',
                      fontWeight: f.bold ? 600 : 400,
                      fontFamily: F,
                    }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', textAlign: 'center',
                padding: '11px',
                border: plan.popular ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 12, fontWeight: 500,
                textDecoration: 'none', fontFamily: F,
                borderRadius: 4,
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = plan.popular ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent' }}
              >
                Book a demo →
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 28, fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,0.28)', maxWidth: 720, fontFamily: F }}>
          The monthly retainer covers your AI API costs (AI intelligence cost), hosting of AI intelligence and automations, platform maintenance, monthly tuning based on real conversations, and me staying responsible for the system working — forever. Cancel anytime.
        </p>
      </div>
      <style>{`@media (max-width: 720px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

// ─── Guarantee ────────────────────────────────────────────────
function Guarantee() {
  const ref = useReveal()
  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto' }}>
        <Tag>Guarantee</Tag>
        <div style={{ maxWidth: 640, marginTop: 24 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff', marginBottom: 28, fontFamily: F }}>
            30 days. If it doesn't work, you don't pay for it.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontFamily: F }}>
            If in 30 days your AI agent isn't handling messages, booking consultations, and giving you back time to focus on tattooing — you get your money back. No hoops, no questions.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontFamily: F }}>
            I built this for my own practice first. If it doesn't work for you, you don't pay for it.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────
function FinalCTA() {
  const ref = useReveal()
  return (
    <section style={{ padding: '96px 32px 128px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#ffffff', fontFamily: F }}>
            See it handle a real conversation — live.
          </h2>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontFamily: F }}>
              Book a free 15-minute call. I'll show you the actual system running on a real tattoo account. You'll see exactly how it responds, how it qualifies, how it books. Then you decide.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 12, fontFamily: F }}>
              No pitch. No pressure. Just the demo.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', marginBottom: 40, fontStyle: 'italic', fontFamily: F }}>
              If you like what you see, we can have your system live by Friday.
            </p>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', fontSize: 15, fontWeight: 600,
              color: '#080808', background: '#ffffff',
              padding: '16px 32px', textDecoration: 'none',
              letterSpacing: '-0.01em', fontFamily: F,
            }}>
              Book the demo call →
            </a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: F }}>
        © {new Date().getFullYear()} Nucli AI · Heart Studios S.A. · Guatemala
      </span>
      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: '@nucli.ai', href: 'https://www.instagram.com/nucli.ai' },
          { label: 'Privacy', href: '/guatemala/privacy' },
          { label: 'Terms', href: '/guatemala/terms' },
        ].map((link) => (
          <a key={link.label} href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', fontFamily: F }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#fff' }}>
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Origin />
        <HowItWorks />
        <WhatItDoes />
        <Pricing />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

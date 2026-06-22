'use client'

import { useEffect, useRef, useState } from 'react'

const DEMO_URL = 'https://calendly.com/stevanmarroquin/consulta-gratuita-nucli-ai'

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
        ctx.font = `bold ${10 + scale * 6}px Inter, system-ui, sans-serif`
        ctx.fillStyle = '#ffffff'
        ctx.textAlign = 'center'
        ctx.fillText(char, 0, 0)
        ctx.restore()
      })

      angle += 0.008
      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={280}
      style={{ display: 'block' }}
    />
  )
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
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Components ───────────────────────────────────────────────

function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '0' }} />
}

function Tag({ children }: { children: string }) {
  return (
    <span style={{
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {children}
    </span>
  )
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '0 32px',
      height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#080808',
    }}>
      <span style={{
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        Nucli AI
      </span>
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: '#080808',
          background: '#ffffff',
          border: 'none',
          padding: '8px 18px',
          cursor: 'pointer',
          letterSpacing: '-0.01em',
          textDecoration: 'none',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
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
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Spinning ball */}
      <div style={{
        position: 'absolute',
        top: 72,
        right: 0,
        width: 280,
        height: 280,
        pointerEvents: 'none',
      }}>
        <SpinBall />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 780, paddingTop: 80, paddingBottom: 80 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: '#ffffff',
          marginBottom: 48,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Wake up to consultations already booked.
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: 540,
          marginBottom: 48,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Your AI agent handled the inbox while you slept. Every DM answered. Every lead qualified. Every booking link sent. You just show up and tattoo.
        </p>

        <div style={{ marginBottom: 40 }}>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: 15,
              fontWeight: 500,
              color: '#080808',
              background: '#ffffff',
              padding: '14px 28px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Book a free 15-minute demo →
          </a>
        </div>

        <p style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.04em',
          lineHeight: 1.9,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Live in 5 days · You do nothing · Built for tattoo artists and studios<br />
          30-day satisfaction guarantee or your money back
        </p>
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
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          color: '#ffffff',
          marginTop: 24,
          marginBottom: 48,
          maxWidth: 640,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          You're losing clients every night you don't answer.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'rgba(255,255,255,0.1)',
        }}>
          {[
            {
              n: '01',
              body: 'Someone DMs your studio at 10pm. You\'re asleep. They send the same message to two other studios. The first one to reply gets the booking. That studio isn\'t better than you. They just answered faster.',
            },
            {
              n: '02',
              body: 'This happens to the average tattoo studio 20 to 40 times a week. At $300 a session, that\'s $6,000 to $12,000 walking out the door every month.',
            },
            {
              n: '03',
              body: 'Not because your work isn\'t good enough. Because no one was there to answer.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#080808',
              padding: '40px 32px',
            }}>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 20, fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.15em' }}>{item.n}</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, system-ui, sans-serif' }}>{item.body}</p>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          marginTop: 48,
          alignItems: 'start',
        }}
          className="origin-grid"
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#ffffff',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            I'm a tattoo artist. I built this for my own studio first.
          </h2>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: 'Inter, system-ui, sans-serif' }}>
              I run Soul's Anchor Tattoo Studio in Guatemala City. I was losing clients I never even knew I had — people who DM'd at night or while I was tattooing, didn't hear back until I finished, and booked somewhere else by the time I replied.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: 'Inter, system-ui, sans-serif' }}>
              I tried hiring a social media person. But paying someone to respond to your messages — someone who doesn't know your pricing, your style, or how you talk — is expensive and it still doesn't work the way you need it to.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 20, fontFamily: 'Inter, system-ui, sans-serif' }}>
              So I built an AI agent to handle the inbox. Not a chatbot with canned responses. A real conversational agent that asks the right questions, understands what the client wants, gives a quote, and sends my booking link — in my voice, at any hour.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
              It worked. Now I focus on tattooing and rest without worrying about messages not being handled. That's why this exists.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', fontFamily: 'Inter, system-ui, sans-serif' }}>
              — Stevan Marroquin, tattoo artist and founder of Nucli AI
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .origin-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────
function HowItWorks() {
  const ref = useReveal()
  const steps = [
    {
      n: 'Step 1',
      title: 'You answer 5 questions.',
      body: 'Tell us your pricing model, your booking process, your FAQ, and how you want the AI to sound. That\'s your only job.',
    },
    {
      n: 'Step 2',
      title: 'We build everything.',
      body: 'We configure your AI agent, connect your Instagram and Facebook, write the conversation flows, set up your follow-up sequences, and install everything on your accounts. You don\'t touch a single thing.',
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
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#ffffff',
          marginTop: 24,
          marginBottom: 64,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Three steps. You're only involved in one.
        </h2>
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,0.1)' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: '#080808',
              padding: '36px 32px',
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 32,
              alignItems: 'start',
            }}
              className="step-row"
            >
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', paddingTop: 4, fontFamily: 'Inter, system-ui, sans-serif' }}>{step.n}</p>
              <div>
                <p style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 12, letterSpacing: '-0.01em', fontFamily: 'Inter, system-ui, sans-serif' }}>{step.title}</p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .step-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
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
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#ffffff',
          marginTop: 24,
          marginBottom: 64,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Everything a front desk person would do, at 3am, in your voice.
        </h2>
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          {points.map((point, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '28px 1fr',
              gap: 20,
              padding: '24px 0',
              borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              alignItems: 'start',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, paddingTop: 3, fontFamily: 'Inter, system-ui, sans-serif' }}>→</span>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, system-ui, sans-serif' }}>{point}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 48, fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, system-ui, sans-serif' }}>
          Your job is to tattoo.
        </p>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────
function Pricing() {
  const ref = useReveal()
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      monthly: '$67/mo',
      tag: null,
      desc: 'For solo artists who want to stop losing leads to silence.',
      features: [
        'Instagram DMs covered 24/7',
        'Standard AI voice',
        'Lead qualification and booking link',
        'Everything you need, nothing you don\'t',
      ],
    },
    {
      name: 'Studio',
      price: '$1,499',
      monthly: '$117/mo',
      tag: 'Most studios choose this',
      desc: 'For studios that want the full system.',
      features: [
        'Instagram and Facebook covered',
        'AI trained on your specific voice and style',
        'Three-touch follow-up for cold leads',
        'Monthly performance summary',
      ],
    },
    {
      name: 'Studio Pro',
      price: '$2,997',
      monthly: '$197/mo',
      tag: null,
      desc: 'For high-volume studios that can\'t afford a single missed lead.',
      features: [
        'Every platform including your website',
        'Deep custom voice — per artist if needed',
        'Thirty-day follow-up nurture sequence',
        'Dedicated WhatsApp + 4-hour response time',
        'A direct line to me, permanently',
      ],
    },
  ]

  return (
    <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Tag>Pricing</Tag>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#ffffff',
          marginTop: 24,
          marginBottom: 64,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Three plans. One system. Live in 5 days.
        </h2>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'rgba(255,255,255,0.1)',
        }}
          className="pricing-grid"
        >
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: '#080808',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {plan.tag && (
                <p style={{ fontSize: 10, letterSpacing: '0.18em', color: '#fff', background: 'rgba(255,255,255,0.12)', padding: '4px 10px', display: 'inline-block', marginBottom: 16, fontFamily: 'Inter, system-ui, sans-serif', textTransform: 'uppercase' }}>
                  {plan.tag}
                </p>
              )}
              <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8, fontFamily: 'Inter, system-ui, sans-serif' }}>{plan.name}</p>
              <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1, marginBottom: 4, fontFamily: 'Inter, system-ui, sans-serif' }}>{plan.price}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20, fontFamily: 'Inter, system-ui, sans-serif' }}>setup + {plan.monthly}</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>{plan.desc}</p>
              <div style={{ flex: 1 }}>
                {plan.features.map((f, j) => (
                  <p key={j} style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: 10 }}>→</span>{f}
                  </p>
                ))}
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: 32,
                  padding: '12px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
              >
                Book a demo →
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 28, fontSize: 12, lineHeight: 1.8, color: 'rgba(255,255,255,0.25)', maxWidth: 680, fontFamily: 'Inter, system-ui, sans-serif' }}>
          The monthly retainer covers your AI API costs, platform maintenance, monthly tuning based on real conversations, and me staying responsible for the system working — forever. Cancel anytime.
        </p>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
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
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: 28,
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            30 days. If it doesn't work, you don't pay for it.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontFamily: 'Inter, system-ui, sans-serif' }}>
            If in 30 days your AI agent isn't handling messages, booking consultations, and giving you back time to focus on tattooing — you get your money back. No hoops, no questions.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
          className="cta-grid"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: '#ffffff',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            See it handle a real conversation — live.
          </h2>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontFamily: 'Inter, system-ui, sans-serif' }}>
              Book a free 15-minute call. I'll show you the actual system running on a real tattoo account. You'll see exactly how it responds, how it qualifies, how it books. Then you decide.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 12, fontFamily: 'Inter, system-ui, sans-serif' }}>
              No pitch. No pressure. Just the demo.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', marginBottom: 40, fontStyle: 'italic', fontFamily: 'Inter, system-ui, sans-serif' }}>
              If you like what you see, we can have your system live by Friday.
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: 15,
                fontWeight: 600,
                color: '#080808',
                background: '#ffffff',
                padding: '16px 32px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Book the demo call →
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '24px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, system-ui, sans-serif' }}>
        © {new Date().getFullYear()} Nucli AI · Heart Studios S.A. · Guatemala
      </span>
      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: '@nucli.ai', href: 'https://www.instagram.com/nucli.ai' },
          { label: 'Privacy', href: '/guatemala/privacy' },
          { label: 'Terms', href: '/guatemala/terms' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', fontFamily: 'Inter, system-ui, sans-serif' }}
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

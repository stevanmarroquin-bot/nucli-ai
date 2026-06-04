'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react'

const AGENDA_URL = 'https://calendly.com/stevanmarroquin/consulta-gratuita-nucli-ai'
const HERO_IMAGES = ['/hero1.jpeg', '/hero2.jpeg', '/hero3.jpeg', '/hero4.jpeg']
const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
const SANS  = { fontFamily: "'Inter', system-ui, sans-serif" }

// ─── Hooks ───────────────────────────────────────────────────

function useReveal(cls: string, delay?: string) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add(cls)
    if (delay) el.classList.add(delay)
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [cls, delay])
  return ref
}

function useHeadingReveal() {
  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('line-parent')
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Label({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p style={{
      fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
      color: dark ? 'var(--muted-light)' : 'var(--muted)',
      marginBottom: 28, ...SANS,
    }}>
      {children}
    </p>
  )
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logonotext.PNG" alt="Nucli AI" width={32} height={32}
            style={{ mixBlendMode: 'multiply', objectFit: 'contain' }} />
          <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', ...SANS }}>Nucli AI</span>
        </div>
        <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill">
          Agenda tu llamada →
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const headingRef = useHeadingReveal()
  const sub = useReveal('reveal', 'd2')
  const cta = useReveal('reveal', 'd3')

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % HERO_IMAGES.length)
        setFading(false)
      }, 700)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.7s ease-in-out',
      }}>
        <Image
          src={HERO_IMAGES[current]}
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Gradient overlay — heavy at bottom so text is readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,14,12,0.92) 0%, rgba(15,14,12,0.45) 50%, rgba(15,14,12,0.15) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: 'clamp(80px, 10vw, 140px) 40px 80px',
      }}>
        <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,241,235,0.55)', marginBottom: 44, ...SANS }}>
          Guatemala · nucli.solutions
        </p>

        <h1 ref={headingRef} style={{ marginBottom: 52 }}>
          <span className="line-wrap">
            <span style={{ ...SERIF, fontSize: 'clamp(3.2rem, 8vw, 8rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block', color: 'var(--fg-light)' }}>
              Automatiza
            </span>
          </span>
          <span className="line-wrap">
            <span style={{ ...SERIF, fontSize: 'clamp(3.2rem, 8vw, 8rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block', color: 'var(--fg-light)' }}>
              tu negocio
            </span>
          </span>
          <span className="line-wrap">
            <span style={{ ...SERIF, fontSize: 'clamp(3.2rem, 8vw, 8rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block', color: 'rgba(244,241,235,0.7)' }}>
              con IA.
            </span>
          </span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
          <svg width="60" height="16" viewBox="0 0 60 16" fill="none" style={{ opacity: 0.35, flexShrink: 0, marginTop: 6 }}>
            <line x1="0" y1="8" x2="52" y2="8" stroke="white" strokeWidth="1.5"/>
            <polyline points="44,2 52,8 44,14" stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>
          <div ref={sub} style={{ maxWidth: 500 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(244,241,235,0.65)', ...SANS }}>
              Recupera tu tiempo. Genera más dinero.<br />
              Implementamos inteligencia artificial en tu negocio en menos de un mes,
              sin contratar desarrolladores caros o contratar a más personas.
            </p>
          </div>
        </div>

        <div ref={cta}>
          <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
            Agenda tu llamada gratis →
          </a>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div style={{
        position: 'absolute', bottom: 32, right: 40,
        display: 'flex', gap: 6, zIndex: 2,
      }}>
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 999,
              background: i === current ? 'rgba(244,241,235,0.9)' : 'rgba(244,241,235,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Servicios pills ──────────────────────────────────────────
const PILL_LABELS = [
  'Chatbot inteligente', 'Automatización de ventas', 'Dashboard financiero',
  'Página web con IA', 'Sistema interno', 'App a la medida',
]

function ServiciosPills() {
  const wrap = useReveal('reveal')
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={wrap}>
          <Label>Lo que implementamos</Label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {PILL_LABELS.map((s) => (
              <a key={s} href="#servicios" className="pill">{s} →</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── El Problema ──────────────────────────────────────────────
function Problema() {
  const headingRef = useHeadingReveal()
  const subRef  = useReveal('reveal', 'd2')
  const right   = useReveal('reveal-right')
  const noteRef = useReveal('reveal', 'd1')

  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid-2">
          <div>
            <Label>El problema</Label>
            <h2 ref={headingRef} style={{ marginBottom: 24 }}>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                  Cada día que operas
                </span>
              </span>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                  manualmente es dinero
                </span>
              </span>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                  que no recuperas.
                </span>
              </span>
            </h2>
            <div ref={subRef}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>
                Tu negocio depende completamente de ti. Si tú no estás, nada funciona.
                Y aunque estás, tampoco alcanza.
              </p>
            </div>
          </div>

          <div ref={right} style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', title: 'Clientes sin atender', desc: 'Mensajes sin responder, leads que se enfriaron porque nadie les dio seguimiento.' },
              { n: '02', title: 'Sin visibilidad financiera', desc: 'Finanzas que viven en tu cabeza o en un Excel que nadie actualiza.' },
              { n: '03', title: 'Equipo sin claridad', desc: 'Procesos que nadie mide. Tu equipo necesita que estés en cada decisión.' },
              { n: '04', title: 'No puedes escalar', desc: 'No puedes escalar si todo depende de ti y no tienes tiempo para pensar en el negocio.' },
            ].map((item, i, arr) => (
              <div key={i} className="row-item" style={{
                display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16,
                padding: '26px 12px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontSize: 12, color: 'var(--muted)', paddingTop: 2, ...SANS }}>{item.n}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 7, letterSpacing: '-0.01em', ...SANS }}>{item.title}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', ...SANS }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={noteRef} style={{
          marginTop: 64, padding: '32px 36px',
          border: '1px solid var(--border)', borderRadius: 4,
          background: 'rgba(15,14,12,0.03)',
        }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--fg)', fontWeight: 500, ...SANS }}>
            Contratar más personas no es la solución.{' '}
            <span style={{ color: 'var(--muted)' }}>
              Esto tiene solución y no requiere que aprendas tecnología.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── La Solución ──────────────────────────────────────────────
function Solucion() {
  const headingRef = useHeadingReveal()
  const subRef  = useReveal('reveal', 'd2')
  const ctaRef  = useReveal('reveal', 'd3')
  const right   = useReveal('reveal-right')

  return (
    <section className="section-pad" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label dark>La solución</Label>
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 ref={headingRef} style={{ marginBottom: 28 }}>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block', color: 'var(--fg-light)' }}>
                  No necesitas más empleados.
                </span>
              </span>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block', color: 'var(--muted-light)' }}>
                  Necesitas mejores sistemas.
                </span>
              </span>
            </h2>
            <div ref={subRef}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted-light)', marginBottom: 44, maxWidth: 400, ...SANS }}>
                En Nucli AI implementamos inteligencia artificial a la medida de tu operación —
                para que tu negocio funcione y crezca sin que todo dependa de ti.
              </p>
            </div>
            <div ref={ctaRef} style={{ marginBottom: 48 }}>
              <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
                Hablemos →
              </a>
            </div>

            {/* Financial system image */}
          </div>

          <div ref={right} style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { problem: 'Los clientes sin responder', solution: 'Un chatbot inteligente que atiende, califica y agenda por ti las 24 horas.' },
              { problem: 'Los leads que se enfrían', solution: 'Automatizaciones que hacen el follow-up solo, sin que nadie tenga que recordarlo.' },
              { problem: 'Las finanzas que no cuadran', solution: 'Un dashboard que te muestra en tiempo real dónde está tu dinero y qué genera.' },
              { problem: 'Los procesos que nadie mide', solution: 'Un sistema que le da a tu equipo claridad para operar sin necesitarte.' },
              { problem: 'La presencia digital que no convierte', solution: 'Una web con IA integrada que trabaja como vendedor digital las 24 horas.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
                padding: '22px 0', borderBottom: '1px solid var(--border-dark)',
              }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-light)', ...SANS }}>{item.problem}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted-light)', ...SANS }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Servicios detalle ────────────────────────────────────────
const SERVICIOS_DETAIL = [
  { name: 'Chatbot inteligente', desc: 'Responde clientes inmediatamente, califica leads y agenda citas — 24 horas al día.', price: 'Desde Q2,500 setup', monthly: 'Q300/mes' },
  { name: 'Automatización de seguimiento y ventas', desc: 'Seguimiento automático a cada cliente. Sin leads perdidos. Sin ventas que se enfrían.', price: 'Desde Q2,500 setup', monthly: 'Q250/mes' },
  { name: 'Dashboard financiero', desc: 'Ve en tiempo real dónde está tu dinero, dónde se va, y qué genera más.', price: 'Desde Q4,500 setup', monthly: 'Q400/mes' },
  { name: 'Página web con IA integrada', desc: 'Diseñada para convertir visitas en ventas — chatbot, captura de leads, SEO.', price: 'Desde Q4,000 setup', monthly: 'Q350/mes' },
  { name: 'Sistema interno', desc: 'A la medida de tu operación para que tu equipo trabaje sin necesitarte en cada paso.', price: 'Desde Q5,000 setup', monthly: 'Q450/mes' },
  { name: 'App a la medida', desc: 'Un producto digital completo — agendamiento, membresías, pedidos, o lo que necesites.', price: 'Desde Q10,000 setup', monthly: 'Q700/mes' },
]

function ServiciosDetail() {
  const headingRef = useHeadingReveal()
  const listRef    = useReveal('reveal', 'd1')

  return (
    <section id="servicios" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <Label>Servicios</Label>
          <h2 ref={headingRef}>
            <span className="line-wrap">
              <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                Los sistemas
              </span>
            </span>
            <span className="line-wrap">
              <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                que implementamos
              </span>
            </span>
          </h2>
        </div>

        <div ref={listRef}>
          {SERVICIOS_DETAIL.map((s, i) => (
            <div key={i} className="grid-services row-item">
              <span style={{ fontSize: 12, color: 'var(--muted)', ...SANS }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', ...SANS }}>{s.name}</p>
              <p className="svc-desc" style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', ...SANS }}>{s.desc}</p>
              <div className="svc-price" style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', ...SANS }}>{s.price}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', whiteSpace: 'nowrap', ...SANS }}>{s.monthly}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 32, fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', ...SANS }}>
          Te damos descuentos si compras e implementas más de un sistema.
        </p>
      </div>
    </section>
  )
}

// ─── Proceso ──────────────────────────────────────────────────
function Proceso() {
  const headingRef = useHeadingReveal()
  const step1 = useReveal('reveal', 'd1')
  const step2 = useReveal('reveal', 'd2')
  const step3 = useReveal('reveal', 'd3')

  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label>El proceso</Label>
        <h2 ref={headingRef} style={{ marginBottom: 72 }}>
          <span className="line-wrap">
            <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
              Empezar es
            </span>
          </span>
          <span className="line-wrap">
            <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
              simple.
            </span>
          </span>
        </h2>

        {/* Step 1 */}
        <div ref={step1} style={{ maxWidth: 560, marginBottom: 80, paddingBottom: 80, borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.05em', color: 'rgba(15,14,12,0.07)', marginBottom: 24, lineHeight: 1, ...SERIF }}>01</p>
          <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 14, ...SANS }}>Hablamos</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>
            Una llamada de 30 a 60 minutos. Me cuentas cómo operas tu negocio y qué te está costando más tiempo o dinero.
          </p>
        </div>

        {/* Step 2 — no image, centered */}
        <div ref={step2} style={{ maxWidth: 560, marginBottom: 80, paddingBottom: 80, borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.05em', color: 'rgba(15,14,12,0.07)', marginBottom: 24, lineHeight: 1, ...SERIF }}>02</p>
          <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 14, ...SANS }}>Te presento el plan</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>
            Identifico qué sistema tiene más impacto inmediato para tu operación y te presento un plan de implementación junto con el precio.
          </p>
        </div>

        {/* Step 3 */}
        <div ref={step3} style={{ maxWidth: 560 }}>
          <p style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.05em', color: 'rgba(15,14,12,0.07)', marginBottom: 24, lineHeight: 1, ...SERIF }}>03</p>
          <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 14, ...SANS }}>Lo construimos</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>
            En menos de un mes tienes el sistema funcionando y trabajando por ti.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Final ────────────────────────────────────────────────
function CTAFinal() {
  const headingRef = useHeadingReveal()
  const right      = useReveal('reveal-right')

  return (
    <section className="section-pad" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: 80 }}>
          <div>
            <h2 ref={headingRef} style={{ marginBottom: 48 }}>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, display: 'block', color: 'var(--fg-light)' }}>
                  Recupera tu tiempo.
                </span>
              </span>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05, display: 'block', color: 'var(--muted-light)' }}>
                  Tu negocio puede generarte más dinero.
                </span>
              </span>
            </h2>
            <div ref={right}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted-light)', marginBottom: 14, ...SANS }}>
                La IA lo hace posible y nosotros te ayudamos a implementarla.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(244,241,235,0.35)', marginBottom: 44, ...SANS }}>
                La llamada es gratis. Sin compromiso. Si no puedo ayudarte, te lo digo directo.
              </p>
              <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
                Agenda tu llamada gratis →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(244,241,235,0.07)', padding: '32px 24px' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logonotext.PNG" alt="Nucli AI" width={28} height={28}
            style={{ mixBlendMode: 'screen', objectFit: 'contain', opacity: 0.55 }} />
          <span style={{ fontSize: 13, color: 'rgba(244,241,235,0.45)', ...SANS }}>
            Nucli AI · Guatemala · nucli.solutions
          </span>
        </div>
        <a
          href="https://www.instagram.com/nucli.ai" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,241,235,0.3)', textDecoration: 'none', transition: 'color 0.2s', ...SANS }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(244,241,235,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,241,235,0.3)')}
        >
          @nucli.ai
        </a>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <ServiciosPills />
        <Problema />
        <Solucion />
        <ServiciosDetail />
        <Proceso />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}

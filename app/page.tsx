'use client'

import { useEffect, useRef } from 'react'

const AGENDA_URL = 'https://calendly.com/stevanmarroquin/consulta-gratuita-nucli-ai'
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
          <img src="/logonuclipng.jpg" alt="Nucli AI" width={32} height={32}
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
  const headingRef = useHeadingReveal()
  const sub  = useReveal('reveal', 'd2')
  const guarantee = useReveal('reveal', 'd3')
  const cta  = useReveal('reveal', 'd4')

  return (
    <section className="hero-pad" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 44, ...SANS }}>
        Guatemala · nucli.solutions
      </p>

      <h1 ref={headingRef} style={{ marginBottom: 52 }}>
        <span className="line-wrap">
          <span style={{ ...SERIF, fontSize: 'clamp(3rem, 7.5vw, 7.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block' }}>
            Tu negocio puede
          </span>
        </span>
        <span className="line-wrap">
          <span style={{ ...SERIF, fontSize: 'clamp(3rem, 7.5vw, 7.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block' }}>
            generar más sin que
          </span>
        </span>
        <span className="line-wrap">
          <span style={{ ...SERIF, fontSize: 'clamp(3rem, 7.5vw, 7.5rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 0.93, display: 'block', color: 'var(--muted)' }}>
            tú trabajes más.
          </span>
        </span>
      </h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" style={{ opacity: 0.28, flexShrink: 0, marginTop: 6 }}>
          <line x1="0" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="1.5"/>
          <polyline points="44,2 52,8 44,14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
        <div ref={sub} style={{ maxWidth: 540 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>
            Construimos tu equipo de agentes de IA, trabajando 24/7 para que tú te enfoques en crecer, no en operar.
          </p>
        </div>
      </div>

      <div ref={guarantee} style={{ marginBottom: 48, paddingLeft: 84 }}>
        <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--muted)', maxWidth: 520, ...SANS }}>
          Entregamos tu primer agente en menos de 30 días — y si no ves resultados en 60 días,{' '}
          <span style={{ color: 'var(--fg)', fontWeight: 500 }}>te damos un reembolso completo. Sin preguntas.</span>
        </p>
      </div>

      <div ref={cta}>
        <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill">
          Agenda tu llamada gratis →
        </a>
      </div>
    </section>
  )
}

// ─── Servicios pills ──────────────────────────────────────────
const PILL_LABELS = [
  'Agente de atención', 'Agente de ventas', 'Agente financiero',
  'Agente de captación', 'Agente de operaciones', 'Agente de reactivación',
  'Agente de reputación', 'App a la medida',
]

function ServiciosPills() {
  const wrap = useReveal('reveal')
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={wrap}>
          <Label>Tu equipo de agentes</Label>
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
              { n: '02', title: 'Sin visibilidad financiera', desc: 'Finanzas que no cuadran porque todo vive en tu cabeza o en un Excel que nadie actualiza.' },
              { n: '03', title: 'Equipo sin claridad', desc: 'Procesos que nadie mide. Tu equipo necesita que estés presente en cada decisión.' },
              { n: '04', title: 'No puedes escalar', desc: 'Mientras sigues apagando fuegos no puedes pensar en crecer ni enfocarte en lo que realmente mueve el negocio.' },
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
            Contratar más personas no es la solución, no tienes el presupuesto y tampoco resuelve el problema de fondo.{' '}
            <span style={{ color: 'var(--muted)' }}>
              Eso tiene solución, y no requiere que aprendas tecnología.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── La Solución ──────────────────────────────────────────────
const SOLUCIONES = [
  { problem: 'Los clientes sin responder', solution: 'Un agente de atención que responde, califica y agenda por ti en tiempo real.' },
  { problem: 'Los leads que se enfrían', solution: 'Un agente de ventas que hace el follow-up solo, sin que nadie en tu equipo tenga que recordarlo.' },
  { problem: 'Las finanzas que no cuadran', solution: 'Un agente financiero que te muestra en tiempo real dónde está tu dinero, dónde se va, y qué está generando.' },
  { problem: 'Los procesos que nadie mide', solution: 'Un agente de operaciones que le da a tu equipo claridad para trabajar sin necesitar que tú estés en cada decisión.' },
  { problem: 'La presencia digital que no convierte', solution: 'Un agente de captación que convierte visitas en conversaciones de venta mientras tú te enfocas en otra cosa.' },
  { problem: 'Los clientes que no vuelven', solution: 'Un agente de reactivación que contacta tu base de clientes dormidos y los trae de vuelta.' },
  { problem: 'Las reseñas que nunca llegan', solution: 'Un agente de reputación que pide reseñas, las responde automáticamente y genera referidos.' },
]

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
                  Necesitas agentes de IA.
                </span>
              </span>
            </h2>
            <div ref={subRef}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted-light)', marginBottom: 44, maxWidth: 420, ...SANS }}>
                En Nucli AI construimos tu equipo de agentes de inteligencia artificial, cada uno diseñado para resolver un problema específico de tu operación, trabajando juntos las 24 horas del día sin que tú tengas que hacer nada.
              </p>
            </div>
            <div ref={ctaRef}>
              <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill pill-dark">Hablemos →</a>
            </div>
          </div>

          <div ref={right} style={{ display: 'flex', flexDirection: 'column' }}>
            {SOLUCIONES.map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
                padding: '20px 0', borderBottom: '1px solid var(--border-dark)',
              }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-light)', ...SANS }}>{item.problem}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted-light)', ...SANS }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid var(--border-dark)' }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted-light)', maxWidth: 680, ...SANS }}>
            Tú me cuentas cómo opera tu negocio hoy. Yo identifico en dónde está la fuga de tiempo y dinero, y construyo el agente que lo resuelve, en menos de 30 días.{' '}
            <span style={{ color: 'var(--fg-light)', fontWeight: 500 }}>
              Sin que tengas que aprender nada técnico. Sin contratar a nadie más.
            </span>{' '}
            Tú hablas con una persona que entiende tu negocio. Nosotros construimos, implementamos y mantenemos todo.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Servicios detalle ────────────────────────────────────────
const SERVICIOS_DETAIL = [
  { name: 'Agente de atención al cliente', desc: 'Responde clientes inmediatamente, califica leads y agenda citas — 24 horas al día, sin que nadie en tu equipo tenga que hacerlo.', price: 'Desde Q2,500 setup', monthly: 'Q300/mes' },
  { name: 'Agente de ventas y seguimiento', desc: 'Seguimiento automático a cada cliente que muestra interés. Sin leads perdidos. Sin ventas que se enfrían por falta de atención.', price: 'Desde Q2,500 setup', monthly: 'Q250/mes' },
  { name: 'Agente financiero', desc: 'Ve en tiempo real dónde está tu dinero, dónde se va, y qué está generando más. Sin abrir Excel. Sin preguntarle a nadie.', price: 'Desde Q4,500 setup', monthly: 'Q400/mes' },
  { name: 'Agente de captación', desc: 'Una página diseñada para convertir visitas en conversaciones de venta, con agente de IA integrado, captura de leads y optimización para Google.', price: 'Desde Q4,000 setup', monthly: 'Q350/mes' },
  { name: 'Agente de operaciones', desc: 'Un sistema a la medida de tu operación para que tu equipo trabaje con claridad, sin depender de ti para cada decisión.', price: 'Desde Q5,000 setup', monthly: 'Q450/mes' },
  { name: 'Agente de reactivación', desc: 'Contactamos tu base de clientes dormidos con mensajes conversacionales de IA. Solo ventas que creías perdidas volviendo a entrar.', price: 'Desde Q2,500 setup', monthly: 'Q200/mes' },
  { name: 'Agente de reputación', desc: 'Pedimos reseñas a tus clientes satisfechos automáticamente, respondemos cada reseña con IA y generamos referidos. Más reseñas en Google, más clientes encontrándote.', price: 'Desde Q2,500 setup', monthly: 'Q200/mes' },
  { name: 'App a la medida', desc: 'Agendamiento, membresías, pedidos, o lo que tu negocio necesite para escalar. Un producto digital completo construido para ti.', price: 'Desde Q10,000 setup', monthly: 'Q700/mes' },
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
                Tu equipo de
              </span>
            </span>
            <span className="line-wrap">
              <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block' }}>
                agentes de IA
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

        <p style={{ marginTop: 32, fontSize: 15, lineHeight: 1.75, ...SANS }}>
          <span style={{ color: 'var(--fg)', fontWeight: 500 }}>¿Necesitas más de un agente?</span>{' '}
          <span style={{ color: 'var(--muted)' }}>Cada agente adicional que necesites tiene descuento acumulado de hasta un 20% en el precio del setup y mensual.</span>
        </p>
      </div>
    </section>
  )
}

// ─── Proceso ──────────────────────────────────────────────────
function Proceso() {
  const headingRef = useHeadingReveal()
  const col1 = useReveal('reveal', 'd1')
  const col2 = useReveal('reveal', 'd2')
  const col3 = useReveal('reveal', 'd3')

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

        <div className="grid-3">
          {[
            { ref: col1, n: '01', title: 'Hablamos', desc: 'Una llamada de 30-60 minutos. Me cuentas cómo opera tu negocio hoy y qué te está costando más tiempo o dinero.' },
            { ref: col2, n: '02', title: 'Te presento el plan', desc: 'Con base en lo que me cuentas, te digo exactamente qué agente tiene más impacto inmediato para tu operación y cuánto cuesta.' },
            { ref: col3, n: '03', title: 'Lo construimos', desc: 'Si decides avanzar, empezamos. En menos de 30 días tienes tu primer agente funcionando y trabajando por ti.' },
          ].map((step, i) => (
            <div key={i} ref={step.ref} className="proceso-col" style={{
              padding: '40px 36px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
              paddingLeft: i === 0 ? 0 : 36,
            }}>
              <p style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.05em', color: 'rgba(15,14,12,0.07)', marginBottom: 28, lineHeight: 1, ...SERIF }}>
                {step.n}
              </p>
              <p style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 12, ...SANS }}>{step.title}</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted)', ...SANS }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── La Garantía ─────────────────────────────────────────────
function Garantia() {
  const headingRef = useHeadingReveal()
  const body = useReveal('reveal', 'd2')

  return (
    <section className="section-pad" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label dark>La garantía</Label>
        <div style={{ maxWidth: 720 }}>
          <h2 ref={headingRef} style={{ marginBottom: 40 }}>
            <span className="line-wrap">
              <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block', color: 'var(--fg-light)' }}>
                Si no ves resultados en 60 días,
              </span>
            </span>
            <span className="line-wrap">
              <span style={{ ...SERIF, fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, display: 'block', color: 'var(--muted-light)' }}>
                te devuelvo cada quetzal.
              </span>
            </span>
          </h2>
          <div ref={body}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--muted-light)', marginBottom: 24, ...SANS }}>
              Si tu negocio no ve resultados medibles en 60 días, te devuelvo cada quetzal y retiro cada sistema que construí.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--fg-light)', fontWeight: 500, marginBottom: 48, ...SANS }}>
              Sin preguntas. Sin condiciones. Yo asumo todo el riesgo para que tú no tengas que hacerlo.
            </p>
            <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
              Agenda tu llamada gratis →
            </a>
          </div>
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
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 ref={headingRef}>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, display: 'block' }}>
                  Tu negocio puede generar más
                </span>
              </span>
              <span className="line-wrap">
                <span style={{ ...SERIF, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05, display: 'block', color: 'var(--muted)' }}>
                  sin que tú trabajes más.
                </span>
              </span>
            </h2>
          </div>
          <div ref={right}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 14, ...SANS }}>
              La consulta es gratis. Si no veo exactamente cómo ayudarte, te lo digo directo.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--muted)', marginBottom: 12, ...SANS }}>
              Y si avanzas y no ves resultados en 60 días, te devuelvo todo y retiro los agentes.
            </p>
            <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg)', marginBottom: 44, ...SANS }}>
              Tú no arriesgas nada. Yo asumo todo el riesgo.
            </p>
            <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="pill">
              Agenda tu llamada gratis →
            </a>
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
          <img src="/logofooter.png" alt="Nucli AI" width={28} height={28}
            style={{ objectFit: 'contain', opacity: 0.7 }} />
          <span style={{ fontSize: 13, color: 'rgba(244,241,235,0.45)', ...SANS }}>
            Nucli AI · nucli.solutions
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
        <Garantia />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}

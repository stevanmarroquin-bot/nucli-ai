import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio — Nucli AI',
  description: 'Términos de servicio de Nucli AI y Heart Studios S.A. Condiciones de uso de nuestros servicios de agentes de inteligencia artificial.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif',
      color: 'var(--fg)',
    }}>
      {/* Nav */}
      <nav style={{
        background: 'var(--bg)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img
            src="/logonuclipng.jpg"
            alt="Nucli AI"
            style={{ height: '36px', width: 'auto', mixBlendMode: 'multiply' }}
          />
        </Link>
        <Link
          href="/"
          style={{
            fontSize: '0.875rem',
            color: 'var(--fg)',
            textDecoration: 'none',
            opacity: 0.6,
          }}
        >
          ← Volver al inicio
        </Link>
      </nav>

      {/* Content */}
      <main style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '4rem 2rem 6rem',
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '0.5rem',
        }}>
          Términos de Servicio
        </h1>
        <p style={{ opacity: 0.5, fontSize: '0.875rem', marginBottom: '3rem' }}>
          Última actualización: 8 de junio de 2026
        </p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>

          <p style={{ marginBottom: '2rem' }}>
            Al interactuar con Nucli AI a través de Instagram o cualquier otro canal,
            aceptas los presentes términos de servicio. Si no estás de acuerdo con alguno
            de ellos, te pedimos que no utilices nuestros servicios.
          </p>

          <Section title="1. Servicios">
            <p>
              Nucli AI, operado por Heart Studios S.A., diseña e implementa agentes de
              inteligencia artificial personalizados para negocios. Nuestros servicios incluyen,
              entre otros, agentes de atención al cliente, ventas, operaciones, finanzas,
              reputación y aplicaciones a la medida.
            </p>
          </Section>

          <Section title="2. Uso de inteligencia artificial">
            <p>
              Nuestra cuenta de Instagram y otros canales de comunicación pueden utilizar
              agentes de IA automatizados para responder mensajes. Al contactarnos, es posible
              que estés interactuando con un sistema automatizado y no con una persona en tiempo real.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Las respuestas generadas por nuestros agentes de IA son de carácter informativo.
              No constituyen asesoría legal, financiera, médica ni de ningún otro tipo regulado.
            </p>
          </Section>

          <Section title="3. Compromisos del cliente">
            <p>Al usar nuestros servicios, el cliente se compromete a:</p>
            <ul>
              <li>Proporcionar información veraz y actualizada sobre su negocio</li>
              <li>No utilizar los agentes construidos para actividades ilícitas o que violen los términos de terceros</li>
              <li>Cumplir con los plazos de pago acordados en la propuesta de servicio</li>
            </ul>
          </Section>

          <Section title="4. Pagos y garantía">
            <p>
              Los precios, condiciones de pago y plazos de entrega se establecen en la propuesta
              de servicio individualizada aceptada por el cliente. Ofrecemos garantía de reembolso
              completo si el negocio no obtiene resultados medibles dentro de los primeros 60 días
              desde la implementación, bajo las condiciones acordadas en dicha propuesta.
            </p>
          </Section>

          <Section title="5. Propiedad intelectual">
            <p>
              Los sistemas, flujos y agentes construidos por Heart Studios S.A. para el cliente
              son propiedad del cliente una vez completado el pago. El código, metodología y
              know-how propios de Nucli AI permanecen como propiedad de Heart Studios S.A.
            </p>
          </Section>

          <Section title="6. Limitación de responsabilidad">
            <p>
              Heart Studios S.A. no es responsable por decisiones tomadas con base en la
              información proporcionada por nuestros agentes de IA. Toda la información se
              entrega tal cual ("as-is"), sin garantías implícitas de exactitud, completitud
              o idoneidad para un fin específico.
            </p>
            <p style={{ marginTop: '1rem' }}>
              En ningún caso la responsabilidad total de Heart Studios S.A. excederá el monto
              pagado por el cliente en los últimos 90 días por los servicios en cuestión.
            </p>
          </Section>

          <Section title="7. Modificaciones">
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
              Los cambios entran en vigor al publicarse en esta página. El uso continuado
              de nuestros servicios tras la publicación implica aceptación de los nuevos términos.
            </p>
          </Section>

          <Section title="8. Ley aplicable">
            <p>
              Estos términos se rigen por las leyes de la República de Guatemala.
              Cualquier controversia será sometida a la jurisdicción de los tribunales
              competentes de Guatemala City, Guatemala.
            </p>
          </Section>

          <Section title="9. Contacto">
            <p>Para cualquier pregunta sobre estos términos, contáctanos en:</p>
            <div style={{
              marginTop: '1rem',
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.04)',
              borderRadius: '12px',
              lineHeight: 2,
            }}>
              <strong>Heart Studios S.A.</strong><br />
              Guatemala City, Guatemala<br />
              <a
                href="mailto:hola@nucli.solutions"
                style={{ color: 'var(--fg)', textDecorationColor: 'rgba(0,0,0,0.3)' }}
              >
                hola@nucli.solutions
              </a>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(0,0,0,0.08)',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        opacity: 0.4,
      }}>
        © {new Date().getFullYear()} Heart Studios S.A. — Nucli AI. Guatemala.
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
      }}>
        {title}
      </h2>
      <div style={{ opacity: 0.8 }}>{children}</div>
      <style>{`
        ul { padding-left: 1.5rem; margin-top: 0.5rem; }
        li { margin-bottom: 0.35rem; }
      `}</style>
    </div>
  )
}

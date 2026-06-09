import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Nucli AI',
  description: 'Política de privacidad de Nucli AI y Heart Studios S.A. Cómo manejamos tu información cuando interactúas con nuestros servicios.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
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
          Política de Privacidad
        </h1>
        <p style={{ opacity: 0.5, fontSize: '0.875rem', marginBottom: '3rem' }}>
          Última actualización: junio 2025
        </p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>

          <p style={{ marginBottom: '2rem' }}>
            Heart Studios S.A. ("Nucli AI", "nosotros") opera la cuenta de Instagram de Nucli AI
            y los servicios relacionados. Esta política describe cómo recopilamos, usamos y
            protegemos la información cuando interactúas con nosotros.
          </p>

          <Section title="1. Información que recopilamos">
            <p>Cuando interactúas con nuestra cuenta de Instagram o nuestro agente de IA, podemos recopilar:</p>
            <ul>
              <li>Tu nombre de usuario e ID de Instagram</li>
              <li>El contenido de los mensajes que nos envías</li>
              <li>Fecha y hora de las interacciones</li>
            </ul>
          </Section>

          <Section title="2. Cómo usamos tu información">
            <p>Usamos esta información para:</p>
            <ul>
              <li>Responder tus consultas a través de nuestro agente de IA</li>
              <li>Calificar leads y agendar llamadas de diagnóstico</li>
              <li>Mejorar la calidad de nuestros servicios</li>
            </ul>
          </Section>

          <Section title="3. Retención de datos">
            <p>
              Los mensajes son procesados en tiempo real y no se almacenan de forma permanente
              en nuestros sistemas, más allá de lo que Instagram retiene en su propia plataforma
              conforme a sus políticas.
            </p>
          </Section>

          <Section title="4. Servicios de terceros">
            <p>
              Utilizamos la API de DeepSeek AI para procesar y generar respuestas a los mensajes.
              Los mensajes enviados a través de nuestro agente pueden ser transmitidos a los
              servidores de DeepSeek para generar una respuesta. Te recomendamos revisar la
              política de privacidad de DeepSeek en{' '}
              <a
                href="https://www.deepseek.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--fg)', textDecorationColor: 'rgba(0,0,0,0.3)' }}
              >
                deepseek.com/privacy
              </a>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              También interactuamos con la plataforma de Instagram (Meta Platforms, Inc.),
              sujeta a sus propios{' '}
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--fg)', textDecorationColor: 'rgba(0,0,0,0.3)' }}
              >
                términos y política de privacidad
              </a>.
            </p>
          </Section>

          <Section title="5. Seguridad">
            <p>
              Tomamos medidas razonables para proteger la información que procesamos.
              Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro.
              Recomendamos no compartir información sensible a través de mensajes directos.
            </p>
          </Section>

          <Section title="6. Tus derechos">
            <p>
              Puedes solicitar en cualquier momento que dejemos de procesar tus mensajes
              enviándonos un correo a{' '}
              <a
                href="mailto:hola@nucli.solutions"
                style={{ color: 'var(--fg)', textDecorationColor: 'rgba(0,0,0,0.3)' }}
              >
                hola@nucli.solutions
              </a>.
              Atenderemos tu solicitud a la brevedad posible.
            </p>
          </Section>

          <Section title="7. Cambios a esta política">
            <p>
              Podemos actualizar esta política ocasionalmente. Los cambios entran en vigor
              al publicarse en esta página. Te recomendamos revisarla periódicamente.
            </p>
          </Section>

          <Section title="8. Contacto">
            <p>Para cualquier pregunta sobre esta política, contáctanos en:</p>
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

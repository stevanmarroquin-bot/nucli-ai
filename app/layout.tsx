import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nucli.solutions'),
  title: 'Nucli AI — Automatiza tu negocio con inteligencia artificial',
  description: 'Implementamos inteligencia artificial en tu negocio en menos de un mes. Sin aprender tecnología. Sin contratar desarrolladores. Solo sistemas que trabajan por ti.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Nucli AI — Automatiza tu negocio con IA',
    description: 'Sistemas de IA a la medida de tu operación.',
    url: 'https://nucli.solutions',
    siteName: 'Nucli AI',
    locale: 'es_GT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logonucli.PNG" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Nucli AI',
              url: 'https://nucli.solutions',
              description: 'Automatización de negocios con inteligencia artificial en Guatemala.',
              address: { '@type': 'PostalAddress', addressCountry: 'GT', addressLocality: 'Guatemala' },
              sameAs: ['https://www.instagram.com/nucli.ai'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

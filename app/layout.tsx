import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nucli.solutions'),
  title: 'Nucli AI — Agentes de IA para tu negocio | Guatemala',
  description: 'Construimos tu equipo de agentes de inteligencia artificial que trabajan 24/7 por tu negocio. Atención al cliente, ventas, finanzas y operaciones automatizadas. Tu primer agente en menos de 30 días. Garantía de 60 días. Guatemala.',
  keywords: [
    'agentes de inteligencia artificial Guatemala',
    'automatización de negocios con IA',
    'chatbot para negocios Guatemala',
    'automatización de ventas Guatemala',
    'inteligencia artificial para empresas',
    'agente de IA Guatemala',
    'automatizar atención al cliente',
    'dashboard financiero automático',
    'Nucli AI',
    'AI automation Guatemala',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Nucli AI — Tu negocio puede generar más sin que tú trabajes más',
    description: 'Construimos agentes de IA que trabajan 24/7 por tu negocio. Atención al cliente, ventas, finanzas y operaciones automatizadas. Tu primer agente en menos de 30 días.',
    url: 'https://nucli.solutions',
    siteName: 'Nucli AI',
    locale: 'es_GT',
    type: 'website',
    images: [{ url: '/logonuclipng.jpg', width: 800, height: 800, alt: 'Nucli AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nucli AI — Agentes de IA para tu negocio',
    description: 'Construimos tu equipo de agentes de inteligencia artificial. Guatemala.',
    images: ['/logonuclipng.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nucli.solutions/#business',
      name: 'Nucli AI',
      url: 'https://nucli.solutions',
      logo: 'https://nucli.solutions/logonuclipng.jpg',
      description: 'Agencia de automatización con inteligencia artificial en Guatemala. Construimos agentes de IA personalizados para negocios: atención al cliente, ventas, finanzas, operaciones y más.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GT',
        addressLocality: 'Guatemala',
        addressRegion: 'Guatemala',
      },
      areaServed: { '@type': 'Country', name: 'Guatemala' },
      sameAs: ['https://www.instagram.com/nucli.ai'],
      priceRange: 'Q$$',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://calendly.com/stevanmarroquin/consulta-gratuita-nucli-ai',
        availableLanguage: ['Spanish'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Agentes de IA',
        itemListElement: [
          { '@type': 'Offer', name: 'Agente de atención al cliente', description: 'Responde clientes, califica leads y agenda citas 24/7 automáticamente.' },
          { '@type': 'Offer', name: 'Agente de ventas y seguimiento', description: 'Follow-up automático a cada lead. Sin ventas perdidas por falta de atención.' },
          { '@type': 'Offer', name: 'Agente financiero', description: 'Dashboard financiero en tiempo real. Sin Excel. Sin preguntarle a nadie.' },
          { '@type': 'Offer', name: 'Agente de captación', description: 'Página web con IA integrada que convierte visitas en conversaciones de venta.' },
          { '@type': 'Offer', name: 'Agente de operaciones', description: 'Sistema interno para que tu equipo opere sin depender de ti.' },
          { '@type': 'Offer', name: 'Agente de reactivación', description: 'Reactiva clientes dormidos con mensajes conversacionales de IA.' },
          { '@type': 'Offer', name: 'Agente de reputación', description: 'Solicita reseñas automáticamente, responde con IA y genera referidos.' },
          { '@type': 'Offer', name: 'App a la medida', description: 'Producto digital completo: agendamiento, membresías, pedidos y más.' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda en estar listo mi primer agente de IA?',
          acceptedAnswer: { '@type': 'Answer', text: 'Tu primer agente está entregado y funcionando en menos de 30 días desde que decidimos avanzar.' },
        },
        {
          '@type': 'Question',
          name: '¿Necesito saber de tecnología para implementar un agente de IA?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Tú describes cómo opera tu negocio y nosotros construimos, implementamos y mantenemos todo. No necesitas aprender nada técnico.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si no veo resultados?',
          acceptedAnswer: { '@type': 'Answer', text: 'Si tu negocio no ve resultados medibles en 60 días, te devolvemos cada quetzal y retiramos cada sistema que construimos. Sin preguntas, sin condiciones.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un agente de IA en Guatemala?',
          acceptedAnswer: { '@type': 'Answer', text: 'Los precios comienzan desde Q2,500 de setup más una mensualidad desde Q200/mes dependiendo del agente. Cada agente adicional tiene descuento acumulado de hasta un 20%.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué tipos de agentes de IA ofrecen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ofrecemos agentes de atención al cliente, ventas y seguimiento, financiero, captación (web con IA), operaciones, reactivación de clientes dormidos, reputación y apps a la medida.' },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nucli.solutions/#website',
      url: 'https://nucli.solutions',
      name: 'Nucli AI',
      description: 'Agentes de inteligencia artificial para negocios en Guatemala',
      inLanguage: 'es-GT',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-GT">
      <head>
        <link rel="icon" href="/logonuclipng.jpg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

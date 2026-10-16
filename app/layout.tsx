import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jhonal80.com'),
  title: 'JHONAL 80 | Fábrica y Marcas de Confección en Colombia - Ventas al por Mayor',
  description:
    "Empresa colombiana especializada en confección y comercialización mayorista de camisetas, polos y lencería de alta rotación con las marcas Romper, Jhonal, Fénix y Lady's.",
  icons: {
    icon: '/buho-jhonal.png',
    shortcut: '/buho-jhonal.png',
    apple: '/buho-jhonal.png',
  },
  openGraph: {
    title: 'JHONAL 80 | Fábrica y Marcas de Confección en Colombia',
    description:
      "Confección nacional directa de fábrica para mayoristas y distribuidores. Conoce los catálogos 2026 de nuestras marcas Romper, Jhonal, Fénix y Lady's.",
    url: 'https://jhonal80.com',
    siteName: 'Jhonal 80',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/PUBLI.png',
        width: 1200,
        height: 630,
        alt: 'Jhonal 80 - Fábrica y Marcas de Confección en Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JHONAL 80 | Fábrica y Marcas de Confección en Colombia',
    description:
      "Confección nacional directa de fábrica para mayoristas y distribuidores. Marcas Romper, Jhonal, Fénix y Lady's.",
    images: ['/PUBLI.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08090C] text-zinc-100 font-sans selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}

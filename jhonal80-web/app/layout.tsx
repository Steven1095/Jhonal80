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
  title: 'JHONAL 80 | Holding Textil & Confección Multimarca Colombia',
  description: 'Empresa colombiana especializada en confección y comercialización mayorista de camisetas y polos de alta rotación con las marcas Romper, Jhonal, Fénix y Lady\'s.',
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

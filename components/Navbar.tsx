'use client'
import { useState } from 'react'
import { MessageCircle, Menu, X, Award, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar({ settings }: { settings?: any }) {
  const [open, setOpen] = useState(false)
  const wa = settings?.whatsappNumber || '573000000000'

  return (
    <>
      {/* Top Bar Notification */}
      <div className="bg-gradient-to-r from-rose-950 via-zinc-900 to-zinc-950 border-b border-rose-800/80 py-2.5 px-4 text-xs text-center text-zinc-200 flex flex-wrap items-center justify-center gap-2.5 shadow-md relative z-50">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-600 text-white shadow-sm uppercase tracking-wider animate-pulse">
          <Sparkles className="w-3 h-3" /> Oportunidad mayorista
        </span>
        <span className="font-medium text-zinc-100">
          ¿Buscas rentabilidad para tu tienda o negocio? <strong>Conviértete en distribuidor oficial de Jhonal 80</strong> y compra a precios directos de fábrica.
        </span>
        <a
          href="#distribuidores"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-zinc-950 hover:bg-rose-500 hover:text-white font-extrabold text-[11px] uppercase tracking-wider transition shadow-sm"
        >
          <span>Quiero ser distribuidor →</span>
        </a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 py-2 flex items-center justify-between">
          
          {/* Brand Logo con Medallón Búho Jhonal 80 */}
          <a href="#" className="flex items-center gap-4 group relative py-1">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-600/60 via-amber-500/30 to-zinc-100/50 blur-lg group-hover:blur-xl group-hover:scale-115 transition-all duration-300" />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-b from-white via-zinc-400 to-zinc-900 shadow-2xl group-hover:from-rose-400 group-hover:to-zinc-100 transition-colors duration-300">
                <img
                  src="/buho-jhonal.png"
                  alt="Logo Jhonal 80 Búho"
                  className="w-full h-full object-contain rounded-full bg-zinc-950 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-wide text-white uppercase group-hover:text-zinc-100 transition">
                  JHONAL.<span className="text-rose-500">80</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[9px] font-black bg-zinc-800 text-zinc-300 border border-zinc-700 shadow-sm tracking-widest uppercase">
                  EST. 2007
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <a href="#portafolio" className="hover:text-white transition hover:scale-105">Colección 2026</a>
            <a href="#nosotros" className="hover:text-white transition hover:scale-105">Fábrica</a>
            <a
              href="#distribuidores"
              className="px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 hover:bg-rose-500 hover:text-white font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Ser distribuidor</span>
            </a>
            <a href="#catalogos" className="hover:text-white transition hover:scale-105">Catálogos</a>
            <a href="#cotizador" className="hover:text-white transition hover:scale-105">Cotizar</a>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent('Hola Jhonal 80, deseo recibir información comercial mayorista.')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-900/30 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contáctanos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 space-y-4"
            >
              <a onClick={() => setOpen(false)} href="#portafolio" className="block text-base font-medium text-zinc-300 hover:text-white">Colección 2026</a>
              <a onClick={() => setOpen(false)} href="#nosotros" className="block text-base font-medium text-zinc-300 hover:text-white">Fábrica</a>
              <a onClick={() => setOpen(false)} href="#distribuidores" className="block text-base font-bold text-rose-400 hover:text-white flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Ser distribuidor</span>
              </a>
              <a onClick={() => setOpen(false)} href="#catalogos" className="block text-base font-medium text-zinc-300 hover:text-white">Catálogos</a>
              <a onClick={() => setOpen(false)} href="#cotizador" className="block text-base font-medium text-zinc-300 hover:text-white">Cotizar</a>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${wa}?text=${encodeURIComponent('Hola Jhonal 80, deseo recibir información comercial mayorista.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp comercial</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

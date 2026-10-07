'use client'
import { motion } from 'framer-motion'
import { Handshake, ArrowRight, Grid, BadgePercent, Truck, Layers, Award } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

export function HeroSection({ brands, settings }: { brands?: any[]; settings?: any }) {
  const getBrandLogo = (brandName: string, defaultPath: string) => {
    if (brands && brands.length > 0) {
      const found = brands.find(
        (b) => b.name?.toLowerCase().trim() === brandName.toLowerCase().trim()
      )
      if (found && found.logo?.asset) {
        return urlForImage(found.logo).width(300).url()
      }
    }
    return defaultPath
  }

  const badgeText = settings?.heroBadge || 'Confección y diseño 100% colombiano • Desde 2007'
  const titleText = settings?.heroTitle || 'Fabricamos moda que impulsa tus ventas'
  const subtitleText = settings?.heroSubtitle || '18 años de experiencia en confección colombiana al servicio de tu negocio.'
  const ctaPrimaryText = settings?.heroCtaPrimaryText || 'Quiero ser distribuidor oficial'
  const ctaSecondaryText = settings?.heroCtaSecondaryText || 'Ver las 4 marcas'

  const card1Title = settings?.heroCard1Title || 'Precios de fábrica'
  const card1Desc = settings?.heroCard1Desc || 'Ganas más sin intermediarios'

  const card2Title = settings?.heroCard2Title || 'Envíos a toda Colombia'
  const card2Desc = settings?.heroCard2Desc || 'Despachos rápidos y seguros'

  const card3Title = settings?.heroCard3Title || '4 marcas en una compra'
  const card3Desc = settings?.heroCard3Desc || 'Surtido para todo tipo de cliente'

  const card4Title = settings?.heroCard4Title || 'Acompañamiento real'
  const card4Desc = settings?.heroCard4Desc || 'Te ayudamos a vender más'

  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6">

          {/* Emblema Logo Jhonal 80 Principal con Halo de Luz */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center pt-2"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-600/40 via-amber-500/20 to-zinc-100/30 blur-2xl group-hover:blur-3xl transition-all scale-125" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-gradient-to-b from-white via-zinc-400 to-zinc-900 shadow-2xl">
                <img
                  src="/buho-jhonal.png"
                  alt="Emblema Oficial Jhonal 80"
                  className="w-full h-full object-contain rounded-full bg-zinc-950 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Sello Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 text-xs font-medium backdrop-blur-md shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{badgeText}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white"
          >
            {titleText}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl text-zinc-300 font-normal max-w-3xl mx-auto leading-relaxed"
          >
            {subtitleText}
          </motion.p>

          {/* BLOQUE: NUESTRAS MARCAS (4 LOGOS HERO) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 pb-2 max-w-5xl mx-auto"
          >
            <div className="text-center mb-5">
              <span className="inline-block px-4 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-bold uppercase tracking-widest text-zinc-300 shadow-sm">
                Nuestras Marcas
              </span>
            </div>

            {/* 4 Brand Logo Cards Grid (Fénix, Romper, Jhonal, Lady's) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Logo 1: Fénix */}
              <a
                href="#portafolio"
                className="group relative rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-amber-500/60 p-4 sm:p-5 flex flex-col items-center justify-center h-36 sm:h-40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-950/30"
              >
                <div className="w-full h-16 flex items-center justify-center overflow-hidden">
                  <img
                    src={getBrandLogo('Fénix', '/logo-fenix-clean.png')}
                    alt="Logo Fénix"
                    className="max-h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 group-hover:text-amber-400 transition">Fénix</span>
                  <span className="block text-[10px] text-zinc-400">Oversize & Moda</span>
                </div>
              </a>

              {/* Logo 2: Romper */}
              <a
                href="#portafolio"
                className="group relative rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-orange-500/60 p-4 sm:p-5 flex flex-col items-center justify-center h-36 sm:h-40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-950/30"
              >
                <div className="w-full h-16 flex items-center justify-center overflow-hidden">
                  <img
                    src={getBrandLogo('Romper', '/logo-romper-clean.png')}
                    alt="Logo Romper"
                    className="max-h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(234,88,12,0.35)] group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 group-hover:text-orange-400 transition">Romper</span>
                  <span className="block text-[10px] text-zinc-400">Conjuntos & Polos</span>
                </div>
              </a>

              {/* Logo 3: Jhonal */}
              <a
                href="#portafolio"
                className="group relative rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-blue-500/60 p-4 sm:p-5 flex flex-col items-center justify-center h-36 sm:h-40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div className="w-full h-16 flex items-center justify-center overflow-hidden">
                  <img
                    src={getBrandLogo('Jhonal', '/buho-jhonal.png')}
                    alt="Logo Jhonal 80"
                    className="max-h-16 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(37,99,235,0.35)] group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 group-hover:text-blue-400 transition">Jhonal</span>
                  <span className="block text-[10px] text-zinc-400">Licrados & Polos</span>
                </div>
              </a>

              {/* Logo 4: Lady's */}
              <a
                href="#portafolio"
                className="group relative rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-pink-500/60 p-4 sm:p-5 flex flex-col items-center justify-center h-36 sm:h-40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-950/30"
              >
                <div className="w-full h-16 flex items-center justify-center overflow-hidden">
                  <img
                    src={getBrandLogo("Lady's", '/logo-ladys-clean.png')}
                    alt="Logo Lady's"
                    className="max-h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(219,39,119,0.35)] group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 group-hover:text-pink-400 transition">Lady's</span>
                  <span className="block text-[10px] text-zinc-400">Lencería & Ropa Interior</span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#distribuidores"
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white shadow-2xl shadow-rose-950/80 hover:scale-105 transition-all flex items-center gap-2.5 border border-rose-400/30"
            >
              <Handshake className="w-5 h-5" />
              <span>{ctaPrimaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#marcas"
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Grid className="w-4 h-4 text-zinc-400" />
              <span>{ctaSecondaryText}</span>
            </a>
          </motion.div>

          {/* Distributor Pillars Quick Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-5xl mx-auto text-left"
          >
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-md flex items-start gap-3 hover:border-rose-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                <BadgePercent className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white">{card1Title}</div>
                <div className="text-[11px] text-zinc-400">{card1Desc}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-md flex items-start gap-3 hover:border-blue-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white">{card2Title}</div>
                <div className="text-[11px] text-zinc-400">{card2Desc}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-md flex items-start gap-3 hover:border-amber-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white">{card3Title}</div>
                <div className="text-[11px] text-zinc-400">{card3Desc}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-md flex items-start gap-3 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white">{card4Title}</div>
                <div className="text-[11px] text-zinc-400">{card4Desc}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

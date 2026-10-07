'use client'
import { motion } from 'framer-motion'
import { Factory, ArrowRight, CheckCircle2 } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

export function FactorySection({ settings }: { settings?: any }) {
  const factoryBadge = settings?.factoryBadge || 'Nuestra fábrica y talleres'
  const factoryTitle = settings?.factoryTitle || 'Más de 17 años vistiendo a Colombia con confección de verdad'
  const factoryP1 = settings?.factoryParagraph1 || 'En Jhonal 80 nacimos en 2007 con un objetivo muy claro: fabricar ropa con excelente horma, telas garantizadas y diseños que realmente roten rápido en los mostradores.'
  const factoryP2 = settings?.factoryParagraph2 || 'Contamos con planta física propia, talleres de estampado en serigrafía, mesas de corte y un equipo humano calificado. No somos intermediarios: controlamos todo el proceso desde el corte de la tela hasta el empaque final para entregarte calidad constante y precios directos de fábrica.'

  const stat1Num = settings?.factoryStat1Number || '+17 años'
  const stat1Label = settings?.factoryStat1Label || 'Experiencia'
  const stat1Desc = settings?.factoryStat1Desc || 'Tradición y solidez en el mercado textil'

  const stat2Num = settings?.factoryStat2Number || '100%'
  const stat2Label = settings?.factoryStat2Label || 'Hecho en Colombia'
  const stat2Desc = settings?.factoryStat2Desc || 'Mano de obra y confección nacional'

  const stat3Num = settings?.factoryStat3Number || 'Directo'
  const stat3Label = settings?.factoryStat3Label || 'De fábrica'
  const stat3Desc = settings?.factoryStat3Desc || 'Sin sobrecostos ni terceros'

  const photo1Url = settings?.factoryPhoto1?.asset
    ? urlForImage(settings.factoryPhoto1).width(800).url()
    : '/WhatsApp Image 2026-09-18 at 3.55.53 PM.jpeg'
  const photo1Title = settings?.factoryPhoto1Title || 'Talleres de serigrafía y estampado'
  const photo1Subtitle = settings?.factoryPhoto1Subtitle || 'Pulpos de impresión textil y mesas de corte de alto volumen'

  const photo2Url = settings?.factoryPhoto2?.asset
    ? urlForImage(settings.factoryPhoto2).width(600).url()
    : '/WhatsApp Image 2026-09-18 at 3.55.54 PM.jpeg'
  const photo2Title = settings?.factoryPhoto2Title || 'Área de confección y empaque'
  const photo2Subtitle = settings?.factoryPhoto2Subtitle || 'Revisión prenda por prenda'

  const videoUrl = settings?.factoryVideoUrl || '/WhatsApp Video 2026-09-18 at 3.55.54 PM.mp4'

  return (
    <section
      id="nosotros"
      className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-zinc-950 relative border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Story & Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Factory className="w-3.5 h-3.5" />
              <span>{factoryBadge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              {factoryTitle}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {factoryP1}
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {factoryP2}
            </p>

            {/* 3 Value Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
                <div className="font-heading font-black text-2xl text-rose-500">{stat1Num}</div>
                <div className="text-xs font-bold text-white mt-1">{stat1Label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{stat1Desc}</div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
                <div className="font-heading font-black text-2xl text-blue-500">{stat2Num}</div>
                <div className="text-xs font-bold text-white mt-1">{stat2Label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{stat2Desc}</div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
                <div className="font-heading font-black text-2xl text-emerald-500">{stat3Num}</div>
                <div className="text-xs font-bold text-white mt-1">{stat3Label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{stat3Desc}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#distribuidores"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition shadow-xl"
              >
                <span>Trabaja con nosotros</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: Plant Photos & Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Photo 1: Serigrafía y Corte Table */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl group bg-zinc-950">
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={photo1Url}
                  alt={photo1Title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Planta física activa</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-white text-base drop-shadow-md">{photo1Title}</h4>
                    <p className="text-xs text-zinc-300 drop-shadow-md">{photo1Subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid: Photo 2 & Video Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Photo 2: Confección y almacenamiento */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group bg-zinc-950 h-48">
                <img
                  src={photo2Url}
                  alt={photo2Title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-bold text-white block drop-shadow-md">{photo2Title}</span>
                  <span className="text-[10px] text-zinc-300 drop-shadow-md">{photo2Subtitle}</span>
                </div>
              </div>

              {/* Video 1: Real Production Video Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-48 flex items-center justify-center">
                <video
                  key={videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={photo2Url}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-600/90 text-white shadow-md">
                    Vídeo
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


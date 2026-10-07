'use client'
import { motion } from 'framer-motion'
import { Award, BadgePercent, Layers, RefreshCw, Camera, Headphones, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react'

export function DistributorPillars({ settings }: { settings?: any }) {
  const wa = settings?.whatsappNumber || '573000000000'
  const distBadge = settings?.distributorBadge || 'Gana con nosotros'
  const distTitle = settings?.distributorTitle || 'Conviértete en distribuidor de Jhonal.80'
  const distDesc = settings?.distributorDescription || 'Accede a precios directos de fábrica, acompañamiento comercial constante y un portafolio de 4 marcas diseñadas para rotar rápido.'
  const bannerQuote = settings?.distributorBannerQuote || '“Buscamos aliados comerciales a largo plazo. Si tu negocio crece, nosotros crecemos contigo.”'

  return (
    <section
      id="distribuidores"
      className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>{distBadge}</span>
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white leading-tight">
            {distTitle}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {distDesc}
          </p>
        </div>

        {/* Beneficios para nuestro aliado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl relative mb-12"
        >
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-8 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Beneficios para nuestro aliado:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgePercent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">PRECIO</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">Directo de fábrica para mejorar tu rentabilidad.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">PORTAFOLIO</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">4 marcas para atender diferentes clientes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">ROTACIÓN</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">Prendas seleccionadas para vender y recomprar.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">MARKETING</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">Fotos y contenido para ayudarte a vender.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">ACOMPAÑAMIENTO</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">Asesoría comercial antes, durante y después de tu compra.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">CRECIMIENTO</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">Beneficios por volumen y una relación pensada para crecer juntos.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Highlight Quote Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-700/80 text-center shadow-lg">
            <p className="font-heading font-medium text-base sm:text-lg text-zinc-200">
              {bannerQuote}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="#cotizador"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
              >
                <span>Quiero ser aliado mayorista</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick 3-Step Distributor Onboarding Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-zinc-900/80 to-zinc-950 border border-rose-500/30 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-400">Paso a paso</span>
            <h3 className="font-heading font-bold text-2xl text-white mt-1">¿Cómo empezar a vender nuestras marcas?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-lg">1</div>
              <h4 className="font-bold text-white text-sm">Pide tu lista de precios</h4>
              <p className="text-xs text-zinc-400 mt-1">Escríbenos por WhatsApp o déjanos tus datos en el cotizador de abajo.</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-lg">2</div>
              <h4 className="font-bold text-white text-sm">Escoge tus prendas</h4>
              <p className="text-xs text-zinc-400 mt-1">Combina referencias de Romper, Jhonal, Fénix y Lady's a tu gusto.</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-lg">3</div>
              <h4 className="font-bold text-white text-sm">Recibe en tu ciudad y vende</h4>
              <p className="text-xs text-zinc-400 mt-1">Te enviamos con garantía de confección y fotos para que empieces a vender.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent('Hola Jhonal 80, deseo recibir información sobre cómo ser distribuidor mayorista.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir información por WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Flame, Heart, ArrowRight } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

const fallbackBrands = [
  {
    name: 'ROMPER',
    tagline: 'Streetwear y deportivo',
    accentColor: '#EA580C',
    logo: '/logo-romper-clean.png',
    description: 'Conjuntos casuales, camisetas en tela fría 96% algodón con 4% spandex, polos deportivos y línea infantil Romper Kids.',
    starReference: '6016 / 6005',
    technology: 'Tela fría con spandex',
    icon: Sparkles,
  },
  {
    name: 'JHONAL',
    tagline: 'Clásicos y urbanos',
    accentColor: '#2563EB',
    logo: '/buho-jhonal.png',
    description: 'La línea preferida para hombre: camisetas cuello redondo en algodón licrado de ajuste impecable y polos con estilo.',
    starReference: '6001-00 al 05',
    technology: 'Algodón licrado premium',
    icon: ShieldCheck,
  },
  {
    name: 'FÉNIX',
    tagline: 'Oversize y moda urbana',
    accentColor: '#D97706',
    logo: '/logo-fenix-clean.png',
    description: 'Siluetas oversize en tendencia, prendas con excelente peso, diseños unisex y la colección Fénix Dama para quienes buscan moda moderna.',
    starReference: 'Oversize y dama',
    technology: 'Cortes modernos y holgados',
    icon: Flame,
  },
  {
    name: 'LADY\'S',
    tagline: 'Lencería y ropa interior',
    accentColor: '#DB2777',
    logo: '/logo-ladys-clean.png',
    description: 'Línea femenina especializada en lencería y ropa interior invisible y con encaje: señorial, brasileras, semitangas y tangas sin costuras.',
    starReference: 'Invisible y encaje',
    technology: 'S, M, L y XL',
    icon: Heart,
  },
]

export function BrandGrid({ brands, settings }: { brands?: any[]; settings?: any }) {
  // Merge Sanity brands with fallbacks so the grid always looks complete even while adding brands one by one
  const displayBrands = (() => {
    if (!brands || brands.length === 0) return fallbackBrands
    
    // Map fallback brands, overriding with any matching Sanity brand (by name/slug), and append any new ones
    const merged = fallbackBrands.map((fb) => {
      const match = brands.find((b: any) => {
        const bNorm = (b.name || '').toLowerCase().replace(/[^a-z0-9]/g, '')
        const fbNorm = fb.name.toLowerCase().replace(/[^a-z0-9]/g, '')
        return bNorm.includes(fbNorm) || fbNorm.includes(bNorm) || b.slug?.current === fbNorm
      })
      return match ? { ...fb, ...match } : fb
    })

    // Also include any new brand created in Sanity that wasn't in the default 4
    brands.forEach((b: any) => {
      const exists = merged.some((m) => {
        const bNorm = (b.name || '').toLowerCase().replace(/[^a-z0-9]/g, '')
        const mNorm = m.name.toLowerCase().replace(/[^a-z0-9]/g, '')
        return bNorm === mNorm || (bNorm.includes(mNorm) && mNorm.length > 3)
      })
      if (!exists) merged.push(b)
    })

    return merged
  })()

  const brandsBadge = settings?.brandsBadge || 'Nuestras 4 marcas'
  const brandsTitle = settings?.brandsTitle || 'Ropa pensada para rotar y vender todos los días'
  const brandsDesc = settings?.brandsDescription || 'Cada marca tiene su propio estilo para que puedas ofrecerle a tus clientes justo lo que están buscando, con excelente confección y telas garantizadas.'

  const getIcon = (name: string = '') => {
    const n = name.toUpperCase()
    if (n.includes('ROMPER')) return Sparkles
    if (n.includes('JHONAL')) return ShieldCheck
    if (n.includes('FENIX') || n.includes('FÉNIX')) return Flame
    if (n.includes('LADY')) return Heart
    return Sparkles
  }

  const getLogo = (name: string = '', customLogo?: any) => {
    if (customLogo) {
      if (typeof customLogo === 'string') return customLogo
      if (customLogo.asset) return urlForImage(customLogo).width(400).url()
    }
    switch (name.toUpperCase()) {
      case 'ROMPER': return '/logo-romper-clean.png'
      case 'JHONAL': return '/buho-jhonal.png'
      case 'FÉNIX':
      case 'FENIX': return '/logo-fenix-clean.png'
      case 'LADY\'S':
      case 'LADYS': return '/logo-ladys-clean.png'
      default: return '/buho-jhonal.png'
    }
  }

  return (
    <section id="marcas" className="py-20 bg-zinc-950/60 relative border-t border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500">{brandsBadge}</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            {brandsTitle}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {brandsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayBrands.map((b: any, index: number) => {
            const IconComponent = getIcon(b.name)
            const brandLogo = getLogo(b.name, b.logo)

            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-6 relative overflow-hidden group border transition-all"
                style={{ borderColor: `${b.accentColor || '#EA580C'}33` }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all opacity-20 group-hover:opacity-40"
                  style={{ backgroundColor: b.accentColor || '#EA580C' }}
                />
                
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${b.accentColor || '#EA580C'}20`,
                      color: b.accentColor || '#EA580C',
                      borderColor: `${b.accentColor || '#EA580C'}40`,
                    }}
                  >
                    {b.tagline || 'Colección'}
                  </span>
                  <IconComponent className="w-5 h-5" style={{ color: b.accentColor || '#EA580C' }} />
                </div>

                <div className="h-14 flex items-center mb-2">
                  <img
                    src={brandLogo}
                    alt={b.name}
                    className="max-h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform"
                  />
                </div>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                  {b.description}
                </p>

                <div className="my-4 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                  <div className="flex justify-between font-mono">
                    <span>Ref. más pedidas:</span>
                    <strong className="text-white">{b.starReference || 'Disponibles'}</strong>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Tipo de tela:</span>
                    <span style={{ color: b.accentColor || '#EA580C' }}>{b.technology || 'Confección Nacional'}</span>
                  </div>
                </div>

                <a
                  href="#portafolio"
                  className="w-full mt-2 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border"
                  style={{
                    backgroundColor: `${b.accentColor || '#EA580C'}15`,
                    borderColor: `${b.accentColor || '#EA580C'}30`,
                    color: b.accentColor || '#EA580C',
                  }}
                >
                  <span>Ver prendas {b.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

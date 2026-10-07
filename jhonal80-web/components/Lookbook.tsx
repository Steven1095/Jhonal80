'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Image as ImageIcon } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

const defaultCatalogProducts = [
  // Romper
  {
    _id: '1',
    brandName: 'Romper',
    referenceCode: 'REF: 6002-02',
    title: 'Camiseta polo Romper azul petróleo',
    subtitle: 'Confección premium con detalles en cuello',
    category: 'Polo hombre deportiva y casual',
    composition: 'Algodón con spandex suave',
    fit: 'Regular fit',
    image: '/POLO HOMBRE ROMPER REF 6002 02.jpeg',
    colors: ['#0284C7', '#1E293B', '#E4E4E7'],
  },
  {
    _id: '2',
    brandName: 'Romper',
    referenceCode: 'REF: 6002-03',
    title: 'Camiseta polo Romper vino y gris',
    subtitle: 'Estilo clásico contemporáneo',
    category: 'Polo hombre casual',
    composition: 'Algodón suave de alta rotación',
    fit: 'Ajuste anatómico cómodo',
    image: '/POLO HOMBRE ROMPER REF 6002 03.jpeg',
    colors: ['#881337', '#9CA3AF', '#18181B'],
  },
  {
    _id: '3',
    brandName: 'Romper',
    referenceCode: 'REF: 6002-04',
    title: 'Camiseta polo Romper blanca y azul',
    subtitle: 'Combinación fresca y juvenil',
    category: 'Polo hombre sport',
    composition: 'Algodón respirable',
    fit: 'Corte moderno',
    image: '/POLO HOMBRE ROMPER REF 6002 04.jpeg',
    colors: ['#FFFFFF', '#2563EB', '#374151'],
  },
  // Jhonal
  {
    _id: '4',
    brandName: 'Jhonal',
    referenceCode: 'REF: 6001-01',
    title: 'Camiseta polo Jhonal café, blanca y gris',
    subtitle: 'Diseño exclusivo con franjas frontales',
    category: 'Polo hombre clásica',
    composition: 'Algodón licrado suave',
    fit: 'Silueta perfecta',
    image: '/Camiseta polo cafe blanca gris.jpeg',
    colors: ['#78350F', '#FFFFFF', '#9CA3AF'],
  },
  {
    _id: '5',
    brandName: 'Jhonal',
    referenceCode: 'REF: 6001-02',
    title: 'Camiseta polo Jhonal café elegante',
    subtitle: 'Tono tierra versátil para toda ocasión',
    category: 'Polo hombre urbana',
    composition: 'Algodón licrado premium',
    fit: 'Ajuste anatómico',
    image: '/Camiseta polo cafe.jpeg',
    colors: ['#78350F', '#B45309', '#1C1917'],
  },
  {
    _id: '6',
    brandName: 'Jhonal',
    referenceCode: 'REF: 6001-03',
    title: 'Camiseta polo Jhonal gris perla',
    subtitle: 'Básico indispensable para tienda',
    category: 'Polo hombre sport',
    composition: 'Algodón suave 95/5',
    fit: 'Regular fit confort',
    image: '/Camiseta polo gris.jpeg',
    colors: ['#9CA3AF', '#4B5563', '#1F2937'],
  },
  {
    _id: '7',
    brandName: 'Jhonal',
    referenceCode: 'REF: 6001-04',
    title: 'Camiseta polo Jhonal tricolor',
    subtitle: 'Franjas horizontales de tendencia',
    category: 'Polo hombre moderna',
    composition: 'Algodón licrado de alta durabilidad',
    fit: 'Corte estilizado',
    image: '/Camiseta polo tres colores horizntales.jpeg',
    colors: ['#1E293B', '#DC2626', '#FFFFFF'],
  },
  // Fénix
  {
    _id: '8',
    brandName: 'Fénix',
    referenceCode: 'REF: FNX-01',
    title: 'Camiseta polo Fénix diseño especial',
    subtitle: 'Cortes limpios y cuello estructurado',
    category: 'Polo y moda urbana',
    composition: 'Algodón peinado de alto gramaje',
    fit: 'Corte moderno urbano',
    image: '/WhatsApp Image 2026-09-11 at 9.44.49 AM.jpeg',
    colors: ['#09090B', '#F4F4F5', '#71717A'],
  },
  {
    _id: '9',
    brandName: 'Fénix',
    referenceCode: 'REF: FNX-02',
    title: 'Colección Fénix urbana con cuello tejido',
    subtitle: 'Detalles diferenciadores para tu mostrador',
    category: 'Línea contemporánea',
    composition: 'Algodón suave de alta resistencia',
    fit: 'Silueta confortable',
    image: '/WhatsApp Image 2026-09-11 at 9.44.55 AM.jpeg',
    colors: ['#1E3A8A', '#F3F4F6', '#B45309'],
  },
  // Lady's (Lencería y Ropa Interior Femenina Real)
  {
    _id: '10',
    brandName: "Lady's",
    referenceCode: 'REF: LDY-SEN-01',
    title: 'Panty señorial invisible Lady\'s',
    subtitle: 'Corte alto de máximo confort sin costuras visibles',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra suave y elástica de tacto cero',
    fit: 'Tallas S, M, L, XL',
    image: '/producto-ladys-senorial-invisible.jpg',
    colors: ['#FCE7F3', '#E4D5C7', '#18181B', '#FFFFFF'],
  },
  {
    _id: '11',
    brandName: "Lady's",
    referenceCode: 'REF: LDY-BRA-01',
    title: 'Brasilera invisible Lady\'s',
    subtitle: 'Silueta invisible corte láser ideal para todo tipo de prendas',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra corte láser ultra suave',
    fit: 'Tallas S, M, L, XL',
    image: '/producto-ladys-brasilera-invisible.jpg',
    colors: ['#F43F5E', '#E4D5C7', '#18181B', '#FCE7F3'],
  },
  {
    _id: '12',
    brandName: "Lady's",
    referenceCode: 'REF: LDY-SEM-01',
    title: 'Semitanga invisible Lady\'s',
    subtitle: 'Diseño anatómico y cómodo de alta rotación para tiendas',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra transpirable',
    fit: 'Tallas S, M, L, XL',
    image: '/producto-ladys-semitanga-invisible.jpg',
    colors: ['#FB7185', '#E4D5C7', '#09090B', '#FFFFFF'],
  },
  {
    _id: '13',
    brandName: "Lady's",
    referenceCode: 'REF: LDY-ENC-01',
    title: 'Brasilera con encaje Lady\'s',
    subtitle: 'Detalles delicados en encaje suave y elástico',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Encaje fino antialérgico y microfibra',
    fit: 'Tallas S, M, L, XL',
    image: '/producto-ladys-brasilera-encaje.jpg',
    colors: ['#BE185D', '#18181B', '#FCE7F3', '#FFFFFF'],
  },
  {
    _id: '14',
    brandName: "Lady's",
    referenceCode: 'REF: LDY-ENC-02',
    title: 'Semitanga con encaje Lady\'s',
    subtitle: 'Estilo femenino y sofisticado para mostrador',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Encaje suave con microfibra premium',
    fit: 'Tallas S, M, L, XL',
    image: '/producto-ladys-semitanga-encaje.jpg',
    colors: ['#BE185D', '#E4D5C7', '#18181B', '#FFFFFF'],
  },
  // Fénix Dama (Deportiva)
  {
    _id: '15',
    brandName: 'Fénix',
    referenceCode: 'REF: 8003-00',
    title: 'Camiseta deportiva Fénix Dama Athletic',
    subtitle: 'Prenda ligera y transpirable para entrenamiento y casual',
    category: 'Ropa deportiva femenina',
    composition: '94% poliéster, 6% spandex',
    fit: 'Silueta deportiva femenina',
    image: '/producto-fenix-dama-athletic.jpg',
    colors: ['#09090B', '#E11D48', '#38BDF8'],
  },
  // Romper Kids
  {
    _id: '16',
    brandName: 'Romper',
    referenceCode: 'REF: 6005-KID',
    title: 'Colección polo Romper contrastes',
    subtitle: 'Variedad de colores y combinaciones',
    category: 'Línea casual y juvenil',
    composition: 'Algodón suave 96/4',
    fit: 'Confort elástico',
    image: '/WhatsApp Image 2026-09-11 at 9.45.00 AM.jpeg',
    colors: ['#059669', '#10B981', '#111827'],
  },
]

export function Lookbook({ products, settings }: { products?: any[]; settings?: any }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const wa = settings?.whatsappNumber || '573000000000'

  const items = products && products.length > 0 ? products : defaultCatalogProducts

  const normalize = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')

  const filtered =
    activeFilter === 'all'
      ? items
      : items.filter((p) => normalize(p.brandName || '') === normalize(activeFilter))

  const getImageSrc = (img: any) => {
    if (!img) return null
    if (typeof img === 'string') return img
    if (img.asset) return urlForImage(img).width(700).url()
    return null
  }

  const lookbookBadge = settings?.lookbookBadge || 'Fotos de catálogo 2026'
  const lookbookTitle = settings?.lookbookTitle || 'Prendas destacadas para surtir tu negocio'
  const lookbookDesc = settings?.lookbookDescription || 'Mira algunos de nuestros modelos más vendidos. Puedes pedir cotización directa por WhatsApp con la referencia que te guste para darte disponibilidad de colores y precios al por mayor.'

  return (
    <section id="portafolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">{lookbookBadge}</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              {lookbookTitle}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl">
              {lookbookDesc}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs transition font-semibold ${
                activeFilter === 'all' ? 'bg-white text-zinc-900 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Todas las marcas
            </button>
            <button
              onClick={() => setActiveFilter('Romper')}
              className={`px-4 py-2 rounded-xl text-xs transition font-semibold ${
                activeFilter === 'Romper' ? 'bg-orange-500 text-white font-bold' : 'text-zinc-400 hover:text-orange-400'
              }`}
            >
              Romper
            </button>
            <button
              onClick={() => setActiveFilter('Jhonal')}
              className={`px-4 py-2 rounded-xl text-xs transition font-semibold ${
                activeFilter === 'Jhonal' ? 'bg-blue-600 text-white font-bold' : 'text-zinc-400 hover:text-blue-400'
              }`}
            >
              Jhonal
            </button>
            <button
              onClick={() => setActiveFilter('Fénix')}
              className={`px-4 py-2 rounded-xl text-xs transition font-semibold ${
                normalize(activeFilter) === 'fenix' ? 'bg-amber-600 text-white font-bold' : 'text-zinc-400 hover:text-amber-400'
              }`}
            >
              Fénix
            </button>
            <button
              onClick={() => setActiveFilter('Ladys')}
              className={`px-4 py-2 rounded-xl text-xs transition font-semibold ${
                normalize(activeFilter) === 'ladys' ? 'bg-pink-600 text-white font-bold' : 'text-zinc-400 hover:text-pink-400'
              }`}
            >
              Lady's
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((item: any) => {
              const imgSrc = getImageSrc(item.image)
              return (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between border border-zinc-800 hover:border-zinc-600 transition-all"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-72 bg-zinc-900 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700">
                        <ImageIcon className="w-8 h-8" />
                      </div>

                      {imgSrc && (
                        <img
                          src={imgSrc}
                          alt={item.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-10"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30 z-10 pointer-events-none" />

                      <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {item.brandName}
                      </span>
                      <span className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-rose-600/90 text-white shadow-md">
                        Catálogo 2026
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/80 text-zinc-200 border border-white/10 backdrop-blur-md">
                          {item.referenceCode}
                        </span>
                        {item.colors && item.colors.length > 0 && (
                          <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
                            {item.colors.map((color: string) => (
                              <span
                                key={color}
                                className="w-2.5 h-2.5 rounded-full border border-white/40 shadow-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">{item.category}</div>
                      <h4 className="font-heading font-bold text-base text-white mt-1 group-hover:text-rose-400 transition">
                        {item.title}
                      </h4>
                      {item.subtitle && <p className="text-xs text-zinc-400 mt-0.5">{item.subtitle}</p>}

                      <div className="mt-3 text-xs text-zinc-400 space-y-1.5 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800/80">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Tela:</span>
                          <strong className="text-zinc-200 font-semibold">{item.composition}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Estilo:</span>
                          <span className="text-zinc-300">{item.fit}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <a
                      href={`https://wa.me/${wa}?text=${encodeURIComponent(
                        `Hola Jhonal 80, me interesa cotizar por mayor la prenda ${item.title} (${item.referenceCode}) de la marca ${item.brandName}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-zinc-800 hover:bg-emerald-600 text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2 group/btn shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                      <span>Cotizar por WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const fallbackCatalogs = [
  {
    title: 'Catálogo Romper',
    year: '2026',
    description: 'Conjuntos para hombre, camisetas en tela fría y polos deportivos.',
    accentColor: '#EA580C',
    links: [
      { name: 'Conjuntos Romper', url: '/Catálogo conjunto romper.pdf' },
      { name: 'Camisetas Romper', url: '/Catalogo camiseta romper  .pdf' },
    ],
  },
  {
    title: 'Catálogo Jhonal',
    year: '2026',
    description: 'Camisetas cuello redondo en algodón licrado y polos clásicos.',
    accentColor: '#2563EB',
    links: [
      { name: 'Camisetas Jhonal', url: '/Catalogo camiseta Jhonal .pdf' },
      { name: 'Polos Jhonal', url: '/Catálogo Jhonal polo.pdf' },
    ],
  },
  {
    title: 'Catálogo Fénix',
    year: '2026',
    description: 'Línea oversize urbana y colección Fénix Dama.',
    accentColor: '#D97706',
    links: [
      { name: 'Fénix Oversize', url: '/Fénix overside.pdf' },
      { name: 'Fénix Dama', url: '/Fénix dama .pdf' },
    ],
  },
  {
    title: 'Catálogo Lady\'s',
    year: '2026',
    description: 'Colección de ropa femenina, cortes confort y prendas básicas.',
    accentColor: '#DB2777',
    links: [
      { name: 'Colección Lady\'s', url: '/Catálogo ladys .pdf' },
    ],
  },
]

export function CatalogGrid({ catalogs, settings }: { catalogs?: any[]; settings?: any }) {
  const hasDynamic = catalogs && catalogs.length > 0

  const catBadge = settings?.catalogsBadge || 'Descarga directa'
  const catTitle = settings?.catalogsTitle || 'Catálogos de la colección 2026'
  const catDesc = settings?.catalogsDescription || 'Descarga los PDF completos de cada marca con todas las fotos de modelos, tablas de tallas, variedad de colores y detalles de confección.'

  return (
    <section id="catalogos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500">{catBadge}</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">{catTitle}</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {catDesc}
          </p>
        </div>

        {hasDynamic ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogs.map((c: any, i: number) => (
              <motion.div
                key={c._id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4"
                style={{ borderTopColor: c.accentColor || '#E11D48' }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 font-mono">
                    <span>PDF DIGITAL</span>
                    <span>{c.year || '2026'}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{c.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{c.description || `Catálogo oficial de ${c.brandName || 'Jhonal 80'}`}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <a
                    href={c.pdfUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-rose-600 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-between transition"
                  >
                    <span>Descargar PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackCatalogs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4"
                style={{ borderTopColor: c.accentColor }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 font-mono">
                    <span>PDF DIGITAL</span>
                    <span>{c.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{c.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{c.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2">
                  {c.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-between transition"
                    >
                      <span>{link.name}</span>
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

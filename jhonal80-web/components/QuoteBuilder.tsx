'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export function QuoteBuilder({ settings }: { settings?: any }) {
  const [form, setForm] = useState({
    name: '',
    city: '',
    brand: 'Todas las 4 marcas (Surtido completo multimarca)',
    volume: '50 a 200 prendas (Para surtir tienda)',
    notes: '',
  })

  const wa = settings?.whatsappNumber || '573000000000'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg =
      `*SOLICITUD DE COTIZACIÓN MAYORISTA - JHONAL 80*\n\n` +
      `👤 *Nombre/Negocio:* ${form.name}\n` +
      `📍 *Ciudad:* ${form.city}\n` +
      `🏷️ *Marca:* ${form.brand}\n` +
      `📦 *Cantidad aproximada:* ${form.volume}\n` +
      `📝 *Detalles:* ${form.notes || 'Sin notas adicionales'}\n\n` +
      `Solicitud enviada desde el portal web.`

    const url = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  const quoteBadge = settings?.quoteBadge || 'Atención rápida'
  const quoteTitle = settings?.quoteTitle || 'Cotizador para mayoristas'
  const quoteDesc = settings?.quoteDescription || 'Dinos qué marcas y cantidades te interesan para enviarte la lista de precios y asesorarte de inmediato por WhatsApp.'

  return (
    <section id="cotizador" className="py-24 bg-zinc-950 border-t border-zinc-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-zinc-700/80 shadow-2xl relative"
        >
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">{quoteBadge}</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">{quoteTitle}</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              {quoteDesc}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Tu nombre o nombre de tu negocio
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej: Confecciones y Almacén El Sol"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:border-rose-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Ciudad o municipio
                </label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Ej: Medellín, Cali, Bogotá, Barranquilla, Cúcuta..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:border-rose-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Marca que más te interesa
                </label>
                <select
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:border-rose-500 focus:outline-none transition"
                >
                  <option value="Todas las 4 marcas (Surtido completo multimarca)">Todas las 4 marcas (Surtido completo)</option>
                  <option value="Romper (Conjuntos y tela fría)">Romper (Conjuntos y tela fría)</option>
                  <option value="Jhonal (Camisetas licradas y polos)">Jhonal (Camisetas licradas y polos)</option>
                  <option value="Fénix (Oversize y dama)">Fénix (Oversize y dama)</option>
                  <option value="Lady's (Ropa femenina)">Lady's (Ropa femenina)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Cantidad aproximada a comprar
                </label>
                <select
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:border-rose-500 focus:outline-none transition"
                >
                  <option value="12 a 50 prendas (Para iniciar pedido)">12 a 50 prendas (Para iniciar)</option>
                  <option value="50 a 200 prendas (Para surtir tienda)">50 a 200 prendas (Para surtir tienda)</option>
                  <option value="+200 prendas (Distribuidor mayorista)">Más de 200 prendas (Distribuidor grande)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                ¿Tienes alguna referencia o duda en mente? (opcional)
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Ej: Me interesan las camisetas licradas de Jhonal y polos Romper para surtir mi local..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:border-rose-500 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-3"
            >
              <Send className="w-4 h-4" />
              <span>Enviar cotización a WhatsApp asesor comercial</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

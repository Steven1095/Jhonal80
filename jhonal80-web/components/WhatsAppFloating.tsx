'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloating({ settings }: { settings?: any }) {
  const wa = settings?.whatsappNumber || '573000000000'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${wa}?text=${encodeURIComponent('Hola Jhonal 80, deseo recibir información comercial mayorista.')}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  )
}

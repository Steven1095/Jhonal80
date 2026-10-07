'use client'
import { useEffect, useState } from 'react'

export function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* 1. Graphic Textile Texture Backdrop */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg-textile.jpg)' }}
      />

      {/* 2. Soft Dark Vignette Layer */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(6, 7, 9, 0.2) 0%, rgba(6, 7, 9, 0.85) 80%, #060709 100%)',
        }}
      />

      {/* 3. Textile Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 4. Kinetic Brand Watermark */}
      <div className="fixed top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(4rem,15vw,14rem)] font-black text-white/[0.02] whitespace-nowrap pointer-events-none z-0 tracking-widest font-heading select-none">
        JHONAL.80
      </div>

      {/* 5. Interactive Cursor Spotlight */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 blur-[80px] transition-opacity duration-300"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background:
            'radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, rgba(37, 99, 235, 0.06) 40%, transparent 70%)',
        }}
      />

      {/* 6. Ambient Brand Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="brand-glow w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-rose-600/15 top-[-100px] left-[-100px]" />
        <div className="brand-glow w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-blue-600/10 top-[35%] right-[-100px]" />
        <div className="brand-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-600/10 bottom-[10%] left-[5%]" />
      </div>
    </>
  )
}

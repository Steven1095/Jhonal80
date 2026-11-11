'use client'
import React, { useState } from 'react'
import { set, unset, StringInputProps, ArrayOfPrimitivesInputProps } from 'sanity'

export const ACCENT_COLORS = [
  { label: 'Naranja Romper', value: '#EA580C', desc: 'Deportivo y energético' },
  { label: 'Azul Jhonal', value: '#2563EB', desc: 'Clásico y corporativo' },
  { label: 'Dorado / Ámbar Fénix', value: '#D97706', desc: 'Urbano y moderno' },
  { label: "Rosa / Fucsia Lady's", value: '#DB2777', desc: 'Femenino y delicado' },
  { label: 'Rojo Carmesí Jhonal 80', value: '#E11D48', desc: 'Destacado principal' },
  { label: 'Verde Esmeralda', value: '#059669', desc: 'Fresco y casual' },
  { label: 'Azul Petróleo / Cielo', value: '#0284C7', desc: 'Sobrio y moderno' },
  { label: 'Morado Premium', value: '#7C3AED', desc: 'Exclusivo y elegante' },
]

export const GARMENT_COLORS = [
  { label: 'Blanco', value: '#FFFFFF' },
  { label: 'Perla / Hueso', value: '#F4F4F5' },
  { label: 'Gris Claro', value: '#E4E4E7' },
  { label: 'Gris Perla', value: '#9CA3AF' },
  { label: 'Gris Medio', value: '#71717A' },
  { label: 'Gris Oscuro / Ratón', value: '#4B5563' },
  { label: 'Gris Carbón', value: '#374151' },
  { label: 'Grafito', value: '#1F2937' },
  { label: 'Negro Clásico', value: '#18181B' },
  { label: 'Negro Profundo', value: '#09090B' },
  { label: 'Azul Cielo', value: '#38BDF8' },
  { label: 'Azul Petróleo', value: '#0284C7' },
  { label: 'Azul Rey', value: '#2563EB' },
  { label: 'Azul Marino', value: '#1E3A8A' },
  { label: 'Azul Naval Oscuro', value: '#1E293B' },
  { label: 'Azul Noche', value: '#111827' },
  { label: 'Verde Menta / Esmeralda Claro', value: '#10B981' },
  { label: 'Verde Esmeralda', value: '#059669' },
  { label: 'Mostaza / Miel', value: '#B45309' },
  { label: 'Café Tierra', value: '#78350F' },
  { label: 'Café Oscuro / Moca', value: '#1C1917' },
  { label: 'Beige / Piel / Almendra', value: '#E4D5C7' },
  { label: 'Palo de Rosa', value: '#FCE7F3' },
  { label: 'Rosa Coral', value: '#FB7185' },
  { label: 'Rosa Intenso', value: '#F43F5E' },
  { label: 'Fucsia / Magenta', value: '#E11D48' },
  { label: 'Vino / Mora', value: '#BE185D' },
  { label: 'Vino Tinto / Burdeos', value: '#881337' },
  { label: 'Rojo Vivo', value: '#DC2626' },
]

/**
 * Selector visual de un solo color de acento (para Marcas y Catálogos PDF)
 */
export function AccentColorInput(props: StringInputProps) {
  const { value = '', onChange } = props

  const handleSelect = (hex: string) => {
    if (value?.toUpperCase() === hex.toUpperCase()) {
      onChange(unset())
    } else {
      onChange(set(hex))
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '10px',
        }}
      >
        {ACCENT_COLORS.map((c) => {
          const isSelected = value?.toUpperCase() === c.value.toUpperCase()
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => handleSelect(c.value)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '10px',
                border: isSelected ? `2px solid ${c.value}` : '1px solid rgba(148, 163, 184, 0.25)',
                backgroundColor: isSelected ? `${c.value}18` : 'rgba(15, 23, 42, 0.4)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '9999px',
                  backgroundColor: c.value,
                  border: '2px solid rgba(255,255,255,0.65)',
                  boxShadow: isSelected ? `0 0 10px ${c.value}` : 'none',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 800,
                }}
              >
                {isSelected ? '✓' : ''}
              </span>
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: isSelected ? 700 : 600,
                    color: '#F8FAFC',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>{c.desc}</div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selector opcional de color personalizado */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingTop: '4px',
          fontSize: '12px',
          color: '#94A3B8',
        }}
      >
        <span>¿Otro tono específico?:</span>
        <label
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '8px',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            cursor: 'pointer',
            color: '#E2E8F0',
          }}
        >
          <input
            type="color"
            value={value && /^#[0-9A-Fa-f]{6}$/.test(value) ? value : '#EA580C'}
            onChange={(e) => onChange(set(e.target.value.toUpperCase()))}
            style={{ width: '22px', height: '22px', border: 'none', background: 'none', cursor: 'pointer' }}
          />
          <span>Elegir del selector visual</span>
        </label>
        {value && (
          <span style={{ fontFamily: 'monospace', color: '#CBD5E1' }}>
            Color actual: <strong>{value}</strong>
          </span>
        )}
      </div>
    </div>
  )
}

/**
 * Selector visual múltiple de colores de prendas (para Prendas y Referencias)
 */
export function GarmentColorsInput(props: ArrayOfPrimitivesInputProps) {
  const currentColors: string[] = Array.isArray(props.value)
    ? (props.value as string[])
    : []
  const [customColor, setCustomColor] = useState('#2563EB')

  const isColorSelected = (hex: string) =>
    currentColors.some((c) => c.toUpperCase() === hex.toUpperCase())

  const toggleColor = (hex: string) => {
    const exists = isColorSelected(hex)
    let next: string[]
    if (exists) {
      next = currentColors.filter((c) => c.toUpperCase() !== hex.toUpperCase())
    } else {
      next = [...currentColors, hex.toUpperCase()]
    }
    props.onChange(next.length > 0 ? set(next) : unset())
  }

  const addCustomColor = (hex: string) => {
    const formatted = hex.toUpperCase()
    if (!isColorSelected(formatted)) {
      const next = [...currentColors, formatted]
      props.onChange(set(next))
    }
  }

  // Detectar si la prenda tiene algún color personalizado que no esté en la lista predefinida
  const extraSelectedColors = currentColors.filter(
    (hex) => !GARMENT_COLORS.some((g) => g.value.toUpperCase() === hex.toUpperCase())
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '4px' }}>
      <div
        style={{
          fontSize: '12px',
          color: '#CBD5E1',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid rgba(148, 163, 184, 0.2)',
        }}
      >
        Haz clic sobre los colores disponibles para esta prenda para <strong>marcarlos (✓)</strong> o{' '}
        <strong>desmarcarlos</strong>:
      </div>

      {/* Grilla de colores textiles predefinidos */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
          gap: '8px',
        }}
      >
        {GARMENT_COLORS.map((c) => {
          const selected = isColorSelected(c.value)
          const isLight =
            c.value.toUpperCase() === '#FFFFFF' ||
            c.value.toUpperCase() === '#F4F4F5' ||
            c.value.toUpperCase() === '#E4E4E7' ||
            c.value.toUpperCase() === '#FCE7F3' ||
            c.value.toUpperCase() === '#E4D5C7'

          return (
            <button
              key={c.value}
              type="button"
              onClick={() => toggleColor(c.value)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 10px',
                borderRadius: '10px',
                border: selected
                  ? '2px solid #10B981'
                  : '1px solid rgba(148, 163, 184, 0.22)',
                backgroundColor: selected
                  ? 'rgba(16, 185, 129, 0.14)'
                  : 'rgba(15, 23, 42, 0.35)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.12s ease',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '9999px',
                  backgroundColor: c.value,
                  border: isLight
                    ? '1.5px solid rgba(148, 163, 184, 0.8)'
                    : '1.5px solid rgba(255, 255, 255, 0.45)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isLight ? '#09090B' : '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 900,
                }}
              >
                {selected ? '✓' : ''}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: selected ? 700 : 500,
                  color: selected ? '#FFFFFF' : '#CBD5E1',
                  lineHeight: 1.2,
                }}
              >
                {c.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Colores personalizados adicionales si los hubiera */}
      {extraSelectedColors.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#94A3B8' }}>Otros tonos marcados:</span>
          {extraSelectedColors.map((hex) => (
            <button
              key={hex}
              type="button"
              onClick={() => toggleColor(hex)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '9999px',
                border: '1.5px solid #10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#F8FAFC',
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '9999px',
                  backgroundColor: hex,
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              />
              <span>{hex} (Quitar ×)</span>
            </button>
          ))}
        </div>
      )}

      {/* Resumen de seleccionados + Agregar otro color visualmente */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingTop: '8px',
          borderTop: '1px solid rgba(148, 163, 184, 0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: '#94A3B8' }}>
            Colores seleccionados ({currentColors.length}):
          </span>
          {currentColors.length === 0 ? (
            <span style={{ fontSize: '12px', color: '#64748B', fontStyle: 'italic' }}>
              Ninguno seleccionado
            </span>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {currentColors.map((hex) => (
                <span
                  key={hex}
                  title={`Clic para quitar ${hex}`}
                  onClick={() => toggleColor(hex)}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '9999px',
                    backgroundColor: hex,
                    border: '1.5px solid rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer' }}
          />
          <button
            type="button"
            onClick={() => addCustomColor(customColor)}
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.35)',
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              color: '#E2E8F0',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            + Agregar tono personalizado
          </button>
        </div>
      </div>
    </div>
  )
}

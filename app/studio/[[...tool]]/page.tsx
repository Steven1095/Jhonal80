'use client'
import { useEffect, useRef } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { useClient } from 'sanity'
import config from '@/sanity.config'

const BRANDS_SEED = [
  {
    _id: 'brand-romper',
    _type: 'brand',
    name: 'Romper',
    slug: { _type: 'slug', current: 'romper' },
    tagline: 'Streetwear y deportivo',
    accentColor: '#EA580C',
    description:
      'Conjuntos casuales, camisetas en tela fría 96% algodón con 4% spandex, polos deportivos y línea infantil Romper Kids.',
    starReference: '6016 / 6005',
    technology: 'Tela fría con spandex',
    order: 1,
    logoPath: '/logo-romper-clean.png',
  },
  {
    _id: 'brand-jhonal',
    _type: 'brand',
    name: 'Jhonal',
    slug: { _type: 'slug', current: 'jhonal' },
    tagline: 'Clásicos y urbanos',
    accentColor: '#2563EB',
    description:
      'La línea preferida para hombre: camisetas cuello redondo en algodón licrado de ajuste impecable y polos con estilo.',
    starReference: '6001-00 al 05',
    technology: 'Algodón licrado premium',
    order: 2,
    logoPath: '/buho-jhonal.png',
  },
  {
    _id: 'brand-fenix',
    _type: 'brand',
    name: 'Fénix',
    slug: { _type: 'slug', current: 'fenix' },
    tagline: 'Oversize y moda urbana',
    accentColor: '#D97706',
    description:
      'Siluetas oversize en tendencia, prendas con excelente peso, diseños unisex y la colección Fénix Dama para quienes buscan moda moderna.',
    starReference: 'Oversize y dama',
    technology: 'Cortes modernos y holgados',
    order: 3,
    logoPath: '/logo-fenix-clean.png',
  },
  {
    _id: 'brand-ladys',
    _type: 'brand',
    name: "Lady's",
    slug: { _type: 'slug', current: 'ladys' },
    tagline: 'Lencería y ropa interior',
    accentColor: '#DB2777',
    description:
      'Línea femenina especializada en lencería y ropa interior invisible y con encaje: señorial, brasileras, semitangas y tangas sin costuras.',
    starReference: 'Invisible y encaje',
    technology: 'S, M, L y XL',
    order: 4,
    logoPath: '/logo-ladys-clean.png',
  },
]

const PRODUCTS_SEED = [
  {
    _id: 'product-romper-6002-02',
    brandId: 'brand-romper',
    referenceCode: 'REF: 6002-02',
    title: 'Camiseta polo Romper azul petróleo',
    subtitle: 'Confección premium con detalles en cuello',
    category: 'Polo hombre deportiva y casual',
    composition: 'Algodón con spandex suave',
    fit: 'Regular fit',
    imagePath: '/POLO HOMBRE ROMPER REF 6002 02.jpeg',
    colors: ['#0284C7', '#1E293B', '#E4E4E7'],
  },
  {
    _id: 'product-romper-6002-03',
    brandId: 'brand-romper',
    referenceCode: 'REF: 6002-03',
    title: 'Camiseta polo Romper vino y gris',
    subtitle: 'Estilo clásico contemporáneo',
    category: 'Polo hombre casual',
    composition: 'Algodón suave de alta rotación',
    fit: 'Ajuste anatómico cómodo',
    imagePath: '/POLO HOMBRE ROMPER REF 6002 03.jpeg',
    colors: ['#881337', '#9CA3AF', '#18181B'],
  },
  {
    _id: 'product-romper-6002-04',
    brandId: 'brand-romper',
    referenceCode: 'REF: 6002-04',
    title: 'Camiseta polo Romper blanca y azul',
    subtitle: 'Combinación fresca y juvenil',
    category: 'Polo hombre sport',
    composition: 'Algodón respirable',
    fit: 'Corte moderno',
    imagePath: '/POLO HOMBRE ROMPER REF 6002 04.jpeg',
    colors: ['#FFFFFF', '#2563EB', '#374151'],
  },
  {
    _id: 'product-jhonal-6001-01',
    brandId: 'brand-jhonal',
    referenceCode: 'REF: 6001-01',
    title: 'Camiseta polo Jhonal café, blanca y gris',
    subtitle: 'Diseño exclusivo con franjas frontales',
    category: 'Polo hombre clásica',
    composition: 'Algodón licrado suave',
    fit: 'Silueta perfecta',
    imagePath: '/Camiseta polo cafe blanca gris.jpeg',
    colors: ['#78350F', '#FFFFFF', '#9CA3AF'],
  },
  {
    _id: 'product-jhonal-6001-02',
    brandId: 'brand-jhonal',
    referenceCode: 'REF: 6001-02',
    title: 'Camiseta polo Jhonal café elegante',
    subtitle: 'Tono tierra versátil para toda ocasión',
    category: 'Polo hombre urbana',
    composition: 'Algodón licrado premium',
    fit: 'Ajuste anatómico',
    imagePath: '/Camiseta polo cafe.jpeg',
    colors: ['#78350F', '#B45309', '#1C1917'],
  },
  {
    _id: 'product-jhonal-6001-03',
    brandId: 'brand-jhonal',
    referenceCode: 'REF: 6001-03',
    title: 'Camiseta polo Jhonal gris perla',
    subtitle: 'Básico indispensable para tienda',
    category: 'Polo hombre sport',
    composition: 'Algodón suave 95/5',
    fit: 'Regular fit confort',
    imagePath: '/Camiseta polo gris.jpeg',
    colors: ['#9CA3AF', '#4B5563', '#1F2937'],
  },
  {
    _id: 'product-jhonal-6001-04',
    brandId: 'brand-jhonal',
    referenceCode: 'REF: 6001-04',
    title: 'Camiseta polo Jhonal tricolor',
    subtitle: 'Franjas horizontales de tendencia',
    category: 'Polo hombre moderna',
    composition: 'Algodón licrado de alta durabilidad',
    fit: 'Corte estilizado',
    imagePath: '/Camiseta polo tres colores horizntales.jpeg',
    colors: ['#1E293B', '#DC2626', '#FFFFFF'],
  },
  {
    _id: 'product-fenix-fnx-01',
    brandId: 'brand-fenix',
    referenceCode: 'REF: FNX-01',
    title: 'Camiseta polo Fénix diseño especial',
    subtitle: 'Cortes limpios y cuello estructurado',
    category: 'Polo y moda urbana',
    composition: 'Algodón peinado de alto gramaje',
    fit: 'Corte moderno urbano',
    imagePath: '/WhatsApp Image 2026-09-11 at 9.44.49 AM.jpeg',
    colors: ['#09090B', '#F4F4F5', '#71717A'],
  },
  {
    _id: 'product-fenix-fnx-02',
    brandId: 'brand-fenix',
    referenceCode: 'REF: FNX-02',
    title: 'Colección Fénix urbana con cuello tejido',
    subtitle: 'Detalles diferenciadores para tu mostrador',
    category: 'Línea contemporánea',
    composition: 'Algodón suave de alta resistencia',
    fit: 'Silueta confortable',
    imagePath: '/WhatsApp Image 2026-09-11 at 9.44.55 AM.jpeg',
    colors: ['#1E3A8A', '#F3F4F6', '#B45309'],
  },
  {
    _id: 'product-ladys-sen-01',
    brandId: 'brand-ladys',
    referenceCode: 'REF: LDY-SEN-01',
    title: "Panty señorial invisible Lady's",
    subtitle: 'Corte alto de máximo confort sin costuras visibles',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra suave y elástica de tacto cero',
    fit: 'Tallas S, M, L, XL',
    imagePath: '/producto-ladys-senorial-invisible.jpg',
    colors: ['#FCE7F3', '#E4D5C7', '#18181B', '#FFFFFF'],
  },
  {
    _id: 'product-ladys-bra-01',
    brandId: 'brand-ladys',
    referenceCode: 'REF: LDY-BRA-01',
    title: "Brasilera invisible Lady's",
    subtitle: 'Silueta invisible corte láser ideal para todo tipo de prendas',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra corte láser ultra suave',
    fit: 'Tallas S, M, L, XL',
    imagePath: '/producto-ladys-brasilera-invisible.jpg',
    colors: ['#F43F5E', '#E4D5C7', '#18181B', '#FCE7F3'],
  },
  {
    _id: 'product-ladys-sem-01',
    brandId: 'brand-ladys',
    referenceCode: 'REF: LDY-SEM-01',
    title: "Semitanga invisible Lady's",
    subtitle: 'Diseño anatómico y cómodo de alta rotación para tiendas',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Microfibra transpirable',
    fit: 'Tallas S, M, L, XL',
    imagePath: '/producto-ladys-semitanga-invisible.jpg',
    colors: ['#FB7185', '#E4D5C7', '#09090B', '#FFFFFF'],
  },
  {
    _id: 'product-ladys-enc-01',
    brandId: 'brand-ladys',
    referenceCode: 'REF: LDY-ENC-01',
    title: "Brasilera con encaje Lady's",
    subtitle: 'Detalles delicados en encaje suave y elástico',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Encaje fino antialérgico y microfibra',
    fit: 'Tallas S, M, L, XL',
    imagePath: '/producto-ladys-brasilera-encaje.jpg',
    colors: ['#BE185D', '#18181B', '#FCE7F3', '#FFFFFF'],
  },
  {
    _id: 'product-ladys-enc-02',
    brandId: 'brand-ladys',
    referenceCode: 'REF: LDY-ENC-02',
    title: "Semitanga con encaje Lady's",
    subtitle: 'Estilo femenino y sofisticado para mostrador',
    category: 'Lencería & Ropa interior femenina',
    composition: 'Encaje suave con microfibra premium',
    fit: 'Tallas S, M, L, XL',
    imagePath: '/producto-ladys-semitanga-encaje.jpg',
    colors: ['#BE185D', '#E4D5C7', '#18181B', '#FFFFFF'],
  },
  {
    _id: 'product-fenix-8003-00',
    brandId: 'brand-fenix',
    referenceCode: 'REF: 8003-00',
    title: 'Camiseta deportiva Fénix Dama Athletic',
    subtitle: 'Prenda ligera y transpirable para entrenamiento y casual',
    category: 'Ropa deportiva femenina',
    composition: '94% poliéster, 6% spandex',
    fit: 'Silueta deportiva femenina',
    imagePath: '/producto-fenix-dama-athletic.jpg',
    colors: ['#09090B', '#E11D48', '#38BDF8'],
  },
  {
    _id: 'product-romper-6005-kid',
    brandId: 'brand-romper',
    referenceCode: 'REF: 6005-KID',
    title: 'Colección polo Romper contrastes',
    subtitle: 'Variedad de colores y combinaciones',
    category: 'Línea casual y juvenil',
    composition: 'Algodón suave 96/4',
    fit: 'Confort elástico',
    imagePath: '/WhatsApp Image 2026-09-11 at 9.45.00 AM.jpeg',
    colors: ['#059669', '#10B981', '#111827'],
  },
]

const CATALOGS_SEED = [
  {
    _id: 'catalog-romper-conjuntos',
    brandId: 'brand-romper',
    title: 'Catálogo Conjuntos Romper',
    year: '2026',
    description: 'Conjuntos para hombre, camisetas en tela fría y polos deportivos.',
    accentColor: '#EA580C',
    pdfPath: '/Cata\u0301logo conjunto romper.pdf',
  },
  {
    _id: 'catalog-romper-camisetas',
    brandId: 'brand-romper',
    title: 'Catálogo Camisetas Romper',
    year: '2026',
    description: 'Línea de camisetas en tela fría con spandex y estampados de alta rotación.',
    accentColor: '#EA580C',
    pdfPath: '/Catalogo camiseta romper  .pdf',
  },
  {
    _id: 'catalog-jhonal-camisetas',
    brandId: 'brand-jhonal',
    title: 'Catálogo Camisetas Jhonal',
    year: '2026',
    description: 'Camisetas cuello redondo en algodón licrado de ajuste impecable.',
    accentColor: '#2563EB',
    pdfPath: '/Catalogo camiseta Jhonal .pdf',
  },
  {
    _id: 'catalog-jhonal-polos',
    brandId: 'brand-jhonal',
    title: 'Catálogo Polos Jhonal',
    year: '2026',
    description: 'Colección de polos clásicos y urbanos para hombre.',
    accentColor: '#2563EB',
    pdfPath: '/Cata\u0301logo Jhonal polo.pdf',
  },
  {
    _id: 'catalog-fenix-oversize',
    brandId: 'brand-fenix',
    title: 'Catálogo Fénix Oversize',
    year: '2026',
    description: 'Línea oversize urbana con cortes modernos y alto gramaje.',
    accentColor: '#D97706',
    pdfPath: '/Fe\u0301nix overside.pdf',
  },
  {
    _id: 'catalog-fenix-dama',
    brandId: 'brand-fenix',
    title: 'Catálogo Fénix Dama',
    year: '2026',
    description: 'Colección femenina moderna y deportiva Fénix Dama.',
    accentColor: '#D97706',
    pdfPath: '/Fe\u0301nix dama .pdf',
  },
  {
    _id: 'catalog-ladys',
    brandId: 'brand-ladys',
    title: "Catálogo Colección Lady's",
    year: '2026',
    description: 'Lencería y ropa interior femenina invisible y con encaje en tallas S, M, L y XL.',
    accentColor: '#DB2777',
    pdfPath: '/Cata\u0301logo ladys .pdf',
  },
]

const SITE_SETTINGS_DEFAULTS: Record<string, any> = {
  companyName: 'JHONAL 80',
  announcementText:
    '¿Buscas rentabilidad para tu tienda o negocio? Conviértete en distribuidor oficial de Jhonal 80 y compra a precios directos de fábrica.',
  whatsappNumber: '573127818899',
  generalPhone: '+57 312 781 8899',
  contactEmail: 'contacto@jhonal80.com',
  address: 'Medellín / Colombia • Despachos a todo el país',
  instagramUrl: 'https://www.instagram.com/jhonal.80/',
  facebookUrl: 'https://www.facebook.com/p/Jhonal80-100091825447640/',
  heroBadge: 'Confección y diseño 100% colombiano • Desde 2007',
  heroTitle: 'Fabricamos moda que impulsa tus ventas',
  heroSubtitle: '18 años de experiencia en confección colombiana al servicio de tu negocio.',
  heroCtaPrimaryText: 'Quiero ser distribuidor oficial',
  heroCtaSecondaryText: 'Ver las 4 marcas',
  heroCard1Title: 'Precios de fábrica',
  heroCard1Desc: 'Ganas más sin intermediarios',
  heroCard2Title: 'Envíos a toda Colombia',
  heroCard2Desc: 'Despachos rápidos y seguros',
  heroCard3Title: '4 marcas en una compra',
  heroCard3Desc: 'Surtido para todo tipo de cliente',
  heroCard4Title: 'Acompañamiento real',
  heroCard4Desc: 'Te ayudamos a vender más',
  brandsBadge: 'Nuestras 4 marcas',
  brandsTitle: 'Ropa pensada para rotar y vender todos los días',
  brandsDescription:
    'Cada marca tiene su propio estilo para que puedas ofrecerle a tus clientes justo lo que están buscando, con excelente confección y telas garantizadas.',
  factoryBadge: 'Nuestra fábrica y talleres',
  factoryTitle: 'Más de 17 años vistiendo a Colombia con confección de verdad',
  factoryParagraph1:
    'En Jhonal 80 nacimos en 2007 con un objetivo muy claro: fabricar ropa con excelente horma, telas garantizadas y diseños que realmente roten rápido en los mostradores.',
  factoryParagraph2:
    'Contamos con planta física propia, talleres de estampado en serigrafía, mesas de corte y un equipo humano calificado. No somos intermediarios: controlamos todo el proceso desde el corte de la tela hasta el empaque final para entregarte calidad constante y precios directos de fábrica.',
  factoryStat1Number: '+17 años',
  factoryStat1Label: 'Experiencia',
  factoryStat1Desc: 'Tradición y solidez en el mercado textil',
  factoryStat2Number: '100%',
  factoryStat2Label: 'Hecho en Colombia',
  factoryStat2Desc: 'Mano de obra y confección nacional',
  factoryStat3Number: 'Directo',
  factoryStat3Label: 'De fábrica',
  factoryStat3Desc: 'Sin sobrecostos ni terceros',
  factoryPhoto1Title: 'Talleres de serigrafía y estampado',
  factoryPhoto1Subtitle: 'Pulpos de impresión textil y mesas de corte de alto volumen',
  factoryPhoto2Title: 'Área de confección y empaque',
  factoryPhoto2Subtitle: 'Revisión prenda por prenda',
  distributorBadge: 'Gana con nosotros',
  distributorTitle: 'Conviértete en distribuidor de Jhonal.80',
  distributorDescription:
    'Accede a precios directos de fábrica, acompañamiento comercial constante y un portafolio de 4 marcas diseñadas para rotar rápido.',
  distributorBannerQuote:
    '“Buscamos aliados comerciales a largo plazo. Si tu negocio crece, nosotros crecemos contigo.”',
  lookbookBadge: 'Fotos de catálogo 2026',
  lookbookTitle: 'Prendas destacadas para surtir tu negocio',
  lookbookDescription:
    'Mira algunos de nuestros modelos más vendidos. Puedes pedir cotización directa por WhatsApp con la referencia que te guste para darte disponibilidad de colores y precios al por mayor.',
  catalogsBadge: 'Descarga directa',
  catalogsTitle: 'Catálogos de la colección 2026',
  catalogsDescription:
    'Descarga los PDF completos de cada marca con todas las fotos de modelos, tablas de tallas, variedad de colores y detalles de confección.',
  quoteBadge: 'Atención rápida',
  quoteTitle: 'Cotizador para mayoristas',
  quoteDescription:
    'Dinos qué marcas y cantidades te interesan para enviarte la lista de precios y asesorarte de inmediato por WhatsApp.',
}

async function uploadPublicAsset(
  client: any,
  publicPath: string,
  assetType: 'image' | 'file'
) {
  try {
    const res = await fetch(encodeURI(publicPath))
    if (!res.ok) return null
    const blob = await res.blob()
    const filename = publicPath.split('/').pop() || 'asset'
    const uploaded = await client.assets.upload(assetType, blob, { filename })
    return uploaded?._id || null
  } catch (err) {
    console.warn(`No se pudo subir asset ${publicPath}:`, err)
    return null
  }
}

function TransparentMigrationLayout(props: any) {
  const client = useClient({ apiVersion: '2024-01-01' })
  const ranRef = useRef(false)

  useEffect(() => {
    if (ranRef.current) return
    ranRef.current = true

    ;(async () => {
      try {
        // Check current database state
        const state = await client.fetch(`{
          "settings": *[_type == "siteSettings"] | order(_updatedAt desc)[0],
          "brands": *[_type == "brand"],
          "productsCount": count(*[_type == "product"]),
          "catalogsCount": count(*[_type == "catalog"])
        }`)

        // 1. Ensure siteSettings has all real website defaults filled in
        const existingSettings = state?.settings
        const settingsId = existingSettings?._id || 'siteSettings'
        const missingSettingsFields: Record<string, any> = {}

        for (const [key, val] of Object.entries(SITE_SETTINGS_DEFAULTS)) {
          if (!existingSettings || existingSettings[key] === undefined || existingSettings[key] === null || existingSettings[key] === '') {
            missingSettingsFields[key] = val
          }
        }

        if (!existingSettings?.factoryPhoto1?.asset) {
          const p1AssetId = await uploadPublicAsset(
            client,
            '/WhatsApp Image 2026-09-18 at 3.55.53 PM.jpeg',
            'image'
          )
          if (p1AssetId) {
            missingSettingsFields.factoryPhoto1 = {
              _type: 'image',
              asset: { _type: 'reference', _ref: p1AssetId },
            }
          }
        }

        if (!existingSettings?.factoryPhoto2?.asset) {
          const p2AssetId = await uploadPublicAsset(
            client,
            '/WhatsApp Image 2026-09-18 at 3.55.54 PM.jpeg',
            'image'
          )
          if (p2AssetId) {
            missingSettingsFields.factoryPhoto2 = {
              _type: 'image',
              asset: { _type: 'reference', _ref: p2AssetId },
            }
          }
        }

        if (!existingSettings) {
          await client.createIfNotExists({
            _id: settingsId,
            _type: 'siteSettings',
            ...SITE_SETTINGS_DEFAULTS,
            ...missingSettingsFields,
          })
        } else if (Object.keys(missingSettingsFields).length > 0) {
          await client.patch(settingsId).set(missingSettingsFields).commit()
        }

        // 2. Ensure the 4 real brands exist and map their IDs
        const existingBrands: any[] = state?.brands || []
        const brandIdMap: Record<string, string> = {}

        // Remove the test brand "Jhonal 80 Prueba" if it exists
        const testBrand = existingBrands.find((b) =>
          (b.name || '').toLowerCase().includes('prueba')
        )
        if (testBrand?._id) {
          try {
            await client.delete(testBrand._id)
          } catch {}
        }

        for (const bSeed of BRANDS_SEED) {
          const match = existingBrands.find((eb) => {
            const ebSlug = eb.slug?.current?.toLowerCase() || ''
            const ebName = (eb.name || '').toLowerCase()
            return (
              !ebName.includes('prueba') &&
              (ebSlug === bSeed.slug.current ||
                ebName === bSeed.name.toLowerCase())
            )
          })

          const targetBrandId = match ? match._id : bSeed._id
          brandIdMap[bSeed._id] = targetBrandId

          if (!match) {
            const logoAssetId = await uploadPublicAsset(client, bSeed.logoPath, 'image')
            const { logoPath, ...brandDoc } = bSeed
            await client.createOrReplace({
              ...brandDoc,
              _id: targetBrandId,
              ...(logoAssetId
                ? {
                    logo: {
                      _type: 'image',
                      asset: { _type: 'reference', _ref: logoAssetId },
                    },
                  }
                : {}),
            })
          } else {
            // Patch any missing fields on existing brand (e.g. Romper missing description/logo/order)
            const patchData: Record<string, any> = {}
            if (!match.description) patchData.description = bSeed.description
            if (!match.starReference) patchData.starReference = bSeed.starReference
            if (!match.technology) patchData.technology = bSeed.technology
            if (!match.order) patchData.order = bSeed.order
            if (!match.tagline) patchData.tagline = bSeed.tagline
            if (!match.accentColor) patchData.accentColor = bSeed.accentColor
            if (!match.logo?.asset) {
              const logoAssetId = await uploadPublicAsset(client, bSeed.logoPath, 'image')
              if (logoAssetId) {
                patchData.logo = {
                  _type: 'image',
                  asset: { _type: 'reference', _ref: logoAssetId },
                }
              }
            }
            if (Object.keys(patchData).length > 0) {
              await client.patch(targetBrandId).set(patchData).commit()
            }
          }
        }

        // 3. Seed all 16 real products if no products exist yet
        if ((state?.productsCount || 0) === 0) {
          for (const pSeed of PRODUCTS_SEED) {
            const imgAssetId = await uploadPublicAsset(client, pSeed.imagePath, 'image')
            const resolvedBrandId = brandIdMap[pSeed.brandId] || pSeed.brandId
            const { imagePath, brandId, ...productFields } = pSeed

            await client.createIfNotExists({
              _type: 'product',
              ...productFields,
              isFeatured: true,
              brand: {
                _type: 'reference',
                _ref: resolvedBrandId,
              },
              ...(imgAssetId
                ? {
                    image: {
                      _type: 'image',
                      asset: { _type: 'reference', _ref: imgAssetId },
                    },
                  }
                : {}),
            })
          }
        }

        // 4. Seed all 7 real PDF catalogs if no catalogs exist yet
        if ((state?.catalogsCount || 0) === 0) {
          for (const cSeed of CATALOGS_SEED) {
            const pdfAssetId = await uploadPublicAsset(client, cSeed.pdfPath, 'file')
            const resolvedBrandId = brandIdMap[cSeed.brandId] || cSeed.brandId
            const { pdfPath, brandId, ...catalogFields } = cSeed

            if (pdfAssetId) {
              await client.createIfNotExists({
                _type: 'catalog',
                ...catalogFields,
                brand: {
                  _type: 'reference',
                  _ref: resolvedBrandId,
                },
                pdfFile: {
                  _type: 'file',
                  asset: { _type: 'reference', _ref: pdfAssetId },
                },
              })
            }
          }
        }
      } catch (err) {
        console.warn('Error en sincronización inicial de datos con Sanity:', err)
      }
    })()
  }, [client])

  return props.renderDefault(props)
}

const studioConfigWithAutoSync = {
  ...config,
  studio: {
    components: {
      layout: TransparentMigrationLayout,
    },
  },
}

export default function StudioPage() {
  return <NextStudio config={studioConfigWithAutoSync as any} />
}

import { client } from '@/sanity/lib/client'
import { SITE_DATA_QUERY } from '@/sanity/lib/queries'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { BrandGrid } from '@/components/BrandGrid'
import { FactorySection } from '@/components/FactorySection'
import { Lookbook } from '@/components/Lookbook'
import { DistributorPillars } from '@/components/DistributorPillars'
import { CatalogGrid } from '@/components/CatalogGrid'
import { QuoteBuilder } from '@/components/QuoteBuilder'
import { Footer } from '@/components/Footer'
import { WhatsAppFloating } from '@/components/WhatsAppFloating'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  let data: any = { settings: null, brands: [], products: [], catalogs: [] }

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      data = await client.fetch(SITE_DATA_QUERY)
    }
  } catch (error) {
    console.warn('Sanity no configurado o sin datos, usando datos por defecto:', error)
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#060709] text-zinc-100 selection:bg-rose-500 selection:text-white">
      {/* Dynamic Background Effects: Textile Backdrop, Grid Pattern, Watermark & Spotlight Glow */}
      <BackgroundEffects />

      {/* Main Page Content Layers */}
      <div className="relative z-10">
        <Navbar settings={data?.settings} />
        <HeroSection brands={data?.brands} settings={data?.settings} />
        <BrandGrid brands={data?.brands} settings={data?.settings} />
        <FactorySection settings={data?.settings} />
        <Lookbook products={data?.products} settings={data?.settings} />
        <DistributorPillars settings={data?.settings} />
        <CatalogGrid catalogs={data?.catalogs} settings={data?.settings} />
        <QuoteBuilder settings={data?.settings} />
        <Footer settings={data?.settings} />
        <WhatsAppFloating settings={data?.settings} />
      </div>
    </main>
  )
}
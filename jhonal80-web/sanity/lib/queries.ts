import { groq } from 'next-sanity'

export const SITE_DATA_QUERY = groq`{
  "settings": *[_type == "siteSettings"][0]{
    ...,
    "factoryVideoUrl": factoryVideoFile.asset->url
  },
  "brands": *[_type == "brand"] | order(order asc),
  "products": *[_type == "product"]{
    _id,
    title,
    referenceCode,
    subtitle,
    category,
    composition,
    fit,
    colors,
    image,
    "brandName": brand->name,
    "brandSlug": brand->slug.current,
    "brandColor": brand->accentColor
  },
  "catalogs": *[_type == "catalog"]{
    _id,
    title,
    year,
    description,
    accentColor,
    "pdfUrl": pdfFile.asset->url,
    "brandName": brand->name
  }
}`

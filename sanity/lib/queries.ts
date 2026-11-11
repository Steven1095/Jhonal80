import { groq } from 'next-sanity'

export const SITE_DATA_QUERY = groq`{
  "settings": *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    ...,
    "factoryVideoUrl": factoryVideoFile.asset->url
  },
  "brands": *[_type == "brand"] | order(coalesce(order, 99) asc, _updatedAt desc),
  "products": *[_type == "product" && coalesce(isFeatured, true) == true] | order(_createdAt asc){
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
  "catalogs": *[_type == "catalog"] | order(_createdAt asc){
    _id,
    title,
    year,
    description,
    accentColor,
    "pdfUrl": pdfFile.asset->url,
    "brandName": brand->name
  }
}`

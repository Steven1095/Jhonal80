import { defineField, defineType } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Marcas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo de la Marca (PNG con fondo transparente recomendado)',
      type: 'image',
      options: { hotspot: true },
      description: 'Sube el logo limpio de la marca (ej: Romper, Jhonal, Fénix o Lady\'s)',
    }),
    defineField({
      name: 'tagline',
      title: 'Eslogan / Segmento',
      type: 'string',
      description: 'Ej: Streetwear y deportivo, Clásicos y urbanos, etc.',
    }),
    defineField({
      name: 'accentColor',
      title: 'Color HEX de Acento',
      type: 'string',
      description: 'Ej: #EA580C para Romper, #2563EB para Jhonal, #D97706 para Fénix, #DB2777 para Lady\'s',
    }),
    defineField({
      name: 'description',
      title: 'Descripción de la línea',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'starReference',
      title: 'Referencias más pedidas',
      type: 'string',
      description: 'Ej: 6016 / 6005 o 6001-00 al 05',
    }),
    defineField({
      name: 'technology',
      title: 'Tipo de tela / Tecnología textil',
      type: 'string',
      description: 'Ej: Tela fría con spandex, Algodón licrado premium',
    }),
    defineField({
      name: 'order',
      title: 'Orden de visualización (1, 2, 3, 4...)',
      type: 'number',
    }),
  ],
})

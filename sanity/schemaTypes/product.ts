import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Prendas y Referencias',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nombre de la Prenda', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'referenceCode', title: 'Código de Referencia (REF)', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'brand', title: 'Marca', type: 'reference', to: [{ type: 'brand' }], validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtítulo / Colección', type: 'string' }),
        defineField({ name: 'category', title: 'Categoría', type: 'string', description: 'Ej: Conjunto Short & Camiseta, Camiseta Cuello Redondo' }),
        defineField({ name: 'composition', title: 'Composición de Tela', type: 'string', description: 'Ej: 96% Algodón Frío, 4% Spandex' }),
        defineField({ name: 'fit', title: 'Silueta / Ajuste', type: 'string', description: 'Ej: Corte Relajado Premium, Boxy Oversize' }),
        defineField({
            name: 'colors',
            title: 'Paleta de Colores Disponibles (Códigos HEX)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Ej: #93C5FD, #18181B, #FFFFFF',
        }),
        defineField({ name: 'image', title: 'Foto Principal', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'isFeatured', title: '¿Destacar en Lookbook Inicial?', type: 'boolean', initialValue: true }),
    ],
})

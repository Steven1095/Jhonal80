import { defineField, defineType } from 'sanity'
import { AccentColorInput } from '../components/ColorSwatchesInput'

export const catalogType = defineType({
    name: 'catalog',
    title: 'Catálogos PDF',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Título del Catálogo', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'brand', title: 'Marca', type: 'reference', to: [{ type: 'brand' }] }),
        defineField({ name: 'year', title: 'Año / Temporada', type: 'string', initialValue: '2026' }),
        defineField({ name: 'description', title: 'Descripción breve', type: 'string' }),
        defineField({ name: 'pdfFile', title: 'Archivo PDF', type: 'file', options: { accept: '.pdf' }, validation: (Rule) => Rule.required() }),
        defineField({
            name: 'accentColor',
            title: 'Color del Borde Superior de la Tarjeta',
            type: 'string',
            description: 'Selecciona con un clic el color decorativo de la tarjeta del catálogo',
            components: {
                input: AccentColorInput,
            },
        }),
    ],
})

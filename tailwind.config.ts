import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['var(--font-outfit)', 'sans-serif'],
                sans: ['var(--font-plus-jakarta)', 'sans-serif'],
                mono: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#08090C',
                    card: '#13161F',
                    border: '#1F2433',
                    accent: '#E11D48',
                    jhonal: '#2563EB',
                    romper: '#EA580C',
                    fenix: '#D97706',
                    ladys: '#DB2777',
                },
            },
        },
    },
    plugins: [],
}
export default config

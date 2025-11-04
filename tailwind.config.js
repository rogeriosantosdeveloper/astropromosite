/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso monitora todos os arquivos em src
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores baseada no seu logo "Astro Promo"
        'astro': {
          'dark': '#0f0b2a', // Um roxo/azul bem escuro do fundo
          'blue': '#3b82f6', // Um azul brilhante para botões/links
          'purple': '#8b5cf6', // O roxo/magenta dos brilhos
          'silver': '#c0c0c0', // Para textos e detalhes
          'light': '#e0e7ff', // Um tom claro para subtítulos
        }
      },
      fontFamily: {
        // Uma boa fonte moderna (precisa ser importada no index.html ou CSS)
        'sans': ['Inter', 'sans-serif'], 
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(3%)' },
        },
        shine: {
          '0%': { backgroundPosition: '-100px' },
          '100%': { backgroundPosition: '100px' },
        }
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        },
        lightTheme: {
          600: '#27272A'
        },
        footerLightTheme: {
          300: '#71717A'
        },
        backgroundLightTheme: {
          100: '#F4F4F5'
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

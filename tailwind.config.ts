import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        gilroy: ["var(--font-gilroy)"],
        openSans: ['var(--font-openSans)'],
      },
      colors: {
        'primary': '#1E4571',
        'secondary': '#7CACE4',
        'lightBackground': '#DFECFB',
        'lightText': '#090F15',
        'darkBackground': '#041121',
        'darkText': '#EBF0F6',
        'darkPrimary': '#8EB5E1',
        'darkSecondary': '#1B4C85'
      },
      boxShadow: {
        'buttonShadow': '0 3px 8px 1px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1230px',
          },
        }
      })
    }
  ]
}

;
export default config;

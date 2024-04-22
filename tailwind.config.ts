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
        lightPrimary: {
          300: '#5992D3',
          500: '#3477C4',
          700: '#295E9A',
          900: '#1E4571',
        },
        lightSecondary: {
          300: '#B4D0F0',
          500: '#A1C4EC',
          700: '#8FB8E8',
          900: '#7CACE4',
        },
        'lightBackground': '#DFECFB',
        'lightText': '#090F15',
        darkPrimary: {
          300: '#BFD5EE',
          500: '#AECAEA',
          700: '#9EBFE5',
          900: '#8EB5E1',
        },
        darkSecondary: {
          300: '#5896DD',
          500: '#2E7CD4',
          700: '#2364AD',
          900: '#1B4C85',
        },
        'darkBackground': '#041121',
        'darkText': '#EBF0F6',
      },
      boxShadow: {
        'button': '0 3px 8px 1px rgba(0, 0, 0, 0.15)',
        'projectCard': '0 4px 10px 0 rgba(30, 69, 113, 0.25)',
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

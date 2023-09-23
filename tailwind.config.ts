import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(rgba(230, 230, 230, 0.56) 0.6000000000000001px, transparent 0.6000000000000001px), linear-gradient(to right, rgba(230, 230, 230, 0.56) 0.6000000000000001px, rgba(162, 162, 184, 0) 0.6000000000000001px)'
      },
      backgroundSize: {
        cuadricula: '12px 12px'
      }
    }
  },
  plugins: [require('daisyui')]
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
      extend: {
        colors: {
          knitBlue: '#3498db',
          knitGreen: '#2ecc71',
          knitPurple: '#9b59b6',
          knitPink: '#e84393',
          knitYellow: '#f1c40f',
          knitDark: '#2c3e50',
          knitLight: '#f5f7fa',
        },
      },
    },
    plugins: [],
  };
  
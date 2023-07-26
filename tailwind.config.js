/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#7F00FF',
        title: '#262626',
        task: '#292929',
        date: '#4A4A4A',
        place: '#ABABAB',
      },
      backgroundImage: {
        'task-done':
          'linear-gradient(136.04deg, #7F00FF -15.75%, #E100FF 122.51%)',
      },
      backgroundColor: {
        'task-to-do': '#FAFAFA',
      },
      boxShadow: {
        purple: '4px 12px 20px 4px #E100FF36',
      },
    },
  },
  plugins: [],
};

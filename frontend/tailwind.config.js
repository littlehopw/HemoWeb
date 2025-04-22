export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /*screens: {
      'mobile': { 'max': '639px' }, // <= 639px
      'tablet': { 'min': '640px', 'max': '1023px' }, // 640px <= tablet <= 1023px
      'laptop': { 'min': '1024px', 'max': '1366px' }, // 1024px <= laptop <= 1379px
      'desktop': { 'min': '1367px'}, // 1380px <= desktop
    },*/
    extend: {
      backgroundColor: {
        'primary-1': 'var(--primary-color-1)',
      },
      borderRadius: {
        '40px': '40px',
      },
    },
  },
  plugins: [],
};
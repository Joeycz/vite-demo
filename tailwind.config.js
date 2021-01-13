module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'test-cover': "url('/src/assets/vs-picgo-data.jpeg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

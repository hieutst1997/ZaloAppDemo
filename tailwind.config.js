module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF7868'
      },
      
      flex: {
        'flex-col-1': '0 0 8.33%',
        'flex-col-2': '0 0 16.67%',
        'flex-col-3': '0 0 25%',
        'flex-col-4': '0 0 33.33%',
        'flex-col-5': '0 0 41.67%',
        'flex-col-6': '0 0 50%',
        'flex-col-7': '0 0 58.33%',
        'flex-col-8': '0 0 66.67%',
        'flex-col-9': '0 0 75%',
        'flex-col-10': '0 0 83.33%',
        'flex-col-11': '0 0 91.67%',
        'flex-col-12': '0 0 100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}




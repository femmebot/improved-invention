module.exports = {
  // content: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        gray100: '#161616',
        gray95: '#1f1f1f',
        gray90: '#292929',
        greenText: '#008060',
        greenPrimary: '#009845',
        tertiarygray02: '#EAF3F7',
        tertiarygray01: '#F7F9FD',
        tertiaryGray60: '#565D60',
        orange10: '#FEF3E6',
        slate750: '#2E3746',
        slate755: '#2C3543',
        slate760: '#2A3240',
        slate770: '#28303E',
        slate780: '#262E3B',
        orange50: '#F18A00',
        'indigoVivid': {
          30: '#A651FB',
          40: '#9362fe',
          50: '#745fe9',
          60: '#5435ca',
          70: '#421ae5',
        },
      },
    },
  },
  plugins: [],
}

// tailwind.config.js

// module.exports = {
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

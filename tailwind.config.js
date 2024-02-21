/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Jost_400Regular',
        subtitle: 'Jost_500Medium',
        heading: 'Jost_600SemiBold',
        heavy: 'Jost_700Bold',   
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'white-brick': "url('/public/white_brick.png')",
        'white-brick-2': "url('/public/white_brick_2.jpg')",
        'white-brick-3': "url('/public/white_brick_3.jpg')",
      }
    },
  },
  plugins: [],
}
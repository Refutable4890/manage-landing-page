/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'bright-red': 'hsl(12, 88%, 59%)',
        'very-bright-red': 'hsl(12, 88%, 69%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'dark-grayish-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-red': 'hsl(13, 100%, 96%)',
      },
    }
  }
}

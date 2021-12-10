module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* Colors: Living Coral (#FC766AFF) and Pacific Coast (#5B84B1FF) */
        "pacific-coast": "hsl(211, 36%, 53%)",
        "living-coral": "hsl(5, 96%, 70%)",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "hsl(211, 36%, 53%)",
              '&:hover': {
                color: "hsl(5, 96%, 70%)",
              }
            }
          }
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
};

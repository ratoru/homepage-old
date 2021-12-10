module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Colors: Living Coral (#FC766AFF) and Pacific Coast (#5B84B1FF) */
        "pacific-coast": "hsl(211, 36%, 53%)",
        "living-coral": "hsl(5, 96%, 70%)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: '#5b84b1',
              "&:hover": {
                color: "fc766a",
              }
            },
            code: {
              backgroundColor: "#f1f5f9",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            }
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#111111",
          800: "#171717",
          750: "#1F1F1F",
          700: "#262626",
          600: "#333333",
          500: "#52525B"
        },
        silver: {
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A"
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Playfair Display", "Cinzel", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        "white-glow": "0 0 30px rgba(255, 255, 255, 0.15)",
        "card-dark": "0 20px 40px -15px rgba(0, 0, 0, 0.8)",
        "border-glow": "0 0 15px rgba(255, 255, 255, 0.08)"
      }
    }
  },
  plugins: []
};

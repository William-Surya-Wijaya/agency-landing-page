/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceIdle: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0)" },
        },
        press: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        paperplane: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        wind: {
          "0%, 100%": { transform: "translateY(0)" },
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-40px)" },
          "75%": { transform: "translateX(-120px)" },
          "50%": { transform: "translateY(40px)" },
        },
        spinInfinite: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "bounce-idle": "bounceIdle 2s infinite",
        press: "press 0.3s ease-out",
        paperplane: "paperplane 4s ease-in-out infinite",
        wind: "wind 42s ease-in-out infinite",
        spinInfinite: "spinInfinite 28s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

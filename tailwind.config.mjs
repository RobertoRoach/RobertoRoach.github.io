import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#08080A",
          900: "#0B0B0F",
          850: "#101015",
          800: "#16161C",
          700: "#1D1D25",
          600: "#2A2A34",
          500: "#3D3D48",
          400: "#5A5A66",
          300: "#8A8A96",
          200: "#B6B6BE",
          100: "#DEDEE3",
          50: "#F5F5F7",
        },
        signal: {
          DEFAULT: "#FF3B2F",
          50: "#FFE9E7",
          100: "#FFC9C4",
          200: "#FF9A91",
          300: "#FF6C5F",
          400: "#FF4A3B",
          500: "#FF3B2F",
          600: "#DC1F13",
          700: "#A5150C",
          800: "#6E0E07",
        },
        amber: {
          400: "#FFB84D",
          500: "#FFA71E",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", '"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xs": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": [
          "clamp(2.4rem, 5vw, 3.5rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "display-md": ["clamp(3rem, 7vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": [
          "clamp(4rem, 10vw, 7.5rem)",
          { lineHeight: "0.9", letterSpacing: "-0.035em" },
        ],
        "display-xl": [
          "clamp(4.5rem, 13vw, 11rem)",
          { lineHeight: "0.88", letterSpacing: "-0.04em" },
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider: "0.16em",
        widest: "0.22em",
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        signal: "0 0 40px rgba(255,59,47,0.25), 0 0 90px rgba(255,59,47,0.12)",
        "signal-strong": "0 0 60px rgba(255,59,47,0.45), 0 0 130px rgba(255,59,47,0.2)",
      },
      keyframes: {
        blink: {
          "0%, 45%, 100%": { opacity: "1" },
          "55%, 75%": { opacity: "0.28" },
        },
        caret: {
          "50%": { opacity: "0" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        floatIn: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        blink: "blink 1.8s ease-in-out infinite",
        caret: "caret 1.05s steps(2) infinite",
        "float-in": "floatIn 0.9s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [typography],
};

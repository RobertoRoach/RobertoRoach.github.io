import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Charcoal foundation. Red stays a minority accent (10–15% of composition).
        graphite: {
          950: "#080808", // Main background
          900: "#0C0C0C",
          850: "#111111",
          800: "#121212", // Elevated surfaces
          700: "#1A1A1A",
          600: "#252525",
          500: "#3A3A3A",
          400: "#5C5C5C",
          300: "#A6A6A6", // Secondary text
          200: "#C9C9C9",
          100: "#E5E5E5",
          50: "#F2F2F2", // Primary text
        },
        // Single controlled electric accent — used for traces, buttons,
        // active nav, and category indicators. Never as background fill.
        signal: {
          DEFAULT: "#E10600",
          50: "#FFE8E6",
          100: "#FFC9C4",
          200: "#FF938A",
          300: "#FF5C50",
          400: "#FF2A23", // Interaction / hover
          500: "#E10600", // Primary red
          600: "#B00500",
          700: "#7E0400",
          800: "#560300",
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
        signal: "0 0 32px rgba(225,6,0,0.22), 0 0 80px rgba(225,6,0,0.10)",
        "signal-strong": "0 0 48px rgba(225,6,0,0.38), 0 0 120px rgba(225,6,0,0.18)",
      },
      keyframes: {
        blink: {
          "0%, 45%, 100%": { opacity: "1" },
          "55%, 75%": { opacity: "0.32" },
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

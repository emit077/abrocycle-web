/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keeping the existing color system for consistency
        primary: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#374151",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#f9fafb",
        text: {
          DEFAULT: "#111827",
          secondary: "#6b7280",
        },
        border: "#e5e7eb",
        outline: "#374151",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

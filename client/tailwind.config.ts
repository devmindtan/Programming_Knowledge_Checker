/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // override font-sans và font-mono
        sans: ["CaskaydiaCove NF", "ui-sans-serif", "system-ui"],
        // mono: ["CaskaydiaCove NF", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

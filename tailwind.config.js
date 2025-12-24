/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}"
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  }
};
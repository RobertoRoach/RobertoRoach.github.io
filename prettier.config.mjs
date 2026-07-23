/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  arrowParens: "always",
  bracketSameLine: false,
};

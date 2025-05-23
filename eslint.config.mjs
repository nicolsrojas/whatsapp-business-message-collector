// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs", // porque estás usando Node.js
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      // Ignorar variables no usadas que empiecen con _
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
  },
]);

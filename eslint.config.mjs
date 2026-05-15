import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const files = ["**/*.{js,jsx,ts,tsx}"];
const tests = [
  "**/*.{test,spec}.{js,jsx,ts,tsx}",
  "**/__tests__/**/*.{js,jsx,ts,tsx}",
];

export default defineConfig(
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/.cache/**",
      "**/.react-router/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
    ),
  ).map((config) => ({ ...config, files })),
  {
    files,
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: "detect" },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },
  {
    files: tests,
    ...vitest.configs.recommended,
    languageOptions: vitest.configs.env.languageOptions,
  },
  eslintConfigPrettier,
);

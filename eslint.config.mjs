import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    {
        plugins: { "validate-jsx-nesting": true },
    },
    {
        rules: {
            "validate-jsx-nesting/no-invalid-jsx-nesting": "error",
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);

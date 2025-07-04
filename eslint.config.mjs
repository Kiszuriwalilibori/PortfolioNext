import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },

    js.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: { version: "detect" },
        },
    },

    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
        },
    },
]);

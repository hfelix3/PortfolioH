import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  pluginReact.configs.flat.recommended,
  {
    parserOptions: {
      ecmaVersion: 2020,  // Ensures ECMAScript 2020 (ES11) syntax support
      sourceType: "module",  // Allows import/export syntax
      ecmaFeatures: {
        jsx: true,  // Ensures JSX is enabled
      },
    },
  
    rules: {
      'react/react-in-jsx-scope': 'off', //Fix the JSX scope error
      "react/prop-types": "off", //No more warnings about missing PropTypes
    },
  },
]);

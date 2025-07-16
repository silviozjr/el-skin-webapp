import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintJs from "@eslint/js";

export default [
  // 1. Configuração base recomendada do ESLint
  eslintJs.configs.recommended,

  // 2. Configurações para TypeScript
  // O "spread operator" (...) mescla os objetos de configuração
  ...tseslint.configs.recommended,

  // 3. Configuração para React
  {
    // A configuração do plugin React é um objeto que precisa ser adicionado ao array
    plugins: {
      react: pluginReact
    },
    // Regras específicas do React
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules, // Para não precisar importar React em cada arquivo
      // Adicione ou modifique regras do React aqui se precisar
      "react/prop-types": "off"
    },
    languageOptions: {
      // Habilita o parsing de JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      // Detecta automaticamente a versão do React instalada
      react: {
        version: "detect",
      },
    },
  },

  // 4. Configurações globais para todos os seus arquivos
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Variáveis globais do navegador (window, document, etc.)
        ...globals.node, // Variáveis globais do Node.js (process, etc.)
      },
    },
  },
];
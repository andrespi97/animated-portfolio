# Animated Portfolio: React + TypeScript + Vite

Welcome to the codebase powering my professional portfolio, built with a modern stack for speed, reliability, and developer experience.

## 🚀 Tech Stack

- **React** – UI library for building interactive interfaces
- **TypeScript** – Type-safe JavaScript for scalable development
- **Vite** – Lightning-fast build tool with HMR

## 🔌 Vite Plugins

This project leverages official Vite plugins for seamless React integration and fast refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (Babel-powered)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) (SWC-powered)

## 🛡️ Linting & Code Quality

To maintain high code standards, the ESLint configuration is type-aware and extensible. For production-grade projects, enable strict lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Type-aware and stylistic rules
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React-Specific Linting

Enhance your code quality with dedicated React lint plugins:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 📚 About This Portfolio

This repository showcases my skills in modern frontend development, code quality, and performance optimization. Explore the source, see the live demo, or connect with me for collaboration!

---
Feel free to reach out or check out my other projects!

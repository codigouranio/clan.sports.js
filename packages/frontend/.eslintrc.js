module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    '../../.eslintrc.js',
  ],
  settings: {
    next: {
      rootDir: './packages/frontend/',
    },
  },
  plugins: ['testing-library'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', '../../.eslintrc.js'],
    },
  ],
};

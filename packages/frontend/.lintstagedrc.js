const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
  '{pages,components,lib,src}/**/*.{ts,tsx,css,mdx}': 'prettier --write',
};

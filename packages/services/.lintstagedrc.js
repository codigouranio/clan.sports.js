module.exports = {
  '{src,apps,libs,test}/**/*.ts': 'eslint --fix',
  '{src,test}/**/*.ts': 'prettier --write',
};

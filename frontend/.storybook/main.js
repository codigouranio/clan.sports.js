module.exports = {
  "stories": [
    "../src/**/*.stories.(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@chakra-ui/storybook-addon",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook-addon-material-ui"
  ],
  "features": {
    emotionAlias: false,
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

import { muiTheme } from 'storybook-addon-material-ui'

const decorators = [
  muiTheme()
]

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export { decorators, parameters }

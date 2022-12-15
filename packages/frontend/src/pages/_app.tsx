// ChakraUI
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// Redux
import { Provider } from 'react-redux';

import store from '../app/store';
// Theme
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

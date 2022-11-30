import type { AppProps } from 'next/app';

// Redux
import { Provider } from 'react-redux';
import store from '../app/store';

// ChakraUI
import { ChakraProvider } from '@chakra-ui/react';

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

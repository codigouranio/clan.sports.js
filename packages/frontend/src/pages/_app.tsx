// ChakraUI
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

// Theme
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

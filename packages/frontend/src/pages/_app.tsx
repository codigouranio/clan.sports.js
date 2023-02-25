// ChakraUI
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

import '../styles/global.scss';
// Theme
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;

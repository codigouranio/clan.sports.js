import '@fontsource/blinker';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp;

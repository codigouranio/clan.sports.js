import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'

import store from '../app/store'
import { ChakraProvider } from '@chakra-ui/react'

const persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp

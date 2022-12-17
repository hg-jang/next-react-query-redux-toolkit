import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'

import { wrapper } from '../store/store'

import '../styles/globals.css'

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(App);
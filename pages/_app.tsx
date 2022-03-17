/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../src/apollo'
import { theme } from '../src/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp

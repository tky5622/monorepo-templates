import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import client from '../../apollo-client'
import '../styles/globals.css'
import '../styles/player.css'
import Layout from '../component/layout/Layout'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Head>
        <title>Next</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={client}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
          }}
        >
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ColorSchemeProvider>
        </MantineProvider>
      </ApolloProvider>
    </>
  )
}

export default App

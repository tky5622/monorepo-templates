import { ApolloProvider } from '@apollo/client'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import React, { PropsWithChildren, useState } from 'react'
import client from '../../apollo-client'
import Layout from '../component/layout/Layout'
import '../styles/globals.css'
import '../styles/player.css'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
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
              {children}
            </Layout>
          </ColorSchemeProvider>
        </MantineProvider>
      </ApolloProvider>
      </body>
    </html>
  )
}

export default RootLayout

'use client'
/* eslint-disable no-constant-condition */
import { ApolloProvider } from '@apollo/client'
// import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'
import client from '../../apollo-client'
import Layout from '../component/layout/Layout'
import '../styles/globals.css'
import '../styles/player.css'
import RootStyleRegistry from './emotion'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  // const toggleColorScheme = (value?: ColorScheme) =>
  //   console.log(value || ('dark' === 'dark' ? 'dark' : 'dark'))

  return (
    <html lang="en">
      <Head>
        <title>Next.js</title>
      </Head>
      <body>
        <RootStyleRegistry>
          {/* <ColorSchemeProvider
              colorScheme={'dark'}
              toggleColorScheme={toggleColorScheme}
          > */}
          <RecoilRoot>
          <ApolloProvider client={client}>
            <Layout>
              {children}
            </Layout>
          </ApolloProvider>
          </RecoilRoot>
          {/* </ColorSchemeProvider> */}
        </RootStyleRegistry>
      </body>
    </html>
  )
}

export default RootLayout

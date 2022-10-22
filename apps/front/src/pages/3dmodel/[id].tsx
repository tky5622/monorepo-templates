/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from 'next'
import Head from 'next/head'
import { NftDetails } from '../../component/nft/NftDetails'
import TabContainer from '../../component/nft/TabContainer'
import NoSSR from '../../component/shared/NoSSR'
const Project: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <NoSSR>
          <NftDetails />
          <TabContainer />
        </NoSSR>
      </main>

      <footer></footer>
    </div>
  )
}

export default Project

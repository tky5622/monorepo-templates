/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import NoSSR from '../component/shared/NoSSR'
import styles from '../styles/Home.module.css'

const UE5 = dynamic(() => import('../component/editor/UE5'), {
  ssr: false,
})

const Editor: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <NoSSR>
          <UE5 />
        </NoSSR>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Editor
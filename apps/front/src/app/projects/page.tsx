import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { CardsCarousel } from '../component/shared/molecules/CardList'
import NoSSR from '../component/shared/NoSSR'
const Home: NextPage = () => {
  return (
    <NoSSR>
      <CardsCarousel />
    </NoSSR>
  )
}

export default Home

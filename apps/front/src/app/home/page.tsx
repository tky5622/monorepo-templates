'use client'
import { NextPage } from 'next/types'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { FreatureSection } from '../../component/home/FeatureSection'
import { HeroBullets } from '../../component/home/HeroBullets'
import { UsersRolesTable } from '../../component/home/TopUserList'
import { CardsCarousel } from '../../component/shared/molecules/CardList'
import { NftList } from '../../component/shared/molecules/NftList'
import NoSSR from '../../component/shared/NoSSR'
const Home: NextPage = () => {
  return (
    <NoSSR>
      <HeroBullets />
      <CardsCarousel />
      <UsersRolesTable />
      <NftList />
      <FreatureSection />
    </NoSSR>
  )
}

export default Home

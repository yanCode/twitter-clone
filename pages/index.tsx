import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Feeds from '../components/Feeds'
import React from 'react'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { HomeProps } from '../typings'

const Home: NextPage<HomeProps> = ({ tweets }) => {

  return (
    <div className='lg:max-w-6xl m-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid grid-cols-9 '>
        <Sidebar />
        <Feeds tweets={tweets} />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets()
  return {
    props: { tweets },
  }
}

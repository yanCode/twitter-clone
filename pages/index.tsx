import type { NextPage } from 'next'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Feeds from '../components/Feeds'
import React from 'react'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='lg:max-w-6xl m-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid grid-cols-9 '>
        <Sidebar />
        <Feeds />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

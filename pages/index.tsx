import type { NextPage } from 'next'
import Head from 'next/head'

import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            {/*sidebar*/}
            <Sidebar/>
            {/*Feed*/}
            {/*widgets*/}
        </main>
    </div>
  )
}

export default Home

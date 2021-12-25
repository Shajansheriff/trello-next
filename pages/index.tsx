
import { Button } from '@atoms'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title className={"text"}>Trello Clone</title>
        <meta name="description" content="A Trello Clone app using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Hello</Button>
    </>
  )
}

export default Home

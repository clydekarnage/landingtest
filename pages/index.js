import Head from 'next/head'


import Nav from '../components/Nav'
import Second from '../components/second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Fifth'

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </>
      

      
     
  )
}

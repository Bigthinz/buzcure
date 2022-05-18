import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Footer  from '../components/Footer/Footer'

import Hero from '../PageComponents/home/Hero'
import Layer from '../PageComponents/home/Layer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
        <Layer/>
        <Footer/>
      </main>
        
    </div>
  )
}

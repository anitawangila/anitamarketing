import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Services from '../components/Services'
import About from '../components/about'



export default function Home({ services }) {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
      </Head>
      <Intro />
      <About />
      <Services services={services} />
      
  </div>
  )
}

export const getStaticProps = async()=> {
  const services = data;

 return {
    props: {
      services
    },
  }
}



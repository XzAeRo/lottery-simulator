import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import bg from '../images/bg.png'

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h2>Test</h2>
    </>
  )
}

export default Home

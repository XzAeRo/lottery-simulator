
import Head from 'next/head'
import Image from 'next/image'
import Background from "./background"
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'

export default function Layout({children}:any) {
    return (
    <>
        <div className="md:container md:mx-auto text-slate-400 bg-slate-900">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    </>
    )
  }
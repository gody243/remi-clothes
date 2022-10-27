import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Remi's closet</title>
        
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           REMI'S CLOSET
        </h1>

        
      </main>
<Link href="/posts/first-post"></Link>
    </div>
  )
}

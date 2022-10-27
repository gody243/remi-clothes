import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Slideshow from '../components/slideshow'



export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <Head className={styles.head}>
        <title>Remi's closet</title>
        
      </Head >

      <main className={styles.main}>
        <h1 className={styles.title}>
           REMI'S CLOSET
        </h1> 
         <Link href="/posts/first-post">Login</Link>
      </main>

    </div>
    
   <footer className="{styles.footer}">
    <ul>
   <li><Link href="/posts/aboutus">About us</Link></li>
   <li><Link href="/posts/contactus">Contact us</Link></li>
   </ul>
   </footer>
      </div>
      
     
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Slideshow from '../components/slideshow'
import Data from './posts/getdata'


export default function Home() {
  return (
    <div>
    
      <Head>
        <title>Remi's closet</title> 
      </Head >
      <div className={styles.container}>
        
       <div> <Link href="/posts/register">Register</Link> </div>
        <div><Link href="/posts/login">Login</Link></div>
        
      </div>
  
      <main className={styles.main}>
        <h1 className={styles.title}>
           House of Stylabae
        </h1> 
        
         <Data />
      </main>

    
    
   <footer className={styles.footer}>
    
   <Link href="/posts/aboutus">About us</Link>
   <Link href="/posts/contactus">Contact us</Link>
   
   </footer>
      </div>
      
     
  )
}

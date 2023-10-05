
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Profile from './profile'

export default function Home() {

  return (
    <div>
    
      <Head>
        <title>closet</title> 
      </Head >
      

      <div className={styles.container}>
        
       
        
      </div>
  
      <main className={styles.main}>
        <h1 className={styles.title}>
           House of Stylabae
        </h1>
        <br/>
        <div><Link className="links" href="/register">Register</Link></div> 
         
        <div><Link className="links" href="/login">Login</Link></div>
        <Profile />
     
      </main>

    
    
   <footer className={styles.footer}>
    
   <Link href="/posts/aboutus">About us</Link>
   <Link href="/posts/contactus">Contact us</Link>
   
   </footer>
      </div>
      
     
  )
}

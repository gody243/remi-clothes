
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import axios from 'axios'
import Data from './posts/getdata'
import { useState,useEffect } from 'react'

export default function Home() {

  const[username,setUsername]=useState('')

  useEffect(()=>{
    getUser();
  },[])

  const getUser =()=>{
    axios({
      method: 'get',
      withCredentials:true,
      url: 'http://localhost:3001/getUser'
    }).then(res=>{setUsername(res.data.username)}).catch(err=>console.log(err))
  }
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
        <h4>Hi {username}</h4>
      <Data />
      </main>

    
    
   <footer className={styles.footer}>
    
   <Link href="/posts/aboutus">About us</Link>
   <Link href="/posts/contactus">Contact us</Link>
   
   </footer>
      </div>
      
     
  )
}

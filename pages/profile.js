
import {useState,useEffect} from 'react'
import Data from './posts/getdata'
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function profile(){

    const[user,setUser]=useState(null)
useEffect(()=>{
    getUser();
  },[user])

  const getUser =()=>{
    axios({
      method:'get',
      withCredentials:true,
      url: 'http://localhost:3001/getUser'
    }).then(res=>{setUser(res.data.user)}).catch(err=>console.log(err))
  }
    return(
    <div className={styles.container}>
        
        <div>
        <Data />
        </div>
    </div>
    )
}
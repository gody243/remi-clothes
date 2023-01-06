import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React,{useState,useEffect} from "react"

export default function Data(){
const[dataResponse,setDataResponse]=useState([])

useEffect(()=>{
    async function getPageData(){
        const apiUrlEndpoint=`http://localhost:3000/api/hello`
        const response= await fetch(apiUrlEndpoint)
        const res= await response.json();
        console.log(res);
        setDataResponse(res.products)
    }
    getPageData();
}, [])

return(
    <div className={styles.container}>
        {dataResponse.map((products)=>{
            return(
                <div key={products.productId}>
                <div>{products.productname}</div>
                <div className={styles.img}>
                    
                    <img className={styles.photo} src={`${products.image}`} alt="" />
                    
                    </div>
                </div>
            )
        })}
    </div>
)

}
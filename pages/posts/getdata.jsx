//import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React,{useState,useEffect} from "react"

export default function Data(){
const[dataResponse,setDataResponse]=useState([])

useEffect(()=>{
    const abortCont=new AbortController()
    async function getPageData(){
        const apiUrlEndpoint=`http://localhost:3000/api/hello`
        const response= await fetch(apiUrlEndpoint)
        
         const res= await response.json()//.catch(error=>{
        //     if(error === 'AbortError'){
        //         console.log('fetch aborted')
        //     }
        // });
       
        setDataResponse(res.products)
    }
    getPageData();
    return()=>abortCont.abort()
}, [])

return(
    <div className={styles.container}>
        {dataResponse.map((product) =>{
            return(
                <div key={product.productid}>
                    {product.productname}
                <div>
                    
                    <img className={styles.photo} src={`${product.image}`} alt="products"  />
                    
                    </div>
                   
                </div>
            )
        })}
    </div>
)

}
import Head from "next/head"
import Link from "next/link";
export default function register(){
    return( 
        <> 
         
             <Head>
                 <title>Register</title>
             </Head>
             <div>
                 <h2>
                     <Link href="/">homepage</Link>
                 </h2>
             </div>
        
         
         </>
    )
}
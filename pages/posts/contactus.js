
import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout"

export default function Contactus(){
    return( 
        
        <Layout>
            <Head>
                <title>Contact us</title>
            </Head>
            <div>
                <h2>
                    <Link href="/">homepage</Link>
                </h2>
            </div>
        </Layout>
    )
}
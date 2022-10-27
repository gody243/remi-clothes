
import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout"

export default function FirstPost(){
    return( 
        
        <Layout>
            <Head>
                <title>Login page</title>
            </Head>
            <div>
                <h2>
                    <Link href="/">homepage</Link>
                </h2>
            </div>
        </Layout>
    )
}
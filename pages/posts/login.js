
import LoginForm from "../../components/LoginForm";
import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout"

export default function FirstPost(){
    return( 
       <> 
        <Layout>
            <Head>
                <title>Login page</title>
            </Head>
            <div>
               <LoginForm/>
            </div>
        </Layout>
        
        </>
    )
}
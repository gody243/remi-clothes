
import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout"

export default function Aboutus(){
    return( 
        
        <Layout>
            <Head>
                <title>About us</title>
            </Head>
            <div>
                <h4>
                    <Link href="/"> homepage</Link>
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex arcu, at efficitur magna malesuada eget. Suspendisse potenti.
                 Quisque accumsan tellus vel ante semper interdum et vitae velit.
                  Quisque sed imperdiet urna. Integer arcu nunc, fermentum in tellus at,
                   efficitur consectetur odio. Sed porttitor est id nunc porta tempus.
                    Curabitur aliquam, metus et condimentum aliquam, arcu odio ornare quam,
                     faucibus bibendum mauris metus ut risus. Cras venenatis tortor id sagittis
                      mattis. Etiam non erat erat. In tristique, metus accumsan lobortis consequat,
                       erat ligula iaculis arcu, eget vestibulum nibh eros eget sem.
                       
            
                </p>
            </div>
        </Layout>
    )
}
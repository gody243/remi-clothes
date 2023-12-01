// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  mysql from "mysql2/promise"
require('dotenv').config()

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host:process.env.DB_HOST,
    database:"remi_clothes",
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
   
  })
  try{
    const query="SELECT * from produits"
    const values=[]
    const[data]=await dbconnection.execute(query,values)
    dbconnection.end()

    res.status(200).json({products:data})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }

}

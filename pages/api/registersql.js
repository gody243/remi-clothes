// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import mysql from "mysql2/promise"
import  {credentials} from '../posts/credentials'
export default async function handler(req, res) {
  
  const dbconnection = await mysql.createConnection({
    host:"localhost",
    database:"remi_clothes",
    user:"root",
    password:"",
   
  })
  // try{
  //   const query="SELECT * from register1"
  //   const values=[]
  //   const[data]=await dbconnection.execute(query,values)
  //   dbconnection.end()

  //   res.status(200).json({products:data})
  // }
  // catch(error){
  //   res.status(500).json({error:error.message})
  // }
  
  
  if (req.method==='POST') {
   const reqPayload=req?.body;
   
   
    console.log('Req Payload: ',reqPayload);

   return res.json(credentials)
    
  }
 
  }


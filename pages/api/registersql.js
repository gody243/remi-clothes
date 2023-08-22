// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import mysql from "mysql2/promise"
// import register from "../posts/register"
// export default async function handler(req, res) {
  
//   const dbconnection = await mysql.createConnection({
//     host:"localhost",
//     database:"remi_clothes",
//     user:"root",
//     password:"",
   
//   })
//   try{
//     const query=`insert into register1 values`
//     const values=[]
//     const[data]=await dbconnection.execute(query,values)
//     dbconnection.end()

//     res.status(200).json({register:data})
//   }
//   catch(error){
//     res.status(500).json({error:error.message})
//   }
  
  
//   if (req.method==='POST') {
//    const reqPayload=req?.body;
   
//    await register.create(reqPayload)
//     console.log('Req Payload: ',reqPayload);

  
    
//   }
 
//   }

const express=require('express');
router=express.Router()

router.post('/', async (req, res) => {
  const reqPayload=req?.body;
  await register.create(reqPayload);
})


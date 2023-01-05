
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/register.module.css"
import React,{useState} from "react"
import {appendErrors, useForm} from "react-hook-form"
//import handler from "../api/hello"

function register(){
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const { register, formState: { errors }}= useForm()
 
    const handleSubmit=async()=>{
        if(username.length===0 || email.length===0 || password.length<6)
        {
            alert("This is wrong, do Better!")
            }
            else{
                // app.post('/post',(req,res)=>{
                //     const name=req.body.username;
                //     const mail=req.body.email
                //     const pass=req.body.password;

                //     dbconnection.query('INSERT INTO register1 Values(?,?,?)',[name,mail,pass],(err,result)=>{
                //         if(err){
                //             console.log(err)
                //         }else{
                //             console.log('posted')
                //         }
                    // })

                    
                // })
    
    }
    }
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
             
             <div className={styles.container}>
                <div className="row mt-5">
                    <form>
                <div className="card-body">
                        <div className="form-group p-4 ">
                            <label htmlFor="username"> username: </label>
                            <input className="form-control" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            {errors.username && errors.username.type=="required" && <span className='text-danger'>username required</span>}
                        </div>
                        <div className="form-group p-4">
                            <label htmlFor="email"> email: </label>
                            <input className="form-control"name="email" id="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {errors.email && errors.email.type=="required" && <p className='text-danger'>email required</p>}
                        </div>
                        <div className="form-group p-4">
                            <label htmlFor="password"> password: </label>
                            <input type="password" name="password"value={password}onChange={(e)=>setPassword(e.target.value)}/>
                            {errors.password && errors.password.type=="required" && <p className='text-danger'>enter password</p>}
                            {errors.password && errors.password.type==="minLength" && <p className='text-warning'>paswword with 6 letters minimum</p>}
                        </div>
                        <div className="form-group p-4">
                           <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                        </div>
                        
                    </div>
                    </form>
                
                </div>
            </div>
           
            
        </>
    )
}
export default register
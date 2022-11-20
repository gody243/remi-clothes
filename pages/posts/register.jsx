import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/register.module.css"
import React from "react"
import {useForm} from "react-hook-form"
function register(){
    const { register, handleSubmit, formState: { errors }}= useForm()
  
    const onSubmit=data=>{
        console.log(data)
        alert("registration successful")
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                        <div className="form-group p-4 ">
                            <label htmlFor="username"> username: </label>
                            <input className="form-control" name="username" id="username" {...register('username', {required:true})}/>
                            {errors.username && errors.username.type=="required" && <span className='text-danger'>username required</span>}
                        </div>
                        <div className="form-group p-4">
                            <label htmlFor="email"> email: </label>
                            <input className="form-control"name="email" id="email"{...register('email', {required:true})}/>
                            {errors.email && errors.email.type=="required" && <p className='text-danger'>email required</p>}
                        </div>
                        <div className="form-group p-4">
                            <label htmlFor="password"> password: </label>
                            <input type="password" name="password"{...register('password', {required:true, minLength:6})}/>
                            {errors.password && errors.password.type=="required" && <p className='text-danger'>enter password</p>}
                            {errors.password && errors.password.type==="minLength" && <p className='text-warning'>paswword with 6 letters minimum</p>}
                        </div>
                        <div className="form-group p-4">
                           <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                        
                    </div>
                    </form>
                
                </div>
            </div>
           
            
        </>
    )
}
export default register
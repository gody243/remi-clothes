
import axios from 'axios'
import React from 'react';
import {useState} from 'react'

  
 function LoginForm () {

    const[username,setUsername]= useState('')
  const[password,setPassword]= useState('')
  

  const login=()=>{
    
    axios({
      method:"post",
      data:{
          username:username,
          password:password
      },
      withCredentials:true,
      url:"http://localhost:3001/login"
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  }
 

 
   
        return (
          
            <>
                <div>
                    <input type="text" name="username" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <button onClick={login}>login</button>
                
            </>

            )
    
}
export default LoginForm
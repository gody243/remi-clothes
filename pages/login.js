
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import axios from "axios";
import React,{ useState } from "react";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };
  
  return (
    <>
      <Layout>
        <Head>
          <title>Login page</title>
        </Head>
        
      
        <div>
          <h1 className="login"> Login Page</h1>
          </div>
          <div><Link className="homepage" href="/">homepage</Link></div>
          <div className="flex">
        <div className="credentials">
          <h4>Username</h4>
            <input 
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
         
         <h4>Password</h4>
            <input 
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          
          <button className="login-btn" onClick={login}>login</button>
        </div>
       
        <div><p>You don't have an account?</p>
          <Link href="./register">Click here to register</Link>
        </div>
        </div>
      </Layout>
    </>
  );
}

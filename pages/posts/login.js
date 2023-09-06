
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import axios from "axios";
import React from "react";
import { useState } from "react";

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
          <h1> Login Page</h1>
          <Link href="/">homepage</Link>
          <div>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>       
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button onClick={login}>login</button>
        </div>
      </Layout>
    </>
  );
}

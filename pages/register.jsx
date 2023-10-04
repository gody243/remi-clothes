
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/register.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    formState: { errors },
  } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const teamPayload = { username, email, password };

    if (username.length === 0 || email.length === 0 || password.length === 0) {
      alert("This is wrong, do Better!");
    }
    else{
      axios({
        method: "post",
        data: teamPayload,
        withCredentials: true,
        url: "http://localhost:3001/register",
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
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
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && errors.username.type == "required" && (
                  <span className="text-danger">username required</span>
                )}
              </div>
              <div className="form-group p-4">
                <label htmlFor="email"> email: </label>
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && errors.email.type == "required" && (
                  <p className="text-danger">email required</p>
                )}
              </div>
              <div className="form-group p-4">
                <label htmlFor="password"> password: </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 {errors.password && errors.password.type=="required" &&
                  <p className='text-danger'>enter password</p>}
              </div>
              <div className="form-group p-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  // }
}
export default register;

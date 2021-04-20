import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";
import Router from "next/router";

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [ischeck, setRemember] = useState("");

  const login = async (req, res) => {
    try {
      let result = await axios.post(
        `${config.URL}/login`,
        { username, password, ischeck },
        { withCredentials: true }
      );
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus("login success");
    } catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };
  const rergisform = () =>
    Router.push({
      pathname: "/register",
    });

  const loginForm = () => (
    <div class={styles.gridContainer}>
      <div className={styles.form}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className={styles.header}>
        <Navbar />
      </div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.log}>
          <h1>Login</h1>

          <div>
            <p>
              check: {ischeck}
              <br></br>
            </p>
            {status}
          </div>

          {loginForm()}
          <div>
            <input
              type="checkbox"
              name="IsRememberMe"
              onChange={(e) => setRemember(e.target.value)}
            />
            <p>Remember me!</p>
          </div>

          <div>
            <button
              className={styles.buttonregisup}
              onClick={() => rergisform()}
            >
              sign up
            </button>
            <button className={styles.buttonregis} onClick={login}>
              sign in
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

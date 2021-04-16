import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import axios from "axios";
import config from "../config/config";

export default function Register({ token }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const profileUser = async () => {
    console.log("token: ", token);
    const users = await axios.get(`${config.URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("user: ", users.data);
  };

  const register = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/register`, {
        name,
        surname,
        username,
        email,
        password,
      });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  const registerForm = () => (
    <div className={styles.gridContainer}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
  <br></br>
      <div>
        <input
          type="text"
          name="surname"
          placeholder="surname"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <br></br>
        <br></br>
        <div className={styles.log}>
          <h1>Register</h1>
          <br />
          Status: {status}
          <br />
          <br />
          <div className={styles.content}>{registerForm()}</div><br></br>
          <div>
            <button onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

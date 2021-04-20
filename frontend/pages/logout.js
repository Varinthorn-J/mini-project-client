import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";

export default function Logout({ token }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    console.log("remove token: ", token);
    let result = await axios.get(`${config.URL}/logout`, {
      withCredentials: true,
    });
    setStatus("Logout successful");
  };

  return (
    <Layout>
      <div className={styles.header}>
        <Navbar />
      </div>
      <Head>
        <title>User profile</title>
      </Head>
      <div className={styles.container}>
        <h1>Logout</h1>
        <div>
          <h3> {status} </h3>
        </div>
      </div>
    </Layout>
  );
}

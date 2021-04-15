import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import withAuth from "../components/withAuth";
import config from "../config/config";

const Foo1 = ({ token }) => {
  const [foo, setFoo] = useState({});

  useEffect(() => {
    fnFoo();
  }, []);
  useEffect(() => {
    today();
  }, []);

  const fnFoo = async () => {
    try {
      // console.log('token: ', token)
      const fooData = await axios.get(`${config.URL}/foo`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('foo: ', fooData.data)
      setFoo(fooData.data);
    } catch (e) {
      console.log(e);
    }
  };

  /////date
  function today(i) {
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;

    return today;
  }
  ///////

  return (
    <Layout>
      <Head>
        <title>Foo</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <br></br>
        <button
          type="button"
          onclick="document.getElementById('demo').innerHTML = Date()"
        >
          Click me to display Date and Time.
        </button>
        <p id="demo"></p>
        <h1>Foo</h1>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to WPJ</h1>

            <div className={styles.grid}>
              <a href="https://facebook.com" className={styles.card}>
                <h3>Facebook &rarr;</h3>
              </a>
              <a href="https:/google.com" className={styles.card}>
                <h3>Google&rarr;</h3>
              </a>
              <a
                href="https://www.instagram.com/?hl=en"
                className={styles.card}
              >
                <h3>IG &rarr;</h3>
              </a>
              <a href="https://www.youtube.com/" className={styles.card}>
                <h3>Youtube &rarr;</h3>
              </a>
            </div>
          </main>
        </div>
        );
      </div>
    </Layout>
  );
};

export default withAuth(Foo1);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Router from "next/router";

export default function Home({ token }) {
  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <br></br> <br></br> <br></br> <br></br> <br></br>  
        <div className={styles.pic}>
          <Image
            className={styles.immage}
            src="/pass.png"
            alt="my picture"
            width={200}
            height={200}
          />
          <p>หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue</p>
          <h2>$19.66 </h2>
        </div>
        <h2>Successful payment</h2>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

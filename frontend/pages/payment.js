import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Router from "next/router";

export default function Home({ token }) {
  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const paymoney = () => Router.push({ pathname: "/Paymenysuccess" });

  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <br></br><br></br>
        <h1>Payment</h1>
        <div className={styles.pic}>
          <Image  className={styles.immage} src="/ega.jpg" alt="my picture" width={200} height={200} />
          <p>หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue</p>
          <h2>$19.66 </h2>
          <div class="button">
            <button onClick={() => paymoney()}>ดำเนินการชำระเงิน</button>
          </div>
          <br></br>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
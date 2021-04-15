import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };
  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <h1>หูฟัง Gaming </h1>
        <div className={styles.pic}>
          <Image src="/k5.jpg" alt="my picture" width={200} height={200} />

          <div class="button">
            <a href="/k5" className={styles.card}>
              <h3>หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue</h3>
            </a>
            <h2>$19.66</h2>
          </div>
          <br></br>

          <Image src="/ega.jpg" alt="my picture" width={200} height={200} />
          <div class="button">
            <a href="/ega" className={styles.card}>
              <h3>EGA หูฟังเกม Type-H6 - Black</h3>
            </a>
            <h2>$16</h2>
          </div>
          <br></br>

          <Image src="/signo.jpg" alt="my picture" width={200} height={200} />
          <div class="button">
            <a href="/signo" className={styles.card}>
              <h3>SIGNO หูฟังเกม HP-829</h3>
            </a>
            <h2>$16.63</h2>
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

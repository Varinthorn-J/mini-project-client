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
  const CodeName = "หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue. ";
  const copyText = () => {
    navigator.clipboard.writeText(CodeName);
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
          <Image src="/ega.jpg" alt="my picture" width={200} height={200} />
          <h3>EGA หูฟังเกม Type-H6 - Black..<button onClick={copyText}> Copy </button></h3>
        ชื่อแบรนด์ : EGA  <br></br>
        รุ่น : Type-H6 <br></br>
        สี : Black<br></br>
        ขนาดสินค้า : 22x17x8 cm <br></br>
        น้ำหนัก : 0.4 kg <br></br>
        การรับประกัน : 2 Years Warranty<br></br>
         <br></br>
          <div className={styles.home}>
          <a href="/products" className={styles.card}>
              <h3>go to cat</h3>
            </a></div>
        </div>
        <br></br>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}

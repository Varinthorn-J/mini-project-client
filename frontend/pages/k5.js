import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  const addProducts = async () => {
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
  const style = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };
  return (
    <Layout>
      <div className={styles.header}>
        <Navbar />
      </div>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <h3> Product detail </h3>
        <Image
          className={styles.immage}
          src="/k5.jpg"
          alt="my picture"
          width={300}
          height={300}
        />
        <h3>
          หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue..
          <button onClick={copyText}> Copy </button>
        </h3>
        ชื่อแบรนด์ : Onikuma <br></br>
        รุ่น : K5 Pro <br></br>
        สี : Black/Blue <br></br>
        ขนาดสินค้า : 9x20x18 cm <br></br>
        น้ำหนัก : 0.48 <br></br>
        การรับประกัน : 2 ปี <br></br>
        <br></br>
        <div style={style}>
          <a href="/products" className={styles.card}>
            <h3>ไปยังรถเข็น</h3>
          </a>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

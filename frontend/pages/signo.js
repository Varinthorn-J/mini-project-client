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
  const style = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }
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
        <div className={styles.pic}>
         
          <Image  className={styles.immage} src="/signo.jpg" alt="my picture" width={200} height={200} />
          <div class="button">
            <a href="/foo" className={styles.card}>
              <h3> หูฟัง Gaming รุ่น SIGNO HP-829 <button onClick={copyText}> Copy </button></h3>
              SIGNO หูฟังเกม HP-825 <br></br>
              ชื่อแบรนด์ : SIGNO <br></br>
              รุ่น : HP-825 <br></br>
              ขนาดสินค้า : 18x10x22 cm <br></br>
              น้ำหนัก : 0.28 kg <br></br>
              การรับประกัน : 1 Year <br></br>
            </a><br></br>
            <div style={style}>
          <a href="/products" className={styles.card}> 
              <h3>ไปยังรถเข็น</h3>
            </a></div>
               
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

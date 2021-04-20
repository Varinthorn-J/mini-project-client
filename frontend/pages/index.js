import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.h1}>
        <h1>HeadPhones Gaming</h1>
      </div>
      <div className={styles.row}>
        <div></div>
        <div className={styles.column1}>
          {/* <h2> Column1</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/k5.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/k5" className={styles.card}>
                <p> หูฟัง Gaming รุ่น K5 Blue - Black </p>
              </a>
              <h2>$16</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column1}> */}
            {/* <h2> Column1</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/k5.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/k5" className={styles.card}>
                  <p> หูฟัง Gaming รุ่น K5 Blue - Black </p>
                </a>
                <h2>$16</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column2}>
          {/* <h2> Column2</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/ega.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/ega" className={styles.card}>
                <p> หูฟัง Gaming รุ่น EGA Type-H6 - Black </p>
              </a>
              <h2>$16</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column2}> */}
            {/* <h2> Column2</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/ega.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/ega" className={styles.card}>
                  <p> หูฟัง Gaming รุ่น EGA Type-H6 - Black </p>
                </a>
                <h2>$16</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column3}>
          {/* <h2> Column3</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/signo.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/signo" className={styles.card}>
                <p> หูฟัง Gaming รุ่น Signo - Black </p>
              </a>
              <h2>$16</h2>{" "}
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column3}> */}
            {/* <h2> Column3</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/signo.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/signo" className={styles.card}>
                  <p> หูฟัง Gaming รุ่น Signo - Black </p>
                </a>
                <h2>$16</h2>{" "}
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* <div className={styles.footer}>
        <footer>footer</footer>
      </div> */}
    </body>
  );
}

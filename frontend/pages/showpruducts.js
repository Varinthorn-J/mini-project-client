import Layout from "../components/layout";
import Navbar from "../components/navbar";
import AuthProducts from "../components/AuthPruduct";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../config/config";
import Image from "next/image";

const URL = `${config.URL}/products`;
const product = ({ token }) => {
  const [products, setProducts] = useState({
    list: [{ id: 1, name: "Foo", numberproduct: 15 }],
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let product = await axios.get(`${config.URL}/products`);
    setProducts(product.data);
  };

  const printProducts = () => {
    if (products.list && products.list.length)
      return products.list.map((item, index) => (
        <li key={index}>
           <div className={Styles.pic}>
            <Image  className={styles.immage} src="/ega.jpg" width={200} height={200} />
            <br></br>
          </div>
          name: {item.name}, numberproduct: {item.numberproduct}
        </li>
      ));
  };

  return (
    <Layout>
      <div className={Styles.container}>
        <Navbar /><br></br>
        <br></br>
         <ul>{printProducts()}</ul>
        {JSON.stringify(products.products)}
       
      </div>
    </Layout>
  );
};

export default AuthProducts(product);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

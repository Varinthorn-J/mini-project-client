import Layout from "../components/layout";
import Navbar from "../components/navbar";
import AuthProducts from "../components/AuthPruduct";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import config from "../config/config";

const URL = `${config.URL}/products`;
const Products = ({ token }) => {
  const [products, setProducts] = useState({
    list: [{ id: 1, name: "Foo", numberproduct: 20 }],
  });
  const [name, setname] = useState("");
  const [numberproduct, setnumberproduct] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let product = await axios.get(`${config.URL}/products`);
    setProducts(product.data);
  };

  const updateProducts = async (id) => {
    let product = await axios.put(`${URL}/${id}`, {
      name,
      numberproduct,
    });
    setProducts(product.data);
  };

  const deleteProducts = async (id) => {
    let product = await axios.delete(`${URL}/${id}`);
    setProducts(product.data);
  };

  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const printProducts = () => {
    if (products.list && products.list.length)
      return products.list.map((item, index) => (
        <li key={index}>
          name: {item.name}, numberproduct: {item.numberproduct}
          <button onClick={() => updateProducts(item.id)}>Update</button>
          <button onClick={() => deleteProducts(item.id)}>Delete</button>
        </li>
      ));
  };
  return (
    <Layout>
      <div className={Styles.container}>
        <Navbar />
        <br></br>
        <ul>{printProducts()}</ul>
        <h2>Insert Products</h2>

        <input
          /*name*/
          type="text"
          placeholder="name"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br></br>

        <input
          /*numberproduct*/
          type="text"
          placeholder="number"
          onChange={(e) => setnumberproduct(e.target.value)}
        ></input>
        <br></br>

        <div class="button">
          <button onClick={() => addProducts(name, numberproduct)}>
            Add to cat
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AuthProducts(Products);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

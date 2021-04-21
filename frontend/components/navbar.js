import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link'
import { Router } from 'next/router';
import styles from "../styles/Home.module.css";

const Navbar = () => (
    <div>
        <Link className={styles.header} href="/"><a> Home </a></Link> |
         <Link className={styles.header} href="/login"><a> Sign In </a></Link> |
        <Link className={styles.header} href="/register"><a> Sign Up </a></Link>  |
        <Link className={styles.header} href="/products"><a> Cart </a></Link> |
        <Link className={styles.header} href="/logout"><a> Sign Out </a></Link> 
    </div> 

)


   
export default Navbar
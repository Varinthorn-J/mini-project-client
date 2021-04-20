import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link'
import { Router } from 'next/router';
import styles from "../styles/Home.module.css";

const Navbar = () => (
    <div className={styles.bar}>
        <Link className={styles.butnav} href="/"><a> Home </a></Link> |
         <Link className={styles.butnav} href="/login"><a> Sign In </a></Link> |
        <Link className={styles.butnav} href="/register"><a> Sign Up </a></Link>  |
      
        <Link className={styles.butnav} href="/products"><a> Cart </a></Link> |
        <Link className={styles.butnav} href="/logout"><a> Sign Out </a></Link> 
    </div> 

)


   
export default Navbar
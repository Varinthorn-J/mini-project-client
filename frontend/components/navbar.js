import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link'
import { Router } from 'next/router';
import styles from "../styles/Home.module.css";

const Navbar = () => (
    <div className={styles.bar}>
        <Link href="/"><a> Home </a></Link> |
         <Link href="/login"><a> Sign In </a></Link> |
        <Link href="/register"><a> Sign Up </a></Link>  |
        {/* <Link href="/payment"><a> Payment </a></Link> | */}
        <Link href="/products"><a> Cart </a></Link> |
        <Link href="/logout"><a> Sign Out </a></Link> 
    </div> 

)


   
export default Navbar
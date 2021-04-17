import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link'
import { Router } from 'next/router';
import styles from "../styles/Home.module.css";

const Navbar = () => (
    <div className={styles.bar}>
        <Link href="/"><a>หน้าเเรก </a></Link> |
         <Link href="/login"><a> ล็อกอิน </a></Link> |
        <Link href="/register"><a> ลงทะเบียน </a></Link>  |
        {/* <Link href="/profile"><a> ข้อมูลส่วนตัว </a></Link> |  */}
        {/* <Link href="/getConfig"><a> Config </a></Link> |  */}
        <Link href="/foo"><a>ชำระเงิน</a></Link> |
        {/* <Link href="/students"><a>Students</a></Link> | */}
        <Link href="/products"><a>รถเข็น</a></Link> |
        <Link href="/logout"><a> ออกจากระบบ </a></Link> 
    </div> 

)


   
export default Navbar
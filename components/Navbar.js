import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'

const Navbar = () => {

    const [open, setopen] = useState(false)
    

    return ( 
        <div className={styles.navbar}>
           <div className={styles.container}>
               <div className={styles.row}>
                   <div className={styles.logo}>
                       <Image src="/pic2.jpg" alt="" width={50} height={50}/>
                   </div>
    
                 <div className={styles.nav}>
                <ul className={styles.listItems}>
                      <li className={styles.items}>
                         <Link href="/">Home</Link>
                      </li>
                      <li className={styles.items}>
                         <Link href="/products/Activations">Activations</Link>
                      </li>
                      <li className={styles.items}>
                         <Link href="/products/Digital Marketing">Digital Marketing</Link>
                     </li>
                
                       <li className={styles.items}>
                        <Link href="/products/Merchandising">Merchandising</Link>
                      </li>
                      <li className={styles.items}>
                        <Link href="/products/Branding">Branding</Link>
                       </li>
                       <li className={styles.items}>
                         <Link href="/products/Contact">Contacts</Link>
                       </li>
                      </ul>
                  </div>

                  <div className={styles.hamburger} onClick={ ()=>setopen(!open) }>
                      <div className={styles.line}/>
                      <div className={styles.line}/>
                      <div className={styles.line}/>
                  </div>

                  <ul onClick={ ()=>setopen(false) } className={styles.menu} style={{right:open ? "0px" : "-50vw"}}>
                  <li className={styles.menuItem}>
                         <Link href="/">HOME</Link>
                      </li>
                      <li className={styles.menuItem}>
                         <Link href="/products/Activations">ACTIVATIONS</Link>
                      </li>
                      <li className={styles.menuItem}>
                         <Link href="/products/digital marketing">DIGITAL MARKETING</Link>
                     </li>
                
                       <li className={styles.menuItem}>
                        <Link href="/products/merchandising">MERCHANDISING</Link>
                      </li>
                      <li className={styles.menuItem}>
                        <Link href="/products/branding">BRANDING</Link>
                       </li>
                       <li className={styles.menuItem}>
                         <Link href="/products/contact">CONTACTS</Link>
                       </li>
                  </ul>

               </div>
           </div>
        </div>
     );
}
 
export default Navbar;
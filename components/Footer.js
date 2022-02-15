import styles from '../styles/Footer.module.css'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.content}>
            
                <h2 className={styles.title}>Anitas Digital Marketing</h2>
                <h2 className={styles.linkTitle}>
                   <Link href="/contact" passHref>
                     <span className={styles.linkText}>Work With Us</span>
                    
                   </Link>
                </h2>
            </div>
            <div className={styles.locations}>
                <div className={styles.items}>
                    Kenya,Kiambu,Ruiru<br/>
                    Fairview Street<br/>
                    second sunrise avenue<br/>
                </div>
                <div className={styles.details}>
                   Contact@Anitas Digital Marketing<br/>
                </div>

            </div>

            <div className={styles.locations}>
                <div className={styles.items}>
                    Kenya,Kiambu,Ruiru<br/>
                    Fairview Street<br/>
                    second sunrise avenue<br/>
                </div>
                <div className={styles.details}>
                   Contact@Anitas Digital Marketing 2022<br/>
                </div>

            </div>
                 

            
            </div>
     );
}
 
export default Footer;
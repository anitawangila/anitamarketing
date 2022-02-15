import styles from '../styles/Intro.module.css'
import Image from "next/image"
import Link from "next/link"

const Intro = () => {
    return ( 
        
        <div className={styles.section}>
            
           <div className={styles.content}>
                <p className={styles.subTitle}>Branding and Activations agency .</p>
                <h1 className={styles.title}>
                 <span className={styles.brand}>anita</span> digital marketing agency
                </h1>

                <div className={styles.description}>
                 <p>Branding and Activations agency well established with a rich sales and marketing background.</p>
                </div>

                
             
                <button className={styles.button}><a><u>DISCOVER MORE</u></a></button>
               
               

            </div>

            <div className={styles.image}>
            <img src="/3.svg" />
            </div>

        </div>
  
     );
}
 
export default Intro;
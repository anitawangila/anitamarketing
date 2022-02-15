import styles from '../styles/service.module.css'
import Link from "next/link"
import Image from "next/image"


const Services = ({services}) => {
    return (  
      /*container*/ /*services*/
   <div className={styles.service}>   
      <h1 className={styles.title}>Our Works</h1>
      <h1 className={styles.subtitle}>Services That We Offer</h1>     
     
      <div className={styles.container}> 
      
          {services.map(service =>(
            <Link passHref href={`/products/${service.name}`} key={service.id}>
             
              <div className={styles.info}>
                 
                  <div className={styles.desc}>{service.description}</div>
                  <div className={styles.name}>{service.title}</div>
                  <div className={styles.photos}>{(
                       <Image src={`/${service.photo}`}
                                    
                                    width="100%"
                                    objectFit="cover"
                                    layout="responsive"
                                     height="100%"
                                     alt=""/>)}

                  </div>
                      
              </div>
            </Link>
            ))}
          </div>

        </div>
    );
}
 
export default Services;
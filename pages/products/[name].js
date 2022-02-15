
import { data } from '../../data'
import Image from "next/image"
import Link from "next/link"

export async function getStaticPaths() {
  const products = data;
  const paths = products.map(item =>{
    return{
      params : {name:item.name},
    }

  }
)
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export const getStaticProps = async(context)=> {
  const name= context.params.name;
  const product = data.filter(item=>item.name===name)[0];
  return{
props:{
    product
},
  }
}

     

const Product = ({product}) => {
    return ( 
        <div className="service">
        
          <div className="photos">
            {product.pics.map(pic =>(
              <div className='imgContainer' key={pic.id}>
                <Image src={pic.pic}
                                    
                                    width="100%"
                                    objectFit="cover"
                                    layout="fill"
                                     height="100%"
                                     alt=""/>

              </div>
            ))}

          </div>
          <div className='wrapper'>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          
          </div>
      </div>
     
        
     );
}
 
export default Product;
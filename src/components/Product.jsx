
import Product1 from '../assets/img/product-coffee-01.jpeg'
import Product2 from '../assets/img/product-coffee-02.jpeg'
import Product3 from '../assets/img/product-coffee-03.jpeg'
import Product4 from '../assets/img/product-coffee-04.jpeg'
import Product5 from '../assets/img/product-coffee-05.jpeg'
import Product6 from '../assets/img/product-coffee-06.jpeg'
import Cfcart from './Cfcart'
const Product = () => {
    
    const images=[
        {  id:1,
            urlImg:Product1,
        ex:"5",
        namecoffee:"Black tea cup"
         },
        { id:2,
              urlImg:Product2,
            ex:"70",
            namecoffee:"Coffee Dog"
        },
        {   id:3,
            urlImg:Product3,
            ex:"88",
            namecoffee:"Coffee milk"
        },
        {   id:4,
            urlImg:Product4,
            ex:"65",
            namecoffee:"Coffee milk2"
        },
        {   id:5,
            urlImg:Product5,
            ex:"45",
            namecoffee:"Coffee summer"
        },
        {   id:6,
            urlImg:Product6,
            ex:"20",
            namecoffee:"Coffee winter"
        }
    ]
    return ( <>
        <div className="w-[95%] 2xl:w-[65%] mx-auto my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
                {images.map((images)=>(
                    <Cfcart key={images.id} ex={images.ex} image={images.urlImg} namecoffee={images.namecoffee} />
                ))}
            </div>
            
        </div>
    </> );
}
 
export default Product;
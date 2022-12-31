import { useState } from "react";


const Cfcart = ({ex,image,namecoffee}) => {
    const [add,setAdd]=useState(false)
 
    
    const handleClick =()=>{
        setAdd(true)
        
           
        
        
          
    }
    
    return ( 
        <>
        <div className="h-[420px] flex flex-col my-3 p-1 md:p-3">
                         <div className='relative h-[300px] md:h-[400px]   group'><img onClick={handleClick} src={image} alt="" className="object-cover h-[300px] md:h-[370px] mx-auto hover:scale-105 group" />
                        
                          </div>                              
                            {add ?  (<p className='text-xl font-[400] pt-1 md:pt-2  text-gray-200 text-center'>{namecoffee}</p>) : 
                            (<p onClick={handleClick} className='text-xl  font-[400] py-2 text-gray-600 cursor-pointer text-center hover:text-red-300'>{namecoffee}</p>)
                                   
                            }
                        <p className="text-[16px] text-center mb-1 md:mb-3 {add && `text-gray-200`})"> {ex}<span>$</span></p>
                        <div className="w-[200px] mx-auto h-[1px] bg-slate-400 md:hidden"></div>
         </div>
         

         </>
     );
}

export default Cfcart;
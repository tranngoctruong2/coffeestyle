import {BsCart2} from "react-icons/bs"
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
 

  const [handleNav,sethandleNav] =useState(false)
    return ( 
        <header  className="p-3 sm:p-4 md:p-6 mx-auto w-full max-w-screen-2xl">
        <nav className="flex flex-row justify-between items-center relative">
          <div className="logo basis-2/6 text-center text-2xl font-semibold cursor-pointer">
            CoffeeStyle.
          </div>
          <ul id="tqd-top-menu" className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
            <li className="tqd-top-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="tqd-top-menu-item">
             Products
             
            </li>
            <li className="tqd-top-menu-item">
             Blog
             
            </li>
            <li className="tqd-top-menu-item">
             About
             
            </li>
            <li className="tqd-top-menu-item">
             Contact
             
            </li>
            <li className="tqd-top-menu-item">
             StyleGuide
             
            </li>
           
          </ul>

          <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
            <li className="tqd-top-menu-item">
              <div className="flex item-center">
                    <div className="flex item-center">    <Link to='/cart'><BsCart2 size={23}/> </Link>
                <span className="mx-2 mt-1">Cart</span></div>
                 < Link to='/main'> <div className=" rounded-full mx-2 px-2 py-1 bg-orange-400 hover:bg-blue-400 text-white">7</div></Link>
                </div>
            </li>
          </ul>

          <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
           {handleNav?<AiOutlineClose className="absolute z-[100]" onClick={()=>sethandleNav(!handleNav)} size={23}/>:<AiOutlineMenu onClick={()=>sethandleNav(!handleNav)} size={23}/>}
           {handleNav && (
            <ul className="absolute w-full h-screen top-[50px] bg-black/80 left-0">
              <li className="tqd-nav-menu-item">Home</li>
              <li className="tqd-nav-menu-item">Products</li>
              <li className="tqd-nav-menu-item">Blog</li>
              <li className="tqd-nav-menu-item">Contact</li>
            </ul>
           )}
          </div>
        </nav>
      </header>
     );
}
 
export default Header;
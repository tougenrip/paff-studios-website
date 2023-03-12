import React, {useState} from 'react'
import logo from '../img/pafflogo.webp'
import Button from './button';
import { motion } from 'framer-motion';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"JOURNEY",link:"/"},
      {name:"ABOUT",link:"/"},
    ];
    
    let [open,setOpen]=useState(false);
  return (
    
    <div className=' w-full fixed top-0 left-0 mt-5 md:mt-0 z-10 '>
      <motion.div
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{
                  delay:1,
                  type: "ease in",
                  stiffness: 100,
                  damping: 20,
                  duration: .5
                }}
                >
      <div className='md:flex items-center  justify-between bg-transparent py-4 md:px-11 px-7  '>
      <div className=' text-2xl cursor-pointer flex items-center font-[Jura] 
      text-gray-800'>
        <img src={logo} alt="" className='h-10 md:h-auto md:max-h-10 z-50' />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer font-[Jura] md:hidden md:mt-4 text-white z-20'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static pt-56 md:pt-0 bg-black bg-opacity-90 md:h-14 h-screen md:bg-transparent  z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[-20px] ':'top-[-1200px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-black font-[Jura] text-sm md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-red-700 duration-500 tracking-widest'>{link.name}</a>
            </li>
          ))
        }
        <div className='ml-8'>
        <Button >
          CONNECT
        </Button>
        </div>
      </ul>
      
      </div>
      </motion.div>
    </div>
   
  )
}

export default Navbar
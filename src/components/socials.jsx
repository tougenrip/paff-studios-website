import React from 'react'
import { motion } from 'framer-motion';

let Social =[
    {name:"logo-linkedin",link:"/"},
    {name:"logo-instagram",link:"/"},
    {name:"logo-facebook",link:"/"},
    {name:"logo-discord",link:"/"},      
  ];
const Sociallink = () => {
  return (
    <motion.div
    initial={{ x:50 }}
    animate={{ x:0 }}
    transition={{
      delay:2,
      type: "ease in",
      stiffness: 100,
      damping: 20,
      duration: 1
    }}
    >
    <div className='fixed bottom-[38vh] right-7 lg:right-16 bg-black bg-opacity-60 p-2 rounded-xl z-50'>
        <ul className={``}>
    {
      Social.map((link)=>(
        <li key={link.name} className='my-2'>
          <a href={link.link} className='text-white   hover:text-red-700 duration-500 tracking-widest'><ion-icon name={link.name} ></ion-icon></a>
        </li>
      ))
    }
  </ul>
  </div>
  </motion.div>

  )
}

export default Sociallink
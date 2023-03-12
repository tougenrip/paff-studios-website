import { motion } from 'framer-motion';
import React from 'react';
import CanvasScrollClip from "canvas-scroll-clip";

import ScrollyVideo from 'scrolly-video';
const Hero = () => {
  return (
    <>
      {/* <div className='' class="videocontainer">
        <video className='fixed bottom-0 left-0 min-h-full min-w-full w-auto h-auto object-cover' id="video" src="video/bgvid.mp4"></video>    	
      </div> */}
       
        
      
        <ScrollyVideo src="https://akillisitem.com/bgvid.mp4" />
      
        <div className='mt-0 md:mt-24 mx-auto md:rounded-3xl w-full md:w-[95vw] h-screen md:max-h-[89vh] bg-Hero bg-heroCover md:bg-[70%] bg-[70%] '>
              <div className='pr-7 font-Inter text-white text-start absolute bottom-16 left-7 p-5 rounded-3xl  md:bottom-35 lg:bottom-24 md:left-16 lg:left-20 text-4xl lg:text-6xl ' >
                        <motion.div
                initial={{ opacity:0, y:0 }}
                animate={{ 
                  opacity:1, y:30
                }}
                transition={{
                  delay:1,
                  type: "ease in",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5
                }}
                >
                <h1>
                  <span className='font-thin'>‘Think Outside the Block ’</span><br />The Future is the Gift We Create
                </h1>
                </motion.div>
              </div>
            <div>
          </div>
        </div>
      
    </>
  )
}

export default Hero
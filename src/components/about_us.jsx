

import React from 'react';
import Button from './button';
import Simple3dviewer from './simple3dviewer';

const AboutUs = () => {
  return (
    <>

    <div className=' relative h-[500px] md:h-[750px] lg:h-[700px] grid gap-0 grid-cols-1 lg:grid-cols-12 py-5 px-6 mt-[150px] mb-20 md:mx-10 lg:px-10 md:mt-32 '>
        <div className=' col-span-8 self-center '>
            <div className=' w-full  text-white font-Gilroy font-extrabold '>
                <h1 className='text-6xl'>Discover a New Digital World</h1>
                <p className='mt-10 md:mt-7 text-3xl md:text-4xl lg:text-5xl font-light'>We are the gateway to the world of Web 3.0. "HUB" lets you create your own metaverse and connect with a community of like-minded explorers.</p>
                <div className=' mx-0 my-10'>
                  <Button>
                  <a href="http://paffstudios.com">Learn more</a>
                </Button>
                </div>
                
            </div>
        </div>
        <div className='relative col-span-4 mx-auto self-center h-[700px] max-w-xl mt-20 md:mt-0'>
          <Simple3dviewer />
        </div>
    </div>
    
    </>
   
  )
}

export default AboutUs
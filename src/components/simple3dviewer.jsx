import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Oculus_quest_vr_headset';

const Simple3dviewer = () => {
  return (
    <div className='col-span-4 self-center h-[700px]'>
            <Canvas className=' pointer-events-none'>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Model position={[-0.2, 0, 0]} />
            </Canvas>
        </div>
  )
}

export default Simple3dviewer

import React from 'react'

const Textpath = () => {
  return (
            <svg id="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none"/>
        
        <text  y="40" fontSize="32">
            <textPath id="text-path" href="#text-curve" startOffset="200">
            * Keyframers really know animation.
            </textPath>
        </text>
        </svg>
  )
}

export default Textpath
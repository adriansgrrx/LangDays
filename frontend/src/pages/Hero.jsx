import React from 'react'
import VideoBG from '../components/VideoBG'

const Hero = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <VideoBG />
            {/* Dark Overlay for better text readability */}
            
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
    )
}

export default Hero
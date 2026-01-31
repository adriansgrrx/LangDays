import React from 'react'
import VideoBG from '../components/VideoBG'

const Hero = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <VideoBG />
            
            <div className='z-10 text-white'>
                Masonry
            </div>
        </div>
    )
}

export default Hero
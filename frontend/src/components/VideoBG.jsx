import React from 'react'

const VideoBG = () => {
    return (
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/video/video-bg.mp4"
            autoPlay
            loop
            muted
        />
    )
}

export default VideoBG
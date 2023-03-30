import React, { useRef, useState } from 'react'
import "./video.css"
import gato from '../videos/gato-1.mp4'

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {
        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src={gato}
            >


            </video>
        </div>
    )
}

export default Video
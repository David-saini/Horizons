import React, { useState, useRef } from 'react';
import poster from "../assets/Image/webp/ExploreImg.webp";
import Video1 from "../assets/video/video.mp4";
import VideoPlayerbtn from "../assets/Image/webp/VideoPlayerBtn.webp"

const Explore = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark mb-6 sm:mb-8 lg:mb-10'>Explore <span className='text-lightgreen'>Beautiful </span>World</h2>

                <div className='border-white rounded-[21px] border-[16px] video_card max-w-[896px] mx-auto relative'>
                    <video ref={videoRef} autoPlay={isPlaying} src={Video1} loop poster={poster}></video>

                    <button className='absolute top-[50%] left-[50%] translate-[-50%,-50%]' onClick={togglePlay}>
                        <img className='w-6 sm:w-8 md:w-10' src={VideoPlayerbtn} alt="VideoPlayerbtn" />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Explore;

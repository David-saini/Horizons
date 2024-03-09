import React, { useState, useRef } from 'react';
import poster from "../assets/Image/webp/ExploreImg.webp";
import PlaneVector from "../assets/Image/webp/PlaneVector.webp"
import Video1 from "../assets/video/video.mp4";
import VideoPlayerbtn from "../assets/Image/webp/VideoPlayerBtn.webp"
import LeftVector from "../assets/Image/webp/LeftCourvedarrow.webp"

const BeautifulWorld = () => {
    // State to manage video play/pause
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    // Function to toggle video play/pause
    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    // Function to handle video click event
    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className='max-w-[1440px] mx-auto relative'>
            <img className='absolute top-[-40%] md:top-[-20%] right-0 xl:right-[3%] w-[110px] md:w-[130px] lg:w-[150px] xl:w-[177px]' src={PlaneVector} alt="PlaneVector" />
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <img className='absolute bottom-[-25%] lg:bottom-[-11%] left-2 max-w-[110px] max-h-[115px] xl:max-w-[131px] xl:max-h-[135px] md:block hidden left_vector' src={LeftVector} alt="LeftVector" />
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl font-kanit font-bold leading-[120%] text-center text-dark mb-6 md:mb-8 xl:mb-10'>Explore <span className='text-lightgreen'>Beautiful </span>World</h2>
                {/*================== video-div =====================*/}
                <div className='border-white rounded-[21px] border-[16px] video_card max-w-[896px] mx-auto relative' data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="linear" >
                    <div className='rounded-[8px] border-white border border-solid overflow-hidden'>
                        <video ref={videoRef} onClick={handleVideoClick} autoPlay={isPlaying} src={Video1} loop poster={poster} className='cursor-pointer'></video>
                    </div>
                    {/*============ button ===============*/}
                    {!isPlaying && (
                        <button className='absolute top-[50%] left-[50%] translate-[-50%,-50%]' onClick={togglePlay}>
                            <img className='w-6 sm:w-8 md:w-10' src={VideoPlayerbtn} alt="VideoPlayerbtn" />
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
};

export default BeautifulWorld;
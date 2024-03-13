import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import RightVector from "../assets/Image/webp/RightCurvedArrow.webp"
import right_vector from "../assets/Image/svg/RightVector.svg"
import { LearnMoreBtn, SliderNextbtn, SliderPrevbtn, TikMark } from './Common/Icons';

// Define the OurService functional component
const OurService = () => {
    // Function to go to the next slide
    const nextarrow = () => {
        if (swiper.current && swiper.current.swiper) {
            swiper.current.swiper.slideNext();
        }
    };
    // Function to go to the previous slide
    const prevarrow = () => {
        if (swiper.current && swiper.current.swiper) {
            swiper.current.swiper.slidePrev();
        }
    };
    // Ref to access Swiper instance
    const swiper = React.useRef(null);
    // Function to handle Swiper initialization
    const onSwiper = (swiper) => {
        swiper.slides.forEach((slide, index) => {
            if (index === swiper.realIndex) {
                slide.classList.add('swiper-slide-center');
            } else {
                slide.classList.remove('swiper-slide-center');
            }
        });
    };
    // JSX structure for the OurService component
    return (
        <div id="Services">

            <h2 className='text-[30px] md:text-[40px] lg:text-xxl font-kanit font-bold leading-[120%] text-center text-dark'>Our <span className='text-lightgreen'>Services</span></h2>
            <div className='max-w-[1440px] mx-auto relative'>
                <button className="absolute top-[50%] left-[5%] z-[10] xl:block hidden" onClick={prevarrow}><SliderPrevbtn /></button>
                <button className="absolute top-[50%] right-[5%] z-[10] xl:block hidden" onClick={nextarrow}><SliderNextbtn /></button>
                {/* <img className="max-w-[80px] max-h-[80px] sm:max-w-[110px] sm:max-h-[115px] xl:max-w-[131px] xl:max-h-[135px] top-[-15%] md:top-[-30%] lg:top-[-40%] right-[5%] xl:right-[12%] absolute right_vector" src={RightVector} alt="RightVector" /> */}
                <img className="max-w-[80px] max-h-[80px] sm:max-w-[110px] sm:max-h-[115px] xl:max-w-[131px] xl:max-h-[135px] top-[-15%] md:top-[-30%] lg:top-[-40%] right-[5%] xl:right-[12%] absolute" src={right_vector} alt="RightVector" />
                <div className='max-w-[1164px] mx-auto md:px-3 px-5'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        ref={swiper}
                        navigation={{
                            prevEl: '.custom-arrow.prev',
                            nextEl: '.custom-arrow.next'
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        onSwiper={onSwiper}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 2
                            }
                        }}

                        pagination={{ clickable: true }}>

                        <SwiperSlide className="swiper-slide">
                            <div className='pt-5 pb-12 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border shadow-shadow1 card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] font-kanit mt-4 card'>Customized Itineraries</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] font-kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8 flex items-center gap-1 font-kanit font-medium text-base leading-[150%] text-lightgreen card'>Learn More<LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className='pt-5 pb-12 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border shadow-shadow1 card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] font-kanit mt-4 card'>Destination Expertise</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] font-kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8 flex items-center gap-1 font-kanit font-medium text-base leading-[150%] text-lightgreen card'>Learn More<LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className='pt-5 pb-12 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border shadow-shadow1 card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] font-kanit mt-4 card'>Travel Insurance</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] font-kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8 flex items-center gap-1 font-kanit font-medium text-base leading-[150%] text-lightgreen card'>Learn More<LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className='pt-5 pb-12 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border shadow-shadow1 card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] font-kanit mt-4 card'>Destination Expertise</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] font-kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8 flex items-center gap-1 font-kanit font-medium text-base leading-[150%] text-lightgreen card'>Learn More<LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurService
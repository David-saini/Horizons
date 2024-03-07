import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LearnMoreBtn, Nextbtn, Prevbtn, TikMark } from './Icon';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import RightVector from "../assets/Image/webp/RightCurvedArrow.webp"



const Service = () => {
    const goNext = () => {
        if (swiper.current && swiper.current.swiper) {
            swiper.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper.current && swiper.current.swiper) {
            swiper.current.swiper.slidePrev();
        }
    };


    const swiper = React.useRef(null);


    const onSwiper = (swiper) => {
        swiper.slides.forEach((slide, index) => {
            if (index === swiper.realIndex) {
                slide.classList.add('swiper-slide-center');
            } else {
                slide.classList.remove('swiper-slide-center');
            }
        });
    };

    return (
        <div id="Services">

            <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark'>Our <span className='text-lightgreen'>Services</span></h2>
            <div className='max-w-[1440px] mx-auto relative'>
                <button className="absolute top-[100%] left-[50%] translate-x-[-50%] xl:translate-x-0 xl:top-[50%] xl:left-[5%] z-[10] lg:block hidden" onClick={goPrev}><Prevbtn /></button>
                <button className="absolute top-[100%] right-[40%] translate-x-[-50%] xl:translate-x-0 xl:top-[50%] xl:right-[5%] z-[10] lg:block hidden" onClick={goNext}><Nextbtn /></button>
                <img className="max-w-[80px] max-h-[80px] sm:max-w-[110px] sm:max-h-[115px] xl:max-w-[131px] xl:max-h-[135px] top-[-15%] md:top-[-30%] lg:top-[-40%] right-[5%] xl:right-[12%] absolute" src={RightVector} alt="RightVector" />
                <div className='max-w-[1164px] mx-auto md:px-3 px-5'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
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
                            }
                        }}
                    >

                        <SwiperSlide className="swiper-slide">
                            <div className='py-5 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="swiper-slide">
                            <div className='py-5 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="swiper-slide">
                            <div className='py-5 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="swiper-slide">
                            <div className='py-5 sm:pt-10 sm:pb-8'>
                                <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <TikMark />
                                        <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                        <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                        <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
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

export default Service
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SliderNextbtn, SliderPrevbtn } from './Common/Icons';
import { TestimonialCards } from './Common/Helper';
// Define the Explore functional component
const Explore = () => {
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
    // Reference for the swiper instance
    const swiper = React.useRef(null);
    // Callback function triggered when swiper instance is created
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
        <div className="py-12 sm:py-[60px] md:py-[70px] xl:py-[120px]">

            <h2 className='text-[30px] md:text-[40px] lg:text-xxl font-kanit font-bold leading-[120%] text-center text-dark'>Testimonials</h2>
            <div className='max-w-[1440px] mx-auto relative'>
                <button className="absolute top-[50%] left-[5%] z-[10] xl:block hidden" onClick={prevarrow}><SliderPrevbtn /></button>
                <button className="absolute top-[50%] right-[5%] z-[10] xl:block hidden" onClick={nextarrow}><SliderNextbtn /></button>

                <div className='max-w-[1164px] mx-auto md:px-3 px-5'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={2}
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
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 2,
                            }
                        }}
                        pagination={{ clickable: true }}
                    >
                        {/*============================================ SliderThroughMapping =============================================================*/}
                        {TestimonialCards.map((object, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className='pt-5 pb-12 sm:py-10 xl:pt-10 xl:pb-8'>
                                    <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white shadow-shadow1 card'>
                                        <div className='flex flex-col'>
                                            <p className='text-black opacity-60 font-light text-base leading-[150%] font-kanit card'>{object.Paragraph}</p>
                                            <div className="mt-6 flex items-center gap-4">
                                                <img className="w-[48px]" src={object.BenjaminImg} alt="BenjaminRobert" />
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-dark opacity-60 font-jost font-normal text-base leading-[150%] card">{object.Name}</p>
                                                    <span className="flex items-center gap-1">
                                                        <img className="w-4" src={object.Filledstar} alt="filledStar" />
                                                        <img className="w-4" src={object.Filledstar} alt="filledStar" />
                                                        <img className="w-4" src={object.Filledstar} alt="filledStar" />
                                                        <img className="w-4" src={object.Filledstar} alt="filledStar" />
                                                        <img className="w-4" src={object.UnFilledstar} alt="UnfilledStar" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Explore
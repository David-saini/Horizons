import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Nextbtn, Prevbtn, } from './Icon';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BenjaminRobert from "../assets/Image/webp/BenjaminRobert.webp"
import filledStar from "../assets/Image/webp/FilledStar.webp"
import UnfilledStar from "../assets/Image/webp/UnfilledStar.webp"

const Explore = () => {
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
        <div className="py-12 sm:py-[60px] md:py-[70px] xl:py-[120px]">

            <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark'>Testimonials</h2>
            <div className='max-w-[1440px] mx-auto relative'>
                <button className="absolute top-[50%] left-[5%] z-[10] xl:block hidden" onClick={goPrev}><Prevbtn /></button>
                <button className="absolute top-[50%] right-[5%] z-[10] xl:block hidden" onClick={goNext}><Nextbtn /></button>

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

                        <SwiperSlide className="swiper-slide">
                            <div className='pt-6 pb-12 sm:py-8 xl:pt-10 xl:pb-8'>
                                <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                    <div className='flex flex-col'>
                                        <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                                <span className="flex items-center gap-1">
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide" >
                            <div className='pt-5 pb-12 sm:py-10 xl:pt-10 xl:pb-8'>
                                <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                    <div className='flex flex-col'>
                                        <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                                <span className="flex items-center gap-1">
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide" >
                            <div className='pt-5 pb-12 sm:py-10 xl:pt-10 xl:pb-8'>
                                <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                    <div className='flex flex-col'>
                                        <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                                <span className="flex items-center gap-1">
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide" >
                            <div className='pt-5 pb-12 sm:py-10 xl:pt-10 xl:pb-8'>
                                <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                    <div className='flex flex-col'>
                                        <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                                <span className="flex items-center gap-1">
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={filledStar} alt="filledStar" />
                                                    <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                                </span>
                                            </div>
                                        </div>
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

export default Explore
import React from 'react'
import BagVector from "../assets/Image/webp/BagVector.webp"
import GalleryImg1 from "../assets/Image/webp/GalleryImg1.webp"
import GalleryImg2 from "../assets/Image/webp/GalleryImg2.webp"
import GalleryImg3 from "../assets/Image/webp/GalleryImg3.webp"
import GalleryImg4 from "../assets/Image/webp/GalleryImg4.webp"
import GalleryImg5 from "../assets/Image/webp/GalleryImg5.webp"
import GalleryImg6 from "../assets/Image/webp/GalleryImg6.webp"

const Gallery = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative'>
            <img className='absolute top-[1%] md:top-[4%] lg:top-[6%] xl:top-[2%] left-2 xl:left-8 max-w-[60px] md:max-w-[80px] lg:max-w-[100px] xl:max-w-[128px]' src={BagVector} alt="BagVector" />
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]'>
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark lg:mb-10 sm:mb-8 mb-6'>Our <span className='text-lightgreen'> Gallery </span></h2>

                <div className='flex items-center justify-center flex-wrap gap-4 sm:gap-5 xl:gap-6'>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg1} alt="GalleryImg1" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg2} alt="GalleryImg1" />
                        </div>
                    </div>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg3} alt="GalleryImg1" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg4} alt="GalleryImg1" />
                        </div>
                    </div>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex lg:flex-col flex-col sm:flex-row items-start'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg5} alt="GalleryImg1" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer'>
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={GalleryImg6} alt="GalleryImg1" />
                        </div>
                    </div>

                </div>

                <div className='mt-6 md:mt-8 flex items-center justify-center'>
                    <button className='ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] duration-300 hover:bg-black'>View All</button>
                </div>

            </div>
        </div>
    )
}

export default Gallery
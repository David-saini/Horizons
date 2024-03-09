import React from 'react'
import BagVector from "../assets/Image/webp/BagVector.webp"
import ShirakawagoVillage from "../assets/Image/webp/ShirakawagoVillage.webp"
import EiffelTower from "../assets/Image/webp/EiffelTower.webp"
import TajMahalImg from "../assets/Image/webp/TajMahalImg.webp"
import SnowCloudySky from "../assets/Image/webp/SnowCloudySky.webp"
import VangViengImg from "../assets/Image/webp/VangViengImg.webp"
import ThilandImg from "../assets/Image/webp/ThilandImg.webp"
import ShowMoreButton from './ShowMoreButton';

const OurGallery = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative'>
            <img className='absolute top-[1%] md:top-[4%] lg:top-[6%] xl:top-[2%] left-2 xl:left-8 max-w-[60px] md:max-w-[80px] lg:max-w-[100px] xl:max-w-[128px]' src={BagVector} alt="BagVector" />
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto py-12 sm:py-16 md:py-[70px] xl:py-[120px]'>
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark xl:mb-10 md:mb-8 mb-6'>Our <span className='text-lightgreen'> Gallery </span></h2>

                <div className='flex items-center justify-center flex-wrap gap-4 sm:gap-5 xl:gap-6'>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={ShirakawagoVillage} alt="ShirakawagoVillage" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={EiffelTower} alt="EiffelTower" />
                        </div>
                    </div>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={TajMahalImg} alt="TajMahalImg" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={SnowCloudySky} alt="SnowCloudySky" />
                        </div>
                    </div>

                    <div className='gap-4 sm:gap-5 xl:gap-6 flex lg:flex-col flex-col sm:flex-row items-start'>
                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={VangViengImg} alt="VangViengImg" />
                        </div>

                        <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                            <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={ThilandImg} alt="ThilandImg" />
                        </div>
                    </div>

                </div>

                <ShowMoreButton
                    content={
                        <>
                            <div className='flex items-center justify-center flex-wrap gap-4 sm:gap-5 mt-4 sm:mt-5 xl:mt-6 xl:gap-6'>

                                <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={ShirakawagoVillage} alt="ShirakawagoVillage" />
                                    </div>

                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={EiffelTower} alt="EiffelTower" />
                                    </div>
                                </div>

                                <div className='gap-4 sm:gap-5 xl:gap-6 flex flex-col'>
                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={TajMahalImg} alt="TajMahalImg" />
                                    </div>

                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={SnowCloudySky} alt="SnowCloudySky" />
                                    </div>
                                </div>

                                <div className='gap-4 sm:gap-5 xl:gap-6 flex lg:flex-col flex-col sm:flex-row items-start'>
                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={VangViengImg} alt="VangViengImg" />
                                    </div>

                                    <div className='border-white rounded-[16px] overflow-hidden border-[5px] sm:max-w-[320px] xl:max-w-[364px] vacationcard_shadow cursor-pointer' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                        <img className='sm:max-w-[310px] xl:max-w-[354px] hover:scale-[1.1] duration-300' src={ThilandImg} alt="ThilandImg" />
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                />

            </div>
        </div>
    )
}

export default OurGallery
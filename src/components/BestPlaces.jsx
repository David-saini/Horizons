import React from 'react'
import MysorePlace from "../assets/Image/webp/MysorePlace.webp"
import LocationIcon from "../assets/Image/webp/LocationIcon.webp"
import FilledStar from "../assets/Image/webp/FilledStar.webp"
import UnfilledStar from "../assets/Image/webp/UnfilledStar.webp"
import TajMahal from "../assets/Image/webp/TajMahal.webp"
import JaisalmerFort from "../assets/Image/webp/JaisalmerFort.webp"
import CadmenBeach from "../assets/Image/webp/CamdenBeach.webp"
import Thesiq from "../assets/Image/webp/TheSiq.webp"
import Hawaii from "../assets/Image/webp/Hawaii.webp"
import Camera from "../assets/Image/webp/CameraImg.webp"
import PlaneVector from "../assets/Image/webp/PlaneVector.webp"
import CommonButton from './CommonButton';

const BestPlaces = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-12 sm:py-16 md:py-[70px] mt-20 md:mt-24 xl:py-[120px] relative' id='Destinations'>
            {/*=================================== Camera Vector ====================*/}
            <img className='w-[60px] sm:w-[70px] md:w-[100px] xl:w-[132px] top-5 xl:top-3 left-2 absolute left_vector' src={Camera} alt="Camera" />
            {/*=================================== Plane Vector ====================*/}
            <img className='absolute top-[1%] md:top-0 right-0 xl:right-[4%] w-[130px] lg:w-[150px] xl:w-[177px] right_vector' src={PlaneVector} alt="PlaneVector" />

            <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl font-kanit font-bold leading-[120%] text-center text-dark'>The Best Place for <span className='text-lightgreen'>Vacation</span></h2>
                <div className='flex items-center justify-center gap-4 sm:gap-3 xl:gap-6 flex-wrap mt-6 md:mt-8 xl:mt-10'>
                    {/*=================================== MysorePlace place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] duration-300 img' src={MysorePlace} alt="MysorePlace" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Mysore Palace</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Karnataka, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================== Tajmahal place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] duration-300 img' src={TajMahal} alt="TajMahal" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Taj Mahal</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Agra, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================== JaisalmerFort place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] img duration-300' src={JaisalmerFort} alt="JaisalmerFort" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Jaisalmer Fort</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Rajasthan, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================== CadmenBeach place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] img duration-300' src={CadmenBeach} alt="CadmenBeach" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Camden Beach</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>London, England</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================== Thesiq place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] duration-300 img' src={Thesiq} alt="Thesiq" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>The Siq</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Petra, Jordan</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================== Hawaii place card ====================*/}
                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                            <img className='w-full max-w-[348px] duration-300 img' src={Hawaii} alt="Hawaii" />
                        </div>
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Maui, Hawaii</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>New York City, USA</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                <div className='flex items-center gap-0.5'>
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                    <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*================================= view all btn ==============================*/}
                <CommonButton
                    content={
                        <>
                            <div className='flex items-center justify-center gap-4 sm:gap-3 xl:gap-6 flex-wrap mt-4 xl:mt-6'>
                                {/*=================================== MysorePlace place card ====================*/}
                                <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                                        <img className='w-full max-w-[348px] duration-300 img' src={MysorePlace} alt="MysorePlace" />
                                    </div>
                                    <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                                        <div className='flex flex-col gap-2'>
                                            <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Mysore Palace</h5>
                                            <div className='flex items-center lg:gap-2 gap-1'>
                                                <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                                <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Karnataka, India</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                            <div className='flex items-center gap-0.5'>
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*=================================== Tajmahal place card ====================*/}
                                <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                                        <img className='w-full max-w-[348px] duration-300 img' src={TajMahal} alt="TajMahal" />
                                    </div>
                                    <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                                        <div className='flex flex-col gap-2'>
                                            <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Taj Mahal</h5>
                                            <div className='flex items-center lg:gap-2 gap-1'>
                                                <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                                <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Agra, India</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                            <div className='flex items-center gap-0.5'>
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*=================================== Hawaii place card ====================*/}
                                <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer duration-300 lg:min-h-[391px] bg-white rounded-[16px] shadow-shadow1 vacation_card p-2' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                                    <div className='border-white border border-solid overflow-hidden rounded-[16px]'>
                                        <img className='w-full max-w-[348px] duration-300 img' src={Hawaii} alt="Hawaii" />
                                    </div>
                                    <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                                        <div className='flex flex-col gap-2'>
                                            <h5 className='text-dark font-kanit font-bold text-lg lg:text-xl leading-[120%]'>Maui, Hawaii</h5>
                                            <div className='flex items-center lg:gap-2 gap-1'>
                                                <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                                <p className='font-kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>New York City, USA</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
                                            <div className='flex items-center gap-0.5'>
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={FilledStar} alt="FilledStar" />
                                                <img className='w-4 lg:w-5' src={UnfilledStar} alt="UnFilledStar" />
                                            </div>
                                        </div>
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

export default BestPlaces
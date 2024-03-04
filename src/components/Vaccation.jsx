import React from 'react'
import MysorePlace from "../assets/Image/webp/MysorePlace.webp"
import LocationIcon from "../assets/Image/webp/LocationIcon.webp"
import FilledStar from "../assets/Image/webp/filledstar.webp"
import UnfilledStar from "../assets/Image/webp/unfilledstar.webp"
import TajMahal from "../assets/Image/webp/TajMahal.webp"
import JaisalmerFort from "../assets/Image/webp/JaisalmerFort.webp"
import CadmenBeach from "../assets/Image/webp/CamdenBeach.webp"
import Thesiq from "../assets/Image/webp/TheSiq.webp"
import Hawaii from "../assets/Image/webp/Hawaii.webp"

const Vaccation = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-[120px]'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>

                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark'>The Best Place for <span className='text-lightgreen'>Vacation</span></h2>

                <div className='flex items-center justify-center gap-4 sm:gap-3 xl:gap-6 flex-wrap mt-6 md:mt-8 lg:mt-10'>

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={MysorePlace} alt="MysorePlace" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>Mysore Palace</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Karnataka, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={TajMahal} alt="MysorePlace" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>Taj Mahal</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Agra, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={JaisalmerFort} alt="JaisalmerFort" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>Jaisalmer Fort</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Rajasthan, India</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={CadmenBeach} alt="CadmenBeach" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>Camden Beach</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>London, England</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={Thesiq} alt="Thesiq" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>The Siq</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>Petra, Jordan</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                    <div className='sm:max-w-[300px] md:max-w-[320px] xl:max-w-[364px] min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 lg:min-h-[391px] bg-white rounded-[16px] vacationcard_shadow p-2'>
                        <img className='w-full max-w-[348px]' src={Hawaii} alt="Hawaii" />
                        <div className='mt-4 lg:mt-6 flex items-center justify-between px-3 lg:px-4'>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-dark ff_kanit font-bold text-lg lg:text-xl leading-[120%]'>Maui, Hawaii</h5>
                                <div className='flex items-center lg:gap-2 gap-1'>
                                    <img className='w-5 lg:w-6' src={LocationIcon} alt="LocationIcon" />
                                    <p className='ff_kanit font-light text-[14px] lg:text-base leading-[100%] text-gray1'>New York City, USA</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='ff_kanit font-bold text-lg lg:text-xl leading-[120%] text-lightgreen'>$490 <span className='text-base font-light text-gray1'>/3days</span></p>
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

                <div className='mt-6 md:mt-8 flex itens-center justify-center'>
                    <button className='ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] duration-300 hover:bg-black'>View All</button>
                </div>

            </div>
        </div>
    )
}

export default Vaccation
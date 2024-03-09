import React from 'react'
import HeaderVector from "../assets/Image/webp/HeaderVector.webp"
import LocationIcon from "../assets/Image/webp/LocationIcon.webp"
import CelenderIcon from "../assets/Image/png/CelenderIcon.png"
import PeopleIcon from "../assets/Image/webp/GroupIcon.png"
import search from "../assets/Image/webp/Search.webp"

const Header = () => {
    return (
        <div className='header_bg min_h_screen !bg-center !bg-cover !bg-no-repeat relative'>
            <img className='absolute left-[45%] md:left-[42%] top-[12%] md:top-[8%] max-w-[200px] md:max-w-[270px] lg:max-w-[319px] ' src={HeaderVector} alt="HeaderVector" />
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>
                    {/*========================================= header_card ===============================================================*/}
                    <div className='lg:pt-[204px] lg:pb-[124px] md:py-[100px] sm:py-20 py-12' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='border border-solid border-white bg-yellow max-w-[400px] sm:max-w-[450px] md:max-w-[470px] lg:max-w-[537px] p-5 sm:p-8 md:p-10 backdrop-filter backdrop-blur-[8px] rounded-[25px] md:rounded-[36px]'>
                            <h1 className='font-bold ff_kanit text-[40px] sm:text-[46px] md:text-[50px] lg:text-[55px] xl:text-xxxl leading-[120%] text-white'>Lets Discover a New Adventure</h1>
                            <p className='text-white ff_kanit leading-[150%] text-base font-light mt-3 sm:mt-4'>Lorem Ipsum Dolor Sit Amet Consectetur. In Ultrices Orci Urna Eget Fringilla Nisl Duis Lectus. Tincidunt Pretium Odio.</p>
                            <button className='ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] mt-4 sm:mt-6 md:mt-8 duration-300 hover:bg-black'>Explore Now</button>
                        </div>
                    </div>
                    {/*==================================== selecter_card start========================================*/}
                    <div className='bg-white border-white border-solid rounded-[16px] sm:rounded-[32px] p-4 sm:p-6 xl:p-8 input_card mt-[-80px] sm:mt-[-120px] translate-y-[20%] sm:translate-y-[40%] lg:translate-y-[50%] xl:translate-y-[70%] lg:mt-[-145px] mt_0'>

                        <div className='gap-2 sm:gap-6 lg:gap-5 xl:gap-8 flex items-center flex-col sm:flex-row justify-center xl:justify-between flex-wrap'>

                            <div className='flex flex-col gap-1 sm:gap-2'>
                                <p className='ff_kanit font-light text-base leading-[150%] text-gray1'>From</p>
                                <div className='flex items-center gap-2 border border-solid border-[#c2e2c2] p-2.5 md:p-4 rounded-[48px] w-[300px] lg:w-[200px] xl:w-[221px] lg:max-h-[48px]'>
                                    <img className='w-4' src={LocationIcon} alt="LocationIcon" />
                                    <select className='ff_kanit text-[14px] leading-[100%] font-light !w-full lg:max-w-[165px] text-gray1 outline-none custom_select'>
                                        <option>Bali, Indonesia</option>
                                        <option>Karnataka, India</option>
                                        <option>Agra, India</option>
                                        <option>Rajasthan, India</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 sm:gap-2'>
                                <p className='ff_kanit font-light text-base leading-[150%] text-gray1'>To</p>
                                <div className='flex items-center gap-2 border border-solid border-[#c2e2c2] p-2.5 md:p-4 rounded-[48px] w-[300px] lg:w-[200px] xl:w-[221px] lg:max-h-[48px]'>
                                    <img className='w-4' src={LocationIcon} alt="LocationIcon" />
                                    <select className='ff_kanit text-[14px] leading-[100%] font-light !w-full lg:max-w-[165px] text-gray1 outline-none custom_select'>
                                        <option>Bali, Indonesia</option>
                                        <option>Karnataka, India</option>
                                        <option>Agra, India</option>
                                        <option>Rajasthan, India</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 sm:gap-2'>
                                <p className='ff_kanit font-light text-base leading-[150%] text-gray1'>Dates</p>
                                <div className='flex items-center gap-2 border border-solid border-[#c2e2c2] p-2.5 md:p-4 rounded-[48px] w-[300px] lg:w-[200px] xl:w-[221px] lg:max-h-[48px]'>
                                    <img className='w-4' src={CelenderIcon} alt="celenderIcon" />
                                    <select className='ff_kanit text-[14px] leading-[100%] font-light !w-full lg:max-w-[165px] text-gray1 outline-none custom_select'>
                                        <option>Select a date range</option>
                                        <option>1st to 10th</option>
                                        <option>11th to 20th</option>
                                        <option>21th to 30th/31st</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 sm:gap-2'>
                                <p className='ff_kanit font-light text-base leading-[150%] text-gray1'>Guest</p>
                                <div className='flex items-center gap-2 border border-solid border-[#c2e2c2] p-2.5 md:p-4 rounded-[48px] w-[300px] lg:w-[200px] xl:w-[221px] lg:max-h-[48px]'>
                                    <img className='w-4' src={PeopleIcon} alt="PeopleIcon" />
                                    <select className='ff_kanit text-[14px] leading-[100%] font-light !w-full lg:max-w-[165px] text-gray1 outline-none custom_select'>
                                        <option>Number of your guest</option>
                                        <option>below to 5</option>
                                        <option>5 to 20</option>
                                        <option>above 20</option>
                                    </select>
                                </div>
                            </div>

                            <a href="#search"><img className='h-10 w-10 md:w-[52px] md:h-[52px] mt-5 sm:mt-0' src={search} alt="search" /></a>

                        </div>
                        {/*==================================== selecter_card end========================================*/}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
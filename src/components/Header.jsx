import React from 'react'
import HeaderVector from "../assets/Image/webp/headervector.webp"

const Header = () => {
    return (
        <div className='header_bg !bg-center !bg-cover !bg-no-repeat relative'>
            <img className='absolute left-[45%] md:left-[42%] top-[12%] md:top-[8%] max-w-[200px] md:max-w-[270px] lg:max-w-[319px] ' src={HeaderVector} alt="HeaderVector" />
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>
                    <div className='pt-[204px] pb-[124px]'>
                        <div className='border border-solid border-white bg-yellow max-w-[400px] sm:max-w-[450px] md:max-w-[470px] lg:max-w-[537px] p-5 sm:p-8 md:p-10 backdrop rounded-[25px] md:rounded-[36px]'>
                            <h1 className='font-bold ff_kanit text-[40px] sm:text-[46px] md:text-[50px] lg:text-[55px] xl:text-xxxl leading-[120%] text-white'>Lets Discover a New Adventure</h1>
                            <p className='text-white ff_kanit leading-[150%] text-base mt-3 sm:mt-4'>Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio.</p>
                            <button className='ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] mt-4 sm:mt-6 md:mt-8 hover:bg-white duration-300 hover:text-lightgreen'>Explore Now</button>
                        </div>
                    </div>

                    <div className='bg-white border-white border-solid rounded-[32px] p-8 gap-8'>

                        <div className='flex flex-col gap-2'>
                            <p className='ff_kanit font-light text-base leading-[150%] text-gray1'>From</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
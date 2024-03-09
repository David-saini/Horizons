import React from 'react'
import Logo from "../assets/Image/webp/Logo.webp"
import FooterLine from "../assets/Image/webp/footerline.webp"
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from './Icon';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-dark'>
            <div className="max-w-[1440px] mx-auto pt-12 sm:pt-[55px] md:pt-[66px]">
                <div className="flex items-center flex-col justify-center">
                    <Link className='flex flex-col items-center text-lightgreen'>
                        <img className='w-[60px] md:w-[84.6px]' src={Logo} alt="Logo" />
                        <p className='text-base md:text-lg ff_kanit font-bold leading-[150%]'>Horizon</p>
                    </Link>

                    <p className='text-white max-w-[574px] opacity-60 ff_kanit font-light text-base leading-[150%] text-center my-5 sm:my-6'>Lorem ipsum dolor sit amet consectetur. Amet lobortis auctor ultricies consectetur. Vulputate lobortis aliquet pellentesque integer habitasse.</p>

                    <div className='flex items-center justify-center gap-6'>
                        <Link><Twitter /></Link>
                        <Link><Facebook /></Link>
                        <Link><Instagram /></Link>
                        <Link><LinkedIn /></Link>
                        <Link><Youtube /></Link>
                    </div>

                    <ul className='my-5 sm:my-6 md:my-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-11 flex-wrap'>
                        <li><a href="#About Us" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>About Us</a></li>
                        <li><a href="#Destinations" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Destinations</a></li>
                        <li><a href="#Services" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Our Services</a></li>
                        <li><a href="#Policy" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Privacy Policy</a></li>
                        <li><a href="#Use" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Terms of Use</a></li>
                    </ul>

                    <img className='w-full' src={FooterLine} alt="FooterLine" />
                    <p className='text-white py-3 sm:py-4 ff_kanit font-light text-base leading-[150%] opacity-60'>© All Rights Reserved {currentYear} | Travel</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
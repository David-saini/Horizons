import React from 'react'
import HeaderLogo from "../assets/Image/webp/Logo.webp"
import FooterLine from "../assets/Image/webp/footerline.webp"
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from './Icon';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-dark'>
            <div className="max-w-[1440px] mx-auto pt-12 sm:pt-[55px] md:pt-[66px]">
                <div className="flex items-center flex-col justify-center">
                    <Link><img className='w-[84.6px]' src={HeaderLogo} alt="HeaderLogo" /></Link>
                    <p className='text-white max-w-[574px] opacity-60 ff_kanit font-light text-base leading-[150%] text-center my-5 sm:my-6'>Lorem ipsum dolor sit amet consectetur. Amet lobortis auctor ultricies consectetur. Vulputate lobortis aliquet pellentesque integer habitasse.</p>

                    <div className='flex items-center justify-center gap-6'>
                        <Link><Twitter /></Link>
                        <Link><Facebook /></Link>
                        <Link><Instagram /></Link>
                        <Link><LinkedIn /></Link>
                        <Link><Youtube /></Link>
                    </div>

                    <ul className='my-5 sm:my-6 md:my-8 flex items-center justify-center gap-5 sm:gap-6 flex-wrap'>
                        <li><a href="#" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60'>About Us</a></li>
                        <li><a href="#" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60'>Destinations</a></li>
                        <li><a href="#" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60'>Our Services</a></li>
                        <li><a href="#" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60'>Privacy Policy</a></li>
                        <li><a href="#" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60'>Terms of Use</a></li>
                    </ul>

                    <img className='w-full' src={FooterLine} alt="FooterLine" />
                    <p className='text-white py-3 sm:py-4 ff_kanit font-light text-base leading-[150%] opacity-60'>© All Rights Reserved {currentYear} | Travel</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react';
import Logo from "../assets/Image/webp/Logo.webp"; // Importing the logo image
import FooterLine from "../assets/Image/webp/Footerline.webp"; // Importing the footer line image
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from './Common/Icons'; // Importing social media icons

// Footer component definition
const Footer = () => {
    const currentYear = new Date().getFullYear(); // Getting the current year
    return (
        <div className='bg-dark'>
            {/* Container for footer content */}
            <div className="max-w-[1440px] mx-auto pt-12 sm:pt-[55px] md:pt-[66px]">
                <div className="flex items-center flex-col justify-center">
                    {/* Link to home page with logo */}
                    <Link className='flex flex-col items-center text-lightgreen'>
                        <img className='w-[60px] md:w-[84.6px]' src={Logo} alt="Logo" />
                        <p className='text-base md:text-lg ff_kanit font-bold leading-[150%]'>Horizon</p>
                    </Link>

                    {/* Description */}
                    <p className='text-white max-w-[574px] opacity-60 ff_kanit font-light text-base leading-[150%] text-center my-5 sm:my-6'>Lorem ipsum dolor sit amet consectetur. Amet lobortis auctor ultricies consectetur. Vulputate lobortis aliquet pellentesque integer habitasse.</p>

                    {/* Social media icons */}
                    <div className='flex items-center justify-center gap-6'>
                        <Link><TwitterIcon /></Link>
                        <Link><FacebookIcon /></Link>
                        <Link><InstagramIcon /></Link>
                        <Link><LinkedInIcon /></Link>
                        <Link><YoutubeIcon /></Link>
                    </div>

                    {/* Footer links */}
                    <ul className='my-5 sm:my-6 md:my-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-11 flex-wrap'>
                        <li><a href="#About Us" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>About Us</a></li>
                        <li><a href="#Destinations" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Destinations</a></li>
                        <li><a href="#Services" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Our Services</a></li>
                        <li><a href="#Policy" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Privacy Policy</a></li>
                        <li><a href="#Use" className='text-white ff_kanit font-light text-base leading-[150%] opacity-60 hover:opacity-100 duration-300 hover:text-lightgreen hover:underline'>Terms of Use</a></li>
                    </ul>

                    {/* Footer line */}
                    <img className='w-full' src={FooterLine} alt="FooterLine" />

                    {/* Copyright */}
                    <p className='text-white py-3 sm:py-4 ff_kanit font-light text-base leading-[150%] opacity-60'>© All Rights Reserved {currentYear} | Travel</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

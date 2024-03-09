import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderLogo from "../assets/Image/webp/Logo.webp"
import menu from "../assets/Image/png/Menu.png"
import CrossIcon from "../assets/Image/png/CrossIcon.png"
// Define the Nav functional component
const Nav = () => {
    const [Menu, setMenu] = useState(false);
    // Function to toggle the menu
    const toggleMenu = () => {
        setMenu(!Menu);
    };
    // Function to close the menu
    const closeMenu = () => {
        setMenu(false);
    };
    // Dynamically add or remove 'overflow-hidden' class based on menu state
    if (Menu) {
        document.body.classList.add("overflow-hidden");
    }
    else {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <div className='bg-white relative z-[100]'>
            <div className='max-w-[1164px] px-3 mx-auto sticky top-0'>

                <div className='flex items-center justify-between py-[11.4px] md:py-[19px]'>
                    <Link className='flex flex-col items-center text-lightgreen'>
                        <img className='w-[60px] md:w-[84.6px]' src={HeaderLogo} alt="HeaderLogo" />
                        <p className='text-base md:text-lg ff_kanit font-bold leading-[150%]'>Horizon</p>
                    </Link>
                    {/*====================== mobile-screen ====================*/}
                    <div className='lg:hidden block'>
                        <div className={`${Menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100 relative' onClick={() => setMenu}>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <Link><img className='w-[25px]' src={CrossIcon} alt="CrossIcon" onClick={toggleMenu} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className={`${Menu ? 'show-nav' : 'nav-fix'}`}>
                            <Link className='flex flex-col items-center text-lightgreen absolute top-[12px] left-[15px] md:top-[20px]'>
                                <img className='w-[60px] md:w-[84.6px]' src={HeaderLogo} alt="HeaderLogo" />
                                <p className='text-base md:text-lg ff_kanit font-bold leading-[150%]'>Horizon</p>
                            </Link>
                            <div className='z-index-100' onClick={() => setMenu(false)}>
                                <div className='absolute top-[20px] right-[15px] md:top-[40px]'>
                                    <Link><img className='w-[22px]' src={CrossIcon} alt="CrossIcon" onClick={toggleMenu} /></Link>
                                </div>
                            </div>

                            <div className='flex items-center justify-center flex-col'>
                                <ul className='flex items-center justify-center ps-0 mb-0'>
                                    <li className='relative'><a href='#home' className=' duration-300 leading-[126.5%] ff_kanit text-[20px] md:text-[24px] lg:text-base text-lightgreen font-medium' onClick={closeMenu}>Home</a></li>
                                    <li className='relative'><a href='#Destinations' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-[20px] md:text-[24px] lg:text-base hover:text-lightgreen nav_link' onClick={closeMenu}>Destinations</a></li>
                                    <li className='relative'><a href='#Services' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-[20px] md:text-[24px] lg:text-base hover:text-lightgreen nav_link' onClick={closeMenu}>Our Services</a></li>
                                    <li className='relative'><a href='#FAQ' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-[20px] md:text-[24px] lg:text-base hover:text-lightgreen nav_link' onClick={closeMenu}>FAQ’s</a></li>
                                </ul>
                                <div className='block lg:hidden mt-4'>
                                    <button className='ff_kanit font-medium text-[20px] md:text-[24px] lg:text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] hover:bg-black bg-[#35A035] duration-300'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*================================ desktop screen ==========================*/}
                    <div className='lg:block hidden'>
                        <ul className='flex align-items-center gap-6'>
                            <li><a href='#home' className='duration-300 leading-[126.5%] ff_kanit text-base text-lightgreen font-medium'>Home</a></li>
                            <li><a href='#Destinations' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-base hover:text-lightgreen nav_link'>Destinations</a></li>
                            <li><a href='#Services' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-base hover:text-lightgreen nav_link'>Our Services</a></li>
                            <li><a href='#FAQ' className='text-gray1 duration-300 font-light leading-[126.5%] ff_kanit text-base hover:text-lightgreen nav_link'>FAQ’s</a></li>
                        </ul>
                    </div>

                    <div className='lg:block hidden'>
                        <button className='ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] w-[103px] hover:bg-black duration-300'>Sign Up</button>
                    </div>

                    <div className='lg:hidden block z-1'>
                        <Link onClick={() => setMenu(true)}><img className='w-[25px]' src={menu} alt="menu" /></Link>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Nav
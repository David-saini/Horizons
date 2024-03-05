import Slider from "react-slick";
import { LearnMoreBtn, TikMark } from './Icon';
import { Link } from 'react-router-dom';
import RightVector from "../assets/Image/webp/RightCurvedArrow.webp"

const Service = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "5px",
        arrows: false,

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    };

    return (
        <div id="Services">
            <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark'>Our <span className='text-lightgreen'>Services</span></h2>
            <div className='max-w-[1440px] mx-auto relative'>
                <img className="max-w-[80px] max-h-[80px] sm:max-w-[110px] sm:max-h-[115px] xl:max-w-[131px] xl:max-h-[135px] top-[-15%] md:top-[-30%] lg:top-[-40%] right-[5%] xl:right-[12%] absolute" src={RightVector} alt="RightVector" />
                <div className='max-w-[1164px] mx-auto md:px-3 px-5'>

                    <Slider {...settings}>
                        <div className='pt-10 pb-8'>
                            <div className='max-w-[320px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                    <p className='text-black opacity-60 font-light text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='py-10'>
                            <div className='max-w-[320px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-xl leading-[150%] ff_kanit mt-4 card'>Destination Expertise</h5>
                                    <p className='text-black opacity-60 font-light text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='py-10'>
                            <div className='max-w-[320px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-xl leading-[150%] ff_kanit mt-4 card'>Travel Insurance</h5>
                                    <p className='text-black opacity-60 font-light text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>
                    </Slider>




                    {/* <span
                        className="cursor-pointer md:block hidden absolute start-[-56px] top-[50%] translate-y-[-50%]"
                        onClick={() => first.current.slickPrev()}
                    >
                        <Prevbtn />
                    </span>
                    <span
                        className="cursor-pointer md:block hidden absolute end-[-56px] top-[50%] translate-y-[-50%]"
                        onClick={() => first.current.slickNext()}
                    >
                        <Nextbtn />
                    </span>
                    <Slider ref={first} {...settings}></Slider> */}


                    {/* helper */}

                    {/* export const Prevbtn = () => {
  return (
                    <svg
                        className="read_arrows"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="transition-all duration-300"
                            width="40"
                            height="40"
                            rx="20"
                            transform="matrix(-1 0 0 1 40 0)"
                            fill="#C2BDBC"
                        />
                        <path
                            d="M24 11L15.5 19.5L24 28"
                            stroke="#FCFEFC"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    );
};
export const Nextbtn = () => {
  return (
                    <svg
                        className="read_arrows"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="transition-all duration-300"
                            width="40"
                            height="40"
                            rx="20"
                            fill="#C2BDBC"
                        />
                        <path
                            d="M16 11L24.5 19.5L16 28"
                            stroke="#FCFEFC"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    );
}; */}

                </div>
            </div>
        </div>
    )
}

export default Service
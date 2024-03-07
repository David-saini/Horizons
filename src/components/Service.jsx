import Slider from "react-slick";
import { LearnMoreBtn, Nextbtn, Prevbtn, TikMark } from './Icon';
import { Link } from 'react-router-dom';
import RightVector from "../assets/Image/webp/RightCurvedArrow.webp"

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, left: '-7%', top: '40%', zIndex: 1 }} onClick={onClick}><Prevbtn /></div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, right: '-5%', top: '40%', zIndex: 1 }} onClick={onClick}><Nextbtn /></div>
    );
};

const Service = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "5px",
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2.3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
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
                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Customized Itineraries</h5>
                                    <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Destination Expertise</h5>
                                    <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] sm:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-4 sm:p-6 lg:pt-8 lg:px-11 lg:pb-11 bg-white border-white border-solid border vacationcard_shadow card'>
                                <div className='flex flex-col items-center justify-center'>
                                    <TikMark />
                                    <h5 className='text-black font-semibold text-lg md:text-xl leading-[150%] ff_kanit mt-4 card'>Travel Insurance</h5>
                                    <p className='text-black opacity-60 font-light text-[14px] md:text-base max-w-[273px] text-center leading-[150%] ff_kanit mt-2 card'>Whether You're Dreaming Of A Romantic Getaway, A Family Adventure, Or A Solo Expedition, Our Expert Travel Planners .</p>
                                    <Link className='mt-4 sm:6 md:mt-8'><LearnMoreBtn /></Link>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Service
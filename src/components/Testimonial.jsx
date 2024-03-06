import Slider from "react-slick";
import BenjaminRobert from "../assets/Image/webp/BenjaminRobert.webp"
import filledStar from "../assets/Image/webp/filledstar.webp"
import UnfilledStar from "../assets/Image/webp/unfilledstar.webp"
import { Nextbtn, Prevbtn } from "./Icon";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: '-7%', zIndex: 1 }}
            onClick={onClick}
        >
            {/* Custom Arrow Content */}
            <Prevbtn />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: '-5%', top: '50%', zIndex: 1 }}
            onClick={onClick}
        >
            <Nextbtn />
        </div>
    );
};

const Testimonial = () => {
    var settings = {
        dots: true,
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
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="py-12 sm:py-[60px] md:py-20 lg:py-[120px]">
            <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark'>Testimonials</h2>
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1164px] mx-auto md:px-3 px-5'>

                    <Slider {...settings}>

                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                <div className='flex flex-col'>

                                    <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>

                                    <div className="mt-6 flex items-center gap-4">
                                        <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                            <span className="flex items-center gap-1">
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                <div className='flex flex-col'>

                                    <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>

                                    <div className="mt-6 flex items-center gap-4">
                                        <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                            <span className="flex items-center gap-1">
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='py-5 sm:pt-10 sm:pb-8'>
                            <div className='max-w-[300px] md:max-w-[330px] lg:max-w-[364px] mx-auto cursor-pointer rounded-[16px] p-6 lg:p-8 bg-white vacationcard_shadow card'>
                                <div className='flex flex-col'>

                                    <p className='text-black opacity-60 font-light text-base leading-[150%] ff_kanit card'>“Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla nisl duis lectus. Tincidunt pretium odio at  viverra integer et at. Penatibus in elementum habitant pellentesque sit posuere.”</p>

                                    <div className="mt-6 flex items-center gap-4">
                                        <img className="w-[48px]" src={BenjaminRobert} alt="BenjaminRobert" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-dark opacity-60 ff_Jost font-normal text-base leading-[150%] card">Benjamin Robert</p>
                                            <span className="flex items-center gap-1">
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={filledStar} alt="filledStar" />
                                                <img className="w-4" src={UnfilledStar} alt="UnfilledStar" />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Testimonial
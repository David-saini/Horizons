import React, { useState } from 'react'
import RightCurvedVector from "../assets/image/webp/RightCurvedArrow.webp"
import Camera from "../assets/image/webp/CameraVector.webp"
import { FaqContent } from './Common/Helper';

const Faqs = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='max-w-[1440px] mx-auto xl:pb-6 relative' id='FAQ'>
            <img className='w-[50px] sm:w-[70px] md:w-[100px] xl:w-[132px] absolute bottom-[-3.5%] md:bottom-[-10%] lg:bottom-[2%] lg:left-2 xl:left-[38px] left_vector' src={Camera} alt="Camera" />
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <img className="w-[71px] sm:h-[135px] top-0 md:top-[-5%] lg:top-[1%] right-0 lg:right-[5%] absolute right_vector" src={RightCurvedVector} alt="RightCurvedVector" />
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl font-kanit font-bold leading-[120%] text-center text-dark mb-6 lg:mb-8 xl:mb-10'>Frequently <span className='text-lightgreen'>Asked </span>Questions</h2>

                <div className='flex items-center justify-center flex-wrap z-10 relative'>
                    <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                        {/*================================== mapping in faqs ==========================================*/}
                        {FaqContent.map((faqitem, index) => (
                            <div key={index} className="pb-4 lg:w-[754px]">
                                <div className={`bg-white rounded-[10px] ps-5 pe-6 input_card shadow-inputShadow ${expandedIndex === index ? 'active' : ''}`}>
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[16px] !font-light text-dark font-kanit ${expandedIndex ? "pb-[18px]" : "pb-[18px]"} ${expandedIndex === index ? 'text-color' : ''}`}
                                            onClick={() => toggleAccordion(index)} aria-expanded={expandedIndex === index} aria-controls={`faqs-text-${index}`}>
                                            <span className={`pe-7 ${expandedIndex === index ? 'text-color1' : ''}`}>{faqitem.title}</span>

                                            <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180 svg-color' : 'svg-color'}`} width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7.5 8L14 1" stroke="#000702" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id={`faqs-text-${index}`} role="region" aria-labelledby={`faqs-title-${index}`} className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className={`pb-4 text-dark opacity-70 font-kanit font-light text-base max-w-[679px] ${expandedIndex === index ? 'text-color' : ''}`}>{faqitem.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
import React, { useState } from 'react';

const Helper = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="pb-4 lg:w-[754px]">
                    <div className={`bg-white rounded-[10px] ps-5 pe-6 input_card ${expandedIndex === index ? 'active' : ''}`}>
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[16px] !font-light text-dark ff_kanit ${expandedIndex ? "pb-[18px]" : "pb-[18px]"} ${expandedIndex === index ? 'text-color' : ''}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={expandedIndex === index}
                                aria-controls={`faqs-text-${index}`}
                            >
                                <span className={`pe-7 ${expandedIndex === index ? 'text-color1' : ''}`}>{item.title}</span>

                                <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180 svg-color' : 'svg-color'}`} width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7.5 8L14 1" stroke="#000702" strokeWidth="2" />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`faqs-text-${index}`}
                            role="region"
                            aria-labelledby={`faqs-title-${index}`}
                            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <p className={`pb-4 text-dark opacity-70 ff_kanit font-light text-base max-w-[679px] ${expandedIndex === index ? 'text-color' : ''}`}>{item.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Helper;

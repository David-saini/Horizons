import React, { useState } from 'react';

const CommonButton = ({ content }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <div className={`${showMore ? 'block' : 'hidden'}`}>
                {content}
            </div>

            <div className='flex items-center justify-center mt-6 md:mt-8'>
                <button
                    onClick={toggleShowMore}
                    className="ff_kanit font-medium text-base leading-[150%] px-6 py-[14px] text-white1 rounded-[16px] bg-[#35A035] duration-300 hover:bg-black"
                >
                    {showMore ? 'View Less' : 'View All'}
                </button>
            </div>

        </div>
    );
};

export default CommonButton;

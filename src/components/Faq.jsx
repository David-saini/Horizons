import React from 'react'
import Helper from './Helper'
import RightVector from "../assets/Image/webp/RightCurvedArrow.webp"
import Camera from "../assets/Image/webp/CameraImg.webp"

const items = [
    {
        id: "1",
        title: 'How do I book a trip with your agency?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "2",
        title: 'What destinations do you offer?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "3",
        title: 'Do you offer group travel packages?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "4",
        title: 'What types of accommodations do you offer?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "5",
        title: 'Do you provide travel insurance?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "6",
        title: 'What if I need assistance during my trip?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "7",
        title: 'Can I make changes to my itinerary after its been booked?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "8",
        title: 'How do I make payments for my trip?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
];


const Faq = () => {
    return (
        <div className='max-w-[1440px] mx-auto xl:pb-6 relative' id='FAQ'>
            <img className='w-[50px] sm:w-[70px] md:w-[100px] xl:w-[132px] absolute bottom-[-3.5%] md:bottom-[-10%] lg:bottom-[2%] lg:left-2 xl:left-[38px]' src={Camera} alt="Camera" />
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <img className="w-[71px] sm:h-[135px] top-0 md:top-[-5%] lg:top-[1%] right-0 lg:right-[5%] absolute" src={RightVector} alt="RightVector" />
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark mb-6 lg:mb-8 xl:mb-10'>Frequently <span className='text-lightgreen'>Asked </span>Questions</h2>

                <div className='flex items-center justify-center flex-wrap z-10 relative'>
                    <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                        <Helper items={items} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Faq
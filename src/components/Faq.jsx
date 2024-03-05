import React from 'react'
import Helper from './Helper'

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
        <div className='max-w-[1440px] mx-auto lg:pb-6'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto'>
                <h2 className='text-[30px] md:text-[40px] lg:text-xxl ff_kanit font-bold leading-[120%] text-center text-dark mb-6 sm:mb-8 lg:mb-10'>Frequently <span className='text-lightgreen'>Asked </span>Questions</h2>

                <div className='flex items-center justify-center flex-wrap z-10 relative'>
                    <div>
                        <Helper items={items} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Faq
import { useState } from 'react'
import Call from "../assets/Image/webp/CalIIcon.webp"
import Mail from "../assets/Image/webp/MailIcon.webp"
import FilledLocation from "../assets/Image/webp/FilledLocation.webp"

const FormSec = () => {

    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Msg, setMsg] = useState("");


    const handleFormSubmission = (event) => {
        event.preventDefault();
        console.log(Name, Lastname, Email, Mobile, Msg);
        setName("");
        setLastname("");
        setEmail("");
        setMobile("");
        setMsg("");
    };

    return (
        <div className='max-w-[1440px] mx-auto pt-8 pb-12 sm:py-16 lg:py-20'>
            <div className="max-w-[1140px] px-5 md:px-3 mx-auto">
                <div className='flex lg:flex-row flex-col items-center justify-center gap-6 sm:gap-[55px] md:gap-[65px] lg:gap-[84px]'>

                    <div className='max-w-[464px] sm:max-w-[500px] w-full mx-auto sm:mx-0'>
                        <div className='max-w-[464px] w-full rounded-[16px] sm:min-h-[458px] bg-lightgreen p-4 sm:px-0 sm:py-8'>
                            <div className='flex items-center justify-center md:justify-start'>
                                <div className='bg-white p-4 sm:p-8 rounded-[16px] max-w-[416px] input_card sm:translate-x-[85px]'>
                                    <h2 className='text-black ff_kanit font-bold text-[30px] md:text-[40px] lg:text-xxl leading-[120%]'>Get in Touch</h2>
                                    <p className='ff_kanit font-light text-base leading-[150%] text-dark opacity-70 mt-2'>Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla.</p>

                                    <div className='flex flex-col gap-2 sm:gap-4 mt-4'>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={Call} alt="Call" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black ff_kanit font-normal font-base leading-[150%]'>Call</p>
                                                <p className='text-black ff_kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>+00 123 456 789</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={Mail} alt="Mail" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black ff_kanit font-normal font-base leading-[150%]'>Email</p>
                                                <p className='text-black ff_kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>Investor@travel</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={FilledLocation} alt="FilledLocation" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black ff_kanit font-normal font-base leading-[150%]'>Location</p>
                                                <p className='text-black ff_kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>900 Abia Martin Drive, PA Canada-18104</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[700px] w-full lg:max-w-[461px]'>
                        <form onSubmit={handleFormSubmission}>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[21px]'>
                                <input className='bg-white input_card p-4 rounded-[16px] ff_kanit w-full outline-none text-base leading-[150%] font-light' placeholder='First Name' type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                                <input className='bg-white input_card p-4 rounded-[16px] ff_kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Last Name' type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[21px] mt-4'>
                                <input className='bg-white input_card p-4 rounded-[16px] ff_kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Email' type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='bg-white input_card p-4 rounded-[16px] ff_kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Mobile no.' type="phone" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                            <div className='flex items-center justify-center gap-[21px] mt-4'>
                                <textarea placeholder='Write your message...' className='font-light text-base ff_kanit w-full min-h-[140px] leading-[150%] rounded-[16px] p-4 input_card resize-none outline-none' type='text' value={Msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type="submit" className='w-full max-w-[461px] h-[52px] rounded-[16px] bg-lightgreen text-white1 ff_kanit font-medium text-base leading-[150%] mt-6 sm:mt-8 hover:bg-black duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormSec
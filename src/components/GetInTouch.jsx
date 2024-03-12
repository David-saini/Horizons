import { useState } from 'react'
import Call from "../assets/Image/webp/CalIIcon.webp"
import Mail from "../assets/Image/webp/MailIcon.webp"
import FilledLocation from "../assets/Image/webp/FilledLocation.webp"

const GetInTouch = () => {
    // Define state variables for form inputs
    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Msg, setMsg] = useState("");
    // Function to handle form submission
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
        <div className='max-w-[1440px] mx-auto pt-8 pb-12 md:pt-14 md:pb-[70px] xl:py-20'>
            <div className="max-w-[1140px] px-5 md:px-3 mx-auto">
                <div className='flex lg:flex-row flex-col items-center justify-center gap-6 sm:gap-[55px] md:gap-[65px] lg:gap-[84px]'>

                    {/*========================== informative_card ===============================*/}
                    <div className='max-w-[464px] sm:max-w-[500px] w-full mx-auto sm:mx-0' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <div className='max-w-[464px] w-full rounded-[16px] sm:min-h-[458px] bg-lightgreen p-4 sm:px-0 sm:py-8'>
                            <div className='flex items-center justify-center md:justify-start'>
                                <div className='bg-white p-4 sm:p-8 rounded-[16px] max-w-[416px] shadow-inputShadow sm:translate-x-[85px]'>
                                    <h2 className='text-black font-kanit font-bold text-[30px] md:text-[40px] lg:text-xxl leading-[120%]'>Get in Touch</h2>
                                    <p className='font-kanit font-light text-base leading-[150%] text-dark opacity-70 mt-2'>Lorem ipsum dolor sit amet consectetur. In ultrices orci urna eget fringilla.</p>

                                    <div className='flex flex-col gap-2 sm:gap-4 mt-4'>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={Call} alt="Call" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black font-kanit font-normal font-base leading-[150%]'>Call</p>
                                                <a href="tel:++00 123 456 789" className='text-black font-kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>+00 123 456 789</a>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={Mail} alt="Mail" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black font-kanit font-normal font-base leading-[150%]'>Email</p>
                                                <a href="mailto:Investor@travel" className='text-black font-kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>Investor@travel</a>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <img className='w-6 sm:w-8' src={FilledLocation} alt="FilledLocation" />
                                            <div className='flex flex-col sm:gap-2'>
                                                <p className='text-black font-kanit font-normal font-base leading-[150%]'>Location</p>
                                                <a href='https://www.google.com/maps/search/900+Abia+Martin+Drive,+PA+Canada-18104/@49.0328897,-122.8075269,17z/data=!3m1!4b1?entry=ttu' target='_blank' className='text-black font-kanit font-light opacity-70 text-[14px] sm:text-base leading-[150%]'>900 Abia Martin Drive, PA Canada-18104</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*================================= form_div ==================================================*/}
                    <div className='max-w-[700px] w-full lg:max-w-[461px]' data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear">
                        <form onSubmit={handleFormSubmission}>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[21px]'>
                                <input className='bg-white shadow-inputShadow p-4 rounded-[16px] font-kanit w-full outline-none text-base leading-[150%] font-light' placeholder='First Name' type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                                <input className='bg-white shadow-inputShadow p-4 rounded-[16px] font-kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Last Name' type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[21px] mt-4'>
                                <input className='bg-white shadow-inputShadow p-4 rounded-[16px] font-kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Email' type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='bg-white shadow-inputShadow p-4 rounded-[16px] font-kanit w-full outline-none text-base leading-[150%] font-light' placeholder='Mobile no.' type="phone" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                            <div className='flex items-center justify-center gap-[21px] mt-4'>
                                <textarea placeholder='Write your message...' className='font-light text-base font-kanit w-full min-h-[140px] leading-[150%] rounded-[16px] p-4 shadow-inputShadow resize-none outline-none' type='text' value={Msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type="submit" className='w-full max-w-[461px] h-[52px] rounded-[16px] bg-lightgreen text-white1 font-kanit font-medium text-base leading-[150%] mt-6 sm:mt-8 hover:bg-black duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetInTouch
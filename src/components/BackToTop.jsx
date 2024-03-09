import React from 'react'
import topUp from '../assets/Image/png/BackToTopArrow.png'
import { useState } from 'react';


const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <span onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed bottom-[3%] right-[2%] z-10 hidden h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 cursor-pointer hover:scale-90 duration-300"
                ref={scrollTop} ><img className='w-100 d-flex' src={topUp} alt="topUp" /></span>
        </>

    )
}

export default BackToTop

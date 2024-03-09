
import './App.css';
import React, { useEffect } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './components/Testimonial';
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from './components/Common/BackToTop';
import GetInTouch from './components/GetInTouch';
import Faqs from './components/Faqs';
import BeautifulWorld from './components/BeautifulWorld';
import OurGallery from './components/OurGallery';
import OurService from './components/OurService';
import BestPlaces from './components/BestPlaces';

function App() {

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Nav />
      <Header />
      <BestPlaces />
      <OurService />
      <OurGallery />
      <BeautifulWorld />
      <Testimonial />
      <Faqs />
      <GetInTouch />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

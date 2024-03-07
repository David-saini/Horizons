
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Nav from './components/Nav';
import Service from './components/Service';
import Vaccation from './components/Vaccation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './components/Testimonial';
import FormSec from './components/FormSec';
import Faq from './components/Faq';
import Explore from './components/Explore';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <Header />
      <Vaccation />
      <Service />
      <Gallery />
      <Explore />
      <Testimonial />
      <Faq />
      <FormSec />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

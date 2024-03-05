
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

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Vaccation />
      <Service />
      <Gallery />
      <Testimonial />
      <FormSec />
      <Footer />
    </div>
  );
}

export default App;

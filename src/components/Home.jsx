
import Navbar from './Nav';
import Hero from './Herosection';
import Services from './Services';
import HowItWorks from './Howitworks';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Review from './Review';
import Enterprise from './Enterprise';
const Home = () => {
  return (
    <>
     <Navbar />
    <Hero />
    <Services />
    <HowItWorks />
    <Pricing />
    <Enterprise />
    <Portfolio/>
    <Review />
    <Contact />
    <Footer /> 
    </>
  )
}

export default Home

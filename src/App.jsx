import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Herosection';
import Services from './components/Services';
import HowItWorks from './components/Howitworks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
import { Routes, Route } from 'react-router-dom';
import Payment from './components/Payment';
import Enterprise from './components/Enterprise';
import Home from './components/Home'
import PartPay from './components/PartPay';
function App() {
  return (
    <>
    {/* <Navbar />
    <Hero />
    <Services />
    <HowItWorks />
    <Pricing />
    <Enterprise />
    <Portfolio/>
    <Review />
    <Contact />
    <Footer /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/howitwork' element={<HowItWorks/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/enterprise' element={<Enterprise/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/partpay" element={<PartPay />} />
      </Routes>
    </>
  );
}

export default App;

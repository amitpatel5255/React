import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import TopProducts from './Component/TopProducts/TopProducts'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Testimonials from './Component/TestimonialData/TestimonialData'
import Subscribe from './Component/Subscribe/Subscribe'
// import './inedx.css'
// import AOS from "aos";
// import "aos/dist/aos.css";
import Products from '../src/Component/Products/Products'

const App = () => {


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import FarmerOwned from '../components/Home/FarmerOwned'
import Footer from '../components/Shared/Footer'
import ContactUs from '../components/Home/ContactUs'
import CustomerReviews from '../components/Home/CustomerReviews'
import Gallery from '../components/Home/Gallery'
import ProductPorttfolio from '../components/Home/ProductPorttfolio'

function Home() {
  return (
    <div>
        <HomeHeader/>
        <FarmerOwned/>  
        <ProductPorttfolio/>
        <Gallery/>
        <CustomerReviews/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from './Hero'
import Navigation from '../../Components/Navigation'
import BestSeller from './BestSeller'
import Slider from './Slider'
import Service from './Service'
import Reviews from './Reviews'
import Article from './Article'
import Discount from './Discount'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <>
        <main>
            <Navigation/>
            <Hero/>
            <BestSeller/>
            <Slider/>
            <Service/>
            <Reviews/>
            <Article/>
            <Discount/>
            <Footer/>
        </main>
    </>
  )
}

export default Home
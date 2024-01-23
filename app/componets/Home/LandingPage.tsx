import React from 'react'
import Hero from './Hero'
import Header from './Header'
import CarStore from './CarStore'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <CarStore/>
        <Footer/>
    </div>
  )
}

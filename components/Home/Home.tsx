import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Feature from './Feature/Feature'
import Services from './Services/Services'
import ClientReview from './ClientReview/ClientReview'
import Team from './Team/Team'

const Home = () => {
  return (
    <div className='overflow-hidden '>
        <Hero/>    
        <About/>
        <Feature />
        <Services />
        <ClientReview />
        <Team />
    </div>
  )
}

export default Home
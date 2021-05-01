import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import Pricing from '../../components/Pricing/Pricing'
import { homeObjOne, homeObjThree } from './Data'

const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Services

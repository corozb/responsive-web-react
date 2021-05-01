import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import Pricing from '../../components/Pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home

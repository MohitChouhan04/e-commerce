import React, { useContext } from 'react'
import HeroSection from '../MainComponent/HeroSection'
import { AppContext, useProductContext } from '../context/Productcontex';


function About() {
  const { myName } = useProductContext();
  const data={
    name:"MY Ecommerce",
  }
  return (
    <>
    <p>{myName}</p>
  <HeroSection myData={data}/>
    </>
  )
}

export default About
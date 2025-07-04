import React from 'react'
import styled from 'styled-components';
import HeroSection from '../MainComponent/HeroSection';
import Services from '../MainComponent/Services';
import Trusted from '../MainComponent/Trusted';
function Home() {
  const data = {
    name:"My store"
  }
  return <>
  
  <HeroSection myData={data}/>
  <Services />
  <Trusted/>
  </>

}

export default Home

// react arrow fuction component with export (rafce)
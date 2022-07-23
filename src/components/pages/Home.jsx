import React from 'react';
import '../../App.css';
import { HeroSection } from '../HeroSection';
import {Cards}  from '../Cards';
import Footer from '../Footer';
import { Trips } from '../Trips';
import { Stats } from '../Stats';


function Home () {
  return (
    <div>
        <HeroSection/>
        <Trips />
        <Stats />
        <Cards/>
        
        <Footer/>
    </div>
  )
}

export default Home;

import React from 'react';
import {Button} from './Button';
import '../App.css';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src='videos/video-3.mp4' autoPlay loop muted />
        <h1>ADWENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER 
            </Button>
        </div>
    </div>
  )
}

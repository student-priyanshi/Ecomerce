import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIAVLS ONLY</h2>
        
        <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collections</div>
            <img src={arrow} alt=""/>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="hero" />
        </div>
    </div>
  )
}

export default Hero
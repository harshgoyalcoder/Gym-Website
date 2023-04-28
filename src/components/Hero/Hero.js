import React from 'react'
import './Hero.css';
import Hero_image from '../../assets/hero_image.png';
import Hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import Header from '../Header/Header';
import NumberCounter from 'number-counter';
export default function hero() {

  
  return (
    <div className='hero' id='Home'>
      <div className='blur blur-h'></div>
      <div className='left-h'>
      <Header/>
      {/* div for the best ad */}
      <div className='the-best-ad'>
        <div></div>
        <span>The best fitness club in the town</span>
      </div>
      {/* hero heading */}
      <div className='hero-text'>
        <div>  {/* div-1 */}
          <span className='stroke-text'>Shape</span>
          <span className='your'>Your</span>
        </div>
        <div>  {/* div-2 */}
          <span>Ideal body</span>
        </div>
        <div>  {/* div-3 */}
          <span>In here we will help you to shape and build live up your life to fullest</span>
        </div>

      </div>

      {/* Stats div's */}
      <div className='figures'>
        <div>
          <span>
            <NumberCounter end={140} start={100} delay='4' preFix='+' /> 
          </span>
          <span>expert coaches</span>
        </div>
        <div>
          <span>
          <NumberCounter end={978} start={700} delay='5' preFix='+' /> 
            
          </span>
          <span>members joined</span>
        </div>
        <div>
          <span>
          <NumberCounter end={50} start={20} delay='3' preFix='+' /> 

          </span>
          <span>fitness programs</span>
        </div>
      </div>

      {/* hero buttons */}
      <div className='hero-buttons'>
        <buttons className='btn'>Get Started</buttons>
        <buttons className='btn'>Learn More</buttons>
      </div>


      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={Heart} alt=""/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero images */}
        <img src={Hero_image} alt="" className='hero-image'/>
        <img src={Hero_image_back} alt="" className='hero-image-back'/>

        {/* calories */}
        <div className='calories'>
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>

        </div>

      </div>
    </div>
  )
}

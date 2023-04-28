import React from 'react'
import './Program.css';
import RightArrow from '../../assets/rightArrow.png';
import {programsData} from '../../data/programsData';
export default function Program() {
  return (
    <div className='programs' id='Programs'>
        {/* header */}
        <div className='program-header'>
            <span className='stroke-text'>Explore Our</span>
            <span >Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* cards */}
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='categories'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>

            ))}
        </div>
    </div>

  )
}

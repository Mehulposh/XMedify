import React from 'react';
import Button from '../Button/Button';
import HeroImage from '../../assets/hero_image.svg';
import './Hero.css';

function HeroSection(){
    return(
        <div className='hero'>
            <div className='titleSection'>
                <p className='heroTitle'>Skip the travel! Find Online <br/>
                <span className='medical'>Medical</span>  <span className='centers'> Centers</span>
                </p>
                <p>
                    Connect instantly with a 24x7 specialist or choose to <br/> video visit a particular doctor.
                </p>
                <Button>Find Centers</Button>
            </div>
            <div>
                <img src={HeroImage} alt='hero image'/>
            </div>
        </div>
    )
}

export default HeroSection;
import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import './Button.css';

function HeroSection() {
    return (
        <>
          <div className='hero-container'>
            <h1>hello world, I'm Josh</h1>
            <h1></h1>
            <div className='hero-btns'>
              <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                View Projects
              </Button>
            </div>
          </div>
        </>
      );
    }

export default HeroSection;
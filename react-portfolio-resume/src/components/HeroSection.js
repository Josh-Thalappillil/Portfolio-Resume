import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <>
          <div className='hero-container'>
            <h1>hello world</h1>
            <div>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Test Button
              </Button>
              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
              >
                Test Button2
              </Button>
            </div>
          </div>
        </>
      );
    }

export default HeroSection;
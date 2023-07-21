import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import './Button.css';

function HeroSection() {
    return (
        <>
          <div className='hero-container'>
            <h1 className='intro'>hello world, I'm Josh </h1>
            <h1 className='fsdev'>&lt;Software Developer/&gt;</h1>
            <p>I am a passionate software developer, who loves to code. Always hungry to learn!</p>
            <div className='hero-btns'>
              <Link to="/Projects" className='btn'>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'>
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </>
      );
    }

export default HeroSection;
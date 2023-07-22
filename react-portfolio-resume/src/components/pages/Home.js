import '../../App.css';
import HeroSection from '../HeroSection';
import React, { useEffect } from 'react';

function Home () {
    useEffect(() => {
        document.title = "Josh's Portfolio | Home"; 
    }, []);

    return (
        <>
            <HeroSection />
        </>
    );
};

export default Home;
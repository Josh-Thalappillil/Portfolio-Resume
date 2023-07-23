import '../../App.css';
import HeroSection from '../HeroSection';
import React, { useEffect } from 'react';

function Home () {
    useEffect(() => {
        document.title = "Home | Josh's Portfolio"; 
    }, []);

    return (
        <>
            <HeroSection />
        </>
    );
};

export default Home;
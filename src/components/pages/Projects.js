import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards'

function Projects() {
    useEffect(() => {
        document.title = "Josh's Portfolio | Projects"; 
    }, []);

    return (
        <Cards />
    );
}

export default Projects;
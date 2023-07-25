import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards'

function Projects() {
    useEffect(() => {
        document.title = "Projects | Josh's Portfolio"; 
    }, []);

    return (
        <Cards />
    );
}

export default Projects;
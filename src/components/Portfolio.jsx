import React, { useEffect, useState} from 'react'; 
import GifPlayer from 'react-gif-player'; 
    
const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    //fetching data from json file
    useEffect(() => {
            fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, []);


    return (
        <div className='lg:mx-12 mx-4 my-32' id='portfolio'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'>Recent Projects</p>
                <h2 className='md:text-5xl text-4xl font-bold'>My Portfolio</h2>
            </div>
            {/* need to create a json file for the projects data */}
            {/* After creating a json file, and fetching data, we now create projects card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-3'>
            {
                projects.map(project => <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
                        {/* <img src={project.image} alt='' className='hover:scale-90 transition-all duration-300' /> */}
                        <GifPlayer gif={project.gif} className='hover:scale-110 transition-all duration-300'  still={project.image}/> 
                        <div className='p-8'>
                            <h3 className='text-2xl font-semibold mb-2 text-headingColor py-2'>{project.name}</h3>
                            <p className='text-body mb-4'>{project.description}</p>
                        </div>
                    </div>)
            }
        </div>

        </div>
    );
};

export default Portfolio; 
import profilePic from '../images/Thinking.jpg'
import {Link} from 'react-scroll';

const About = () => {
    return (
        <div className='lg:mx-10 mx-2' id="about">
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10'>
                <div className='sm:w-1/2'>
                    <img src={profilePic} alt="" className='w-full sm:w-11/12' />
                </div>
                <div className='sm:w-1/2'>       
                    <p className='text-xl font-semibold mb-5'>About</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>About Me</h2>
                    <p className='mt-8 md:pr-8 mb-8'>
                    Hi, I’m Guillermo Jimenez Iriarte, studying IT Programming at Nova Scotia Community College (NSCC) in Canada.
                    I love the creativity and constant changes in IT, which led me to this field. 
                    At NSCC, I’ve worked on important projects and learned a lot about programming languages and IT concepts.
                    I’m good at JavaScript, C#, Kotlin, Java, and a bit of C++, and I understand data structures, algorithms, and web development.
                    Outside school, I like to learn about new technologies and IT trends, and I enjoy improving my programming skills.
                    <br/><br/>
                    In addition to coding, I have a keen interest in reading about, learning, and analyzing historical events. I also enjoy sketching to improve and scale my creativity, staying active through gym workouts and outdoor activities, and camping to connect with nature and people. 
                    Feel free to explore my portfolio and don’t hesitate to reach out if you have any questions or would like to connect.”
                    </p>
                    <Link
                        to="contact"
                        spy={true}
                        activeClass="active"
                        smooth={true} 
                        offset={-100}                   
                    >
                        <button className='btn-primary'>Contact Me</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default About; 

//37 minute
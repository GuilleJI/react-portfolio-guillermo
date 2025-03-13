
import {Link} from 'react-scroll';

const About = () => {
    return (
        <div className='lg:mx-10 mx-2' id="about">
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-1'>
                <div className='sm:w-1/2'>
                    <img src="images/Thinking.jpg" alt="" className='w-full sm:w-11/12' />
                </div>
                <div className='sm:w-1/2'>       
                    <p className='text-xl font-semibold mb-5'>About Me</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>Allow me to introduce myself,</h2>
                    <p className=' text-lg mt-8 md:pr-8 mb-8'>
                    Hi, I'm <strong className="text-primary">Guillermo</strong>—a dedicated final-year programming student with a passion for creating digital experiences that are both intuitive and impactful.  
                    Born in <strong className="text-primary">Bolivia</strong>, I’ve embraced a rich, multicultural background, having spent my childhood in the <strong className="text-primary">United States</strong> before settling in <strong className="text-primary">Canada</strong> in 2012. 
                    My technical expertise spans both <strong className="text-primary">front-end</strong> and <strong className="text-primary">back-end</strong> development, and I thrive in environments that push me to innovate and collaborate. 
                    <br/><br/>
                    I take pride in a <strong className="text-primary">user-first</strong> approach to <strong className="text-primary">design and development</strong>, seamlessly blending technical proficiency and creativity. Whether through team projects, hackathons or a hands-on professional work term project, I've honed my ability to tackle <strong className="text-primary">real-world challenges </strong> with agility and insight.
                    <br /><br/>
                    Beyond coding, I'm continually exploring innovative ways to integrate <strong className="text-primary">emerging technologies</strong>—like AI—into projects and leverage current design trends to enhance digital interactions. I invite you to explore my portfolio and learn more about my journey, my skills, and the creative solutions I bring to the table.</p>
                    <Link
                        to="skills"
                        spy={true}
                        activeClass="active"
                        smooth={true} 
                        offset={-100}                   
                    >
                        <br/><br/>
                        <button className='btn-primary hover:drop-shadow-2xl'>Click Next</button>
                    </Link>
                    
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default About; 

//37 minute
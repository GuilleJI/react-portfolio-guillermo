
import {Link} from 'react-scroll';

const About = () => {
    return (
        <div className='lg:mx-10 mx-2 my-4' id="about">
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-1'>
                <div className='sm:w-1/2'>
                    <img src="images/Thinking.jpg" alt="" className='w-full sm:w-11/12' />
                </div>
                <div className='sm:w-1/2'>       
                    <p className='text-xl font-semibold mb-5'>About Me</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>Allow me to introduce myself,</h2>
                    <p className=' text-lg mt-8 md:pr-8 mb-8'>
                    My name is <strong className="text-primary">Guillermo</strong> — an IT Programming graduate from NSCC, who is interested in accessible and well-designed digital experiences.  
                    Born and raised in <strong className="text-primary">Bolivia</strong>, I have a blended background from having lived and spent my childhood in the <strong className="text-primary">United States</strong> for a while and now living in <strong className="text-primary">Canada</strong> since 2012. 
                    My technical skills rest in <strong className="text-primary">front-end development </strong>,<strong className="text-primary">UI/UX design</strong>, and creating functional mobile and web interfaces that are accessible and easy to use. I've worked on real-world projects through team-based challenges, hackathons, and professional work terms, where I contributed to design planning, interface logic, and user-centered workflows.
                    <br/><br/>
                    I enjoy <strong className="text-primary">solving problems</strong> through <strong className="text-primary">clean design</strong>, <strong className="text-primary">efficient code</strong> and attention to <strong className="text-primary">intuitive interaction</strong>. I'm especially interested in integrating light-weight AI tools and web technologies to enhance everyday digital products.
                    <br /><br/><strong className="text-primary">Thanks for stopping by — feel free to explore my work and connect.</strong>
                    </p>
                    <Link
                        to="skills"
                        spy={true}
                        activeClass="active"
                        smooth={true} 
                        offset={-100}                   
                    >
                        <br/>
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
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
                    <p className='text-xl font-semibold mb-5'>About Me</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>To Start off...</h2>
                    <p className='mt-8 md:pr-8 mb-8'>
                    My name is Guillermo, and I am an aspiring, self-motivated, and purpose-driven programming student with over a year of exposure in this field.
                    Born in Bolivia, I spent my childhood and early teens in the United States, returned to Bolivia, and finally settled in Canada in early 2012.
                    I am currently enrolled as a second-year IT Programmer at NSCC, where I am committed to academic excellence, achieving high scores through discipline and resilience. 
                    My goal is to graduate by early 2025.
                    <br /><br/>
                    I have a diverse range of hobbies and passions that keep me driven, such as reading and analyzing historical events, sketching (a hobby of mine since childhood), improving my physical fitness, traveling, and camping outdoors.
                    Despite this, I am eager to acquire new skills and experiences and am excited about what the future holds.
                    <br/><br/>
                    My thirst for knowledge led me to pursue this program, which is a blend of creative thinking, building from scratch, and solving challenges.
                    As technology evolves, so does the learning curve for programmers. 
                    Famous French Philosopher Voltaire once remarked, <strong>"The more I read, the more I acquire, the more certain I am that I know nothing."</strong>
                    This perfectly encapsulates the ever-expanding nature of knowledge and my eagerness to embrace the opportunities that lie ahead.
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
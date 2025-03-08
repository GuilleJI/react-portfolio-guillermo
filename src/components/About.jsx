
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
                    <h2 className='md:text-5xl text-4xl font-bold'>To Start off...</h2>
                    <p className=' text-lg mt-8 md:pr-8 mb-8'>
                    My name is <strong className="text-primary">Guillermo</strong>, a dedicated programming student with a year of learning in the field. 
                    Born in <strong className="text-primary">Bolivia</strong>, I’ve experienced a tri-cultural upbringing since childhood, having spent years in the <strong className="text-primary">United States</strong> and settled in <strong className="text-primary">Canada</strong> since 2012. 
                    These experiences have ultimately provided me with a broad range of perspectives that enhance my approach to <strong className="text-primary">technology</strong> and <strong className="text-primary">problem-solving</strong> through curiosity and adaptability. 
                    Currently, I am a second-year <strong className="text-primary">IT Programmer</strong> at <strong className="text-primary">NSCC</strong>, where my commitment to academic excellence has led to high scores.
                    I am on track to graduate by early <strong className="text-primary">2025</strong>.
                    <br /><br/>
                    My hobbies are varied and include reading about historical events, sketching—a passion since childhood—maintaining physical fitness, traveling, and camping outdoors.
                    These activities keep me driven and open to new experiences. I am excited about the future and eager to continue acquiring new skills.
                    <br/><br/>
                    I chose this program for its combination of <strong className="text-primary">creative thinking</strong>, hands-on building, and the challenge of solving complex problems. 
                    As technology advances, I am aware that the learning curve for programmers is ever-expanding.   
                    <strong className="text-primary"> Voltaire</strong> once remarked, <strong className="text-primary">“The more I read, the more I acquire, the more certain I am that I know nothing.”</strong></p>
                    <Link
                        to="skills"
                        spy={true}
                        activeClass="active"
                        smooth={true} 
                        offset={-100}                   
                    >
                        <button className='btn-primary hover:drop-shadow-2xl'>Click Next</button>
                    </Link>
                    
                </div>
            </div>
            <br/>
        </div>
    );
};

export default About; 

//37 minute
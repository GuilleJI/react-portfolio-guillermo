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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti. <br /><br />

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere hic iste voluptatibus illo deleniti.
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
import { Link } from 'react-scroll';
import {FaLinkedin, FaGithub} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="bg-bgShade py-28 md:px-12 px-4" id="footer">
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20 cursor-pointer'>
                <Link
                    to="home"
                    spy={true} 
                    activeClass="active"
                    smooth={true}
                    offset={-100} 
                    className='flex-shrink-0'
                >
                    <img src="images/logo portfolio.png" alt="" />
                </Link>
                <div className='flex flex-col sm:flex-row md:items-center gap-4 flex-wrap cursor-pointer'>
                    <Link 
                        to="home"
                        spy={true}
                        activeClass="active"
                        smooth={true}
                        offset={-100}   
                        className='block hover:text-gray-400 py-2 px-4'
                    >
                        Home
                    </Link>
                    <Link 
                        to="skills" 
                        spy={true} 
                        activeClass="active"
                        smooth={true} 
                        offset={-100}
                        className='block hover:text-gray-400 py-2 px-4'
                    >
                        Skills
                    </Link>
                    <Link 
                        to="about"
                        spy={true}
                        activeClass="active" 
                        smooth={true}
                        offset={-100} 
                        className='block hover:text-gray-400 py-2 px-4'
                    >
                        About Me
                    </Link>
                    <Link 
                        to="contact"
                        spy={true}  
                        activeClass="active"
                        smooth={true}
                        offset={-100}
                        className='block hover:text-gray-400 py-2 px-4'
                    >
                        Contacts
                    </Link>
                    <Link 
                        to="portfolio" 
                        spy={true}
                        activeClass="active" 
                        smooth={true} 
                        offset={-100} 
                        className='block hover:text-gray-400 py-2 px-4'
                    >
                        Portfolio
                    </Link>
                </div>
                {/* social icons */}
                <div className='flex items-center gap-4'>
                    <a
                        href="https://www.linkedin.com/in/guillermo-jimenez-iriarte/"
                        target="_blank"
                    >
                        <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all dur text-xl hover:text-primary'/>
                    </a>
                    <a
                        href="https://github.com/GuilleJI"
                        target='_blank'
                    >
                        <FaGithub   className='cursor-pointer hover:-translate-y-3 transition-all dur text-xl hover:text-primary'/>
                    </a>
                    
                </div>
            </div>
            <hr />
            <div className='mt-10 flex flex-col md:flex-row justify-between gap-8'>
                <p>Created by Guillermo Jimenez Iriarte</p>
                <div className='space-x-6'>
                    <a href='/' className='hover:text-gray-400'>Private Policy</a>
                    <a href='/' className='hover:text-gray-400'>Terms of Service</a>
                    <a href='/' className='hover:text-gray-400'>Cookies Settings</a>
                </div>

            </div>
        </div>
    );
};

export default Footer; 
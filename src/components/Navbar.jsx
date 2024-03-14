import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-scroll';

// import logo
import logo from '../images/logo portfolio.png'
// import menuicon from react icons
import { HiMenu } from "react-icons/hi"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //It’s a React Hook initializing isMenuOpen to false with an updater setIsMenuOpen.
    const [isSticky, setIsSticky] = useState(false);// Its a React Hook initializing isSticky to false with an updater setIsSticky.

    //toggle menubtn //This function toggles the state of 'isMenuOpen' between true and false, therefore why (!isMenuOpen) and NOT (false)
    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }

    //function for making navbar sticky when scrolling 
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0 ){
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll); 
    }, [])
    /*
    Summary: The code above is a useEffect React Hook that, upon the component's initial render, sets up a 'handleScroll' function 
    to be called whenever a scroll event occurs on the window, and within this function, if the vertical scroll position ( window.scrollY)
    is greater than 0, it sets a state variable 'isSticky' to 'true', indicating that the user has scrolled down from the top of the page.

    The empty array [] in useEffect signifies that the effect should only run once after the initial render, and not on subsequent re-renders, 
    mimicking a 'componentDidMount' lifecycle method in class components.  
    */


    return (
        <header className="w-full fixed top-0 left-0 right-0">
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
                {/* for large devices */}
                <div className="flex item-center justify-between">
                    {/* for logo */}
                    <div className="cursor-pointer">
                        <Link
                            to="footer"
                            activeClass="active"
                            smooth={true}
                            offset={-100} 
                        >
                            <img src={logo} alt="" className="h-10"/>
                        </Link>                        
                    </div>
                    {/* menu items for large devices */}
                    <div className="lg:flex items-center gap-3 hidden text-body text-lg">
                        <Link 
                            to="home" 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400"
                        >
                            Home                            
                        </Link>
                        <Link 
                            to="about" 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer hover:text-gray-400"
                        >
                            About Me
                        </Link>
                        <Link 
                            to="skills" 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer hover:text-gray-400"
                        >
                            Skills
                        </Link>
                        
                        <Link 
                            to="portfolio" 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer hover:text-gray-400"
                        >
                            Portfolio
                        </Link>    
                    </div>

                    {/* contact me button */}
                    <div className="lg:block hidden">
                        <Link
                            to="contact"
                            spy={true}
                            activeClass="active"
                            smooth={true} 
                            offset={-100}
                        >
                            <button className="outlineBtn">Contact Me</button>
                        </Link>
                    </div>
                    {/* menubtn for mobile devices */}
                    <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
                    <HiMenu />
                    </button>
                </div>

                {/* menu items for small devices */}
                {/* This code displays a menu with links to "Home", "Skills", "About Me", and "Portfolio" on small devices, but only when 
                 "isMenuOpen" is 'true'. */}
                 {/* The {} brackets in JSX (JavaScript XML) allow us to embed JavaScript expressions inside the HTML-like syntax. */}
                {/*So, isMenuOpen && <div>...</div> means “if isMenuOpen is true,
                  then render the <div>...</div>, otherwise render nothing”. */}
                
                {
                    isMenuOpen && (
                    <div className="mt-4 p-4 bg-body rounded-lg text-white lg:hidden">
                        <Link 
                            to="home"
                            spy={true}
                            activeClass="active"
                            smooth={true}
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400"
                        >
                            Home
                        </Link>
                        <Link 
                            to="about"
                            spy={true}
                            activeClass="active"
                            smooth={true}
                            offset={-100} 
                            className="block py-2 px-4 cursor-pointer hover:text-gray-400"
                        >
                            About Me
                        </Link>                       
                        <Link 
                            to="skills"
                            spy={true} 
                            activeClass="active"
                            smooth={true}
                            offset={-100}
                            className="block py-2 px-4 cursor-pointer  hover:text-gray-400"
                        >
                            Skills
                        </Link>                       
                        <Link 
                            to="portfolio"
                            spy={true} 
                            activeClass="active"
                            smooth={true}
                            offset={-100}
                            className="block py-2 px-4 cursor-pointer hover:text-gray-400"
                        >
                            Portfolio
                        </Link>
                    </div>)
                }
            </nav>
        </header>
    );
};

export default Navbar;
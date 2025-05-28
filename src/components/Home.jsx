import {Link} from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Home = () => {
    return (
      <div className="mt-20 bg-bgShade" id="home">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
          <div className="md:w-1/2 w-full">
                <img src="images/Abstract.avif" alt="" className="'w-full'" />
          </div>

          <div className="md:w-1/2 w-full mt-5">
              <h2 className="text-2xl text-headingColor font-semibold mb-5">Hello, I'm Guillermo Jimenez Iriarte</h2>
              <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-[76px] mb-5">I'm an <span className="text-primary">IT Programming Graduate </span> from Nova Scotia Community College (NSCC)</h1>
              <p className="text-body text-2xl leading-9 mb-8">I build efficient, user-friendly <span className="text-primary"><strong>web and mobile experiences </strong></span>using <span className="text-primary"><strong>modern tools </strong></span> and a <span className="text-primary"><strong>clear development approach</strong></span>. Welcome to my portfolio!</p>
              {/* social icons */}
              <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/guillermo-jimenez-iriarte/" target="_blank">
                    <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all dur text-6xl hover:text-primary"/>
                  </a>
                  <a href="https://github.com/GuilleJI" target="_blank">
                    <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all dur text-6xl hover:text-primary"/>
                  </a>
              </div>
              <br/><br/>
              <Link
                  to="about"
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  offset={-100}
              >
                <button className="btn-primary hover:drop-shadow-2xl">Let's get started!</button>
              </Link>     
          </div>            
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
};

export default Home; 
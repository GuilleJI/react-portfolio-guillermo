import bannerImg from '/images/Abstract.avif'
import {Link} from 'react-scroll';

const Home = () => {
    return (
      <div className="mt-20 bg-bgShade" id="home">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
          <div className="md:w-1/2 w-full">
                <img src="/images/Abstract.avif" alt="" className="'w-full'" />
          </div>

          <div className="md:w-1/2 w-full mt-5">
              <h2 className="text-2xl text-headingColor font-semibold mb-5">Hello, I'm Guillermo Jimenez Iriarte</h2>
              <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-[76px] mb-5">I'm a Second Year <span className="text-primary">IT Programming Student </span> at NSCC</h1>
              <p className="text-body text-2xl leading-9 mb-8">Currently aspiring to <span className="text-primary"><strong>pursue</strong></span> Full-Stack Web Development with a <span className="text-primary"><strong>background </strong></span>in front-end and back-end development. I am pleased to welcome you to my website portfolio!</p>
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
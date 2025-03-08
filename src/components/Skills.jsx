import {Link} from 'react-scroll';

// Making some array of objects for card items
const techSkills =[
    {id: 1, name: "Programming Languages", description: "Experienced in a diverse range of programming languages, including but not limited to JavaScript, C#, Kotlin, HTML/CSS, SQL, and Python.", image: "public/images/Programming Languages.png"},
    {id: 2, name: "Frameworks and Libraries", description: "Proficient in website design and development using frameworks like ASP.NET, WPF, React, Flask, Next.js, Node.js, and React Native.", image: "public/images/Frameworks.png"},
    {id: 3, name: "Version Control", description: "Proficient in Git, with experience in managing GitHub projects including branches and commits.", image: "images/versioncontrol.png"}
    ,
    {id: 4, name: "Design Tools", description: "Proficient in Figma for interface design, prototyping, and real-time collaboration. Adept at leveraging its vector editing tools and component features to create reusable design elements that ensure visual consistency across projects.", image: "images/figma.png"}
    ,
    {id: 5, name: "AI and Machine Learning", description: "", image:"public/images/HuggingFace.png"}
    
]

const softSkills = [
    {id: 1, name: "Teamwork-Oriented", description: "", image:"images/Team.png"}
    ,
    {id: 2, name: "Active Listening", description: "", image:"public/images/Active Listening.png"}
    ,
    {id: 3, name: "Willingness to Learn", description: "", image: "images/Learn.png"}
    ,
    {id: 4, name: "Effective Communication (English & Spanish)", description: "", image:"public/images/Communication.png"}
    ,
    {id: 5, name: "Creativity", description: "", image: "public/images/Creative.png"}
    ,
    {id: 6, name: "Initiative", description: "", image: "public/images/Initiative.png"}

]

const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 py-32" id="skills">
            <div className="text-headingColor mb-20">
                <p className="text-xl font-semibold mb-5">Skills</p>
                <h2 className="md:text 5xl text-4xl font-bold">My Expertise</h2>
            </div> 
            {/* skills card */} 
            <div className="mx-auto">
                <p className="text-2xl font-semibold mb-5"> Professional Skills</p>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 drop-shadow-lg hover:drop-shadow-xl">
                    {
                        softSkills.map(softSkill => <div key={softSkill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard">
                            <img src={softSkill.image} alt="" className="w-30 h-30 bg-white rounded-lg shadow-md mb-7 p-3" />
                            <h3 className="text-lg font-bold mb-4">{softSkill.name}</h3>
                            <p className="text-base">{softSkill.description}</p><br/>
                        </div> )
                    }
                </div>
                <br/><br/>
                <p className="text-2xl font-semibold mb-5"> Technical Skills</p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 drop-shadow-lg hover:drop-shadow-xl">
                    
                    {
                        techSkills.map(techSkill => <div key={techSkill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard">

                            <img src={techSkill.image} alt="" className="w-30 h-30 bg-white rounded-lg shadow-md mb-7 p-4 mx-auto"/>
                            <h3 className="text-lg text-center font-bold mb-4">{techSkill.name}</h3>
                            <p className="text-base p-2 mx-2">{techSkill.description}</p><br/>
                        </div>)
                    }
                
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="content-center flex justify-center">
                <Link
                    to="portfolio"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-100}
                ><button className='btn-primary object-center hover:drop-shadow-2xl'>Click Next</button></Link>
            </div>
            <br/>
        </div>       
    );
};

export default Skills;
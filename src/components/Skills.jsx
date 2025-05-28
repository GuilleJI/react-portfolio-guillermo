import {Link} from 'react-scroll';

// Making some array of objects for card items
const techSkills =[
    {id: 1, name: "Programming Languages", description: "Versatile in JavaScript, TypeScript, C#, SQL, and Python —  applied across mobile, web, and data-driven academic projects.", image: "/images/Programming Languages.png"},
    {id: 2, name: "Frameworks and Libraries", description: "Skilled in building responsive, user-friendly interfaces with React, React Native, and Next.js. Comfortable using Flask for lightweight web app logic.", image: "/images/Web Development.png"}
    ,
    {id: 3, name: "Tools and Platforms", description: "Proficient with Git and Github for version control and collaborative workflows. Experienced in using VS Code and Figma for design and development.", image: "/images/Remote.png"}
    ,
    {id: 4, name: "Databases", description:"Familiar with integrating and querying relational databases like SQLite, MySQL, and MS SQL in project-based environments.", image: "/images/Database.png"}
    ,
    {id: 5, name: "Other Technologies", description: "Hands-on with REST API integration and exploratory use of Hugging Face for NLP-based prototypes. Emphasis on clean, accessible, and scalable UI design.", image: "/images/Other.png"}
    ,
    {id: 6, name: "Previous Exposure", description: "Introductory experience with ASP.NET (MVC) and WPF from academic projects, supporting foundational knowledge of structured programming, UI layout, and component-based design.", image:"/images/Past Exposure.png"}
]

const softSkills = [
    {id: 1, name: "Teamwork-Oriented", description: "Experienced in collaborative team settings through hackathons and group projects. I value diverse input and focus on delivering quality results through mutual support and clear goals.", image:"/images/Team.png"}
    ,
    {id: 2, name: "Active Listening", description: "I prioritize understanding before acting. This helps me align with team expectations, contribute meaningfully to group decisions, and maintain productive communication throughout a project.", image:"/images/Listening.png"}
    ,
    {id: 3, name: "Willingness to Learn", description: "Curiosity drives me to stay up to date with tools and frameworks. I'm always eager to grow so I can bring fresh ideas and practical solutions to the table.", image: "/images/Learning.png"}
    ,
    {id: 4, name: "Effective Communication (English & Spanish)", description: "I'm bilingual and confident communicating with both technical and non-technical audiences. Whether discussing ideas or reporting progress, I aim to foster clear and inclusive collaboration.", image:"/images/Communication.png"}
    ,
    {id: 5, name: "Creativity", description: "I enjoy designing user-friendly solutions and bringing new ideas into UI design and fron-end projects. Creative thinking helps me enhance usability and functionality.", image: "/images/Creative.png"}
    ,
    {id: 6, name: "Initiative", description: "I take initiative when it's needed — whether clarifying project goals or offering solutions. I aim to add value while staying aligned with team structure and expectations.", image: "/images/Initiative.png"}

]

// 
const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 py-23" id="skills">
            <div className="text-headingColor mb-20">
                <p className="text-2xl font-semibold mb-5">Skills</p>
                <h2 className="md:text 5xl text-4xl font-bold">My Expertise</h2>
            </div> 
            {/* skills card */} 
            <div className="mx-auto">
                <p className="text-2xl font-semibold mb-8"> Professional Skills</p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 drop-shadow-lg hover:drop-shadow-xl">
                    {
                        softSkills.map(softSkill => <div key={softSkill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard">
                            <img src={softSkill.image} alt="" className="w-30 h-30 bg-white rounded-lg shadow-md mb-7 p-4 mx-auto" />
                            <h3 className="text-lg font-bold text-center mb-4">{softSkill.name}</h3>
                            <p className="text-base">{softSkill.description}</p><br/>
                        </div> )
                    }
                </div>
                <br/><br/><br/>
                <p className="text-2xl font-semibold mb-8"> Technical Skills</p>
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
import {Link} from 'react-scroll';

// Making some array of objects for card items
const techSkills =[
    {id: 1, name: "Programming Languages", description: "Experienced in a diverse range of programming languages, including but not limited to JavaScript, C#, Kotlin, SQL, Java, and Python.", image: "/images/Programming Languages.png"},
    {id: 2, name: "Frameworks and Libraries", description: "Proficient in website design and development using frameworks like ASP.NET, WPF, React, Flask, Next.js, Node.js, and React Native.", image: "/images/Web Development.png"},
    {id: 3, name: "Version Control", description: "Proficient in Git, with experience in managing GitHub projects including branches and commits.", image: "/images/Remote.png"}
    ,
    {id: 4, name: "Design Tools", description: "Proficient in Figma for interface design, prototyping, and real-time collaboration. Adept at leveraging its vector editing tools and component features to create reusable design elements that ensure visual consistency across projects.", image: "/images/figma.png"}
    ,
    {id: 5, name: "AI and Machine Learning", description: "Experienced in developing projects utilizing NLP models and pipelines, leveraging community libraries such as Hugging Face.", image:"/images/HuggingFace.png"},
    {id: 6, name: "Databases", description:"Skilled in managing and optimizing databases, with experience in SQLite, PostgreSQL, MySQL, and Microsoft SQL Server.", image: "/images/Database.png"}
    
]

const softSkills = [
    {id: 1, name: "Teamwork-Oriented", description: "With a background in hackathons and collaborative projects, I've seen firsthand how teamwork drives success and achieves meaningful goals. I value diverse perspectives from peers and focus on delivering high-quality results through cooperation and support. My aim is to contribute to a positive impact by helping the team thrive.", image:"/images/Team.png"}
    ,
    {id: 2, name: "Active Listening", description: "Staying alert and proactive in discussions is a strength I bring to any team. I make it a priority to fully understand project and team needs before acting, which allows me to contribute effectively to collaboration and decision-making. By staying engaged, I help ensure our collective efforts are well-informed and aligned.", image:"/images/Listening.png"}
    ,
    {id: 3, name: "Willingness to Learn", description: "I'm passionate about learning new tools and technologies to keep my skills sharp and relevant. Curiosity drives me to grow, not just for myself, but to bring fresh ideas and innovation to projects. This commitment supports my ability make a positive impact alongside my teammates.", image: "/images/Learning.png"}
    ,
    {id: 4, name: "Effective Communication (English & Spanish)", description: "Clear communication with both technical an non-technical audiences is something I've honed through past projects and brainstorming sessions. Being bilingual in English and Spanish enhances my ability to connect teams and stakeholders, ensuring smooth interactions and shared understanding. It's all about building bridges for better collaboration.", image:"/images/Communication.png"}
    ,
    {id: 5, name: "Creativity", description: "I love bringing creative ideas to mobile and web development, as well as UI design, with focus on improving functionality and user experience. Innovative thinking helps me turn challenges into practical solutions, and I enjoy sharing perspectives that can spark inspiration within the team.", image: "/images/Creative.png"}
    ,
    {id: 6, name: "Initiative", description: "I take a proactive approach to sprint requirements and seeking out ways to add value, drawing from my academic and project experiences. Consistency and impact matter to me, and I strive to support the team's goals by stepping up when opportunities arise.", image: "/images/Initiative.png"}

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
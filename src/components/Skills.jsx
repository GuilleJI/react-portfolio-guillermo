import {Link} from 'react-scroll';

// Making some array of objects for card items
const skills =[
    {id: 1, name: "Programming Languages", description: "Experienced in a diverse range of programming languages, including but not limited to JavaScript, Kotlin, Java, C#, C, and C++. This broad knowledge base allows for flexibility and adaptability when tackling various software development tasks.", image: "src/images/Programming.png"},
    {id: 2, name: "Web Development", description: "Proficient in website design and development using HTML, CSS (SASS, Tailwind CSS, Bootstrap),JavaScript (React.js, Node.js), and C# (ASP.NET).", image: "src/images/Web Dev.png"},
    {id: 3, name: "Data Management", description: "Familiar with data fundamentals, including SQL, ADO.NET, and Entity Framework.", image: "src/images/Data Management.png"},
    {id: 4, name: "Mobile Development", description: "Experienced in Java and Kotlin for Android development using Android Studio.", image: "src/images/Mobile Development.png"},
    {id: 5, name: "Version Control", description: "Proficient in Git, with experience in managing GitHub projects including branches and commits.", image: "src/images/Version Control.png"},
    {id: 6, name: "Design Tools", description: "Proficient in Figma for interface design, prototyping, and real-time collaboration. Furthermore, I am adept at using Figma's vector editing capabilities and components feature to create reusable design elements, ensuring consistency across all designs.", image: "src/images/FigmaDesign.png"},
    {id: 7, name: "Professional Practices for IT", description: "Understanding of professional standards, ethics, and practices in the IT industry.", image: "src/images/IT.png"},
    {id: 8, name: "Project Management", description: "Experience collaborating projects from conception to completion, often a key component of coursework. ", image: "src/images/Management.png"},
    {id: 9, name: "Problem-solving", description: "Experienced in applying logical reasoning to tackle intricate challenges, a proficiency developed through extensive involvement in programming and systems analysis tasks.", image: "src/images/Problem Solving.png"},
    {id: 10, name: "Teamwork", description: "Accustomed to collaborative environments, with a focus on projects that require team synergy and effective communication.", image: "src/images/Teamwork.png"},
    {id: 11, name: "Attention to Detail", description: "Exhibit strong proficiency in time management and exceptional organizational abilities.", image: "src/images/Detail.png"},
    {id: 12, name: "Eagerness to Learn", description: "Proactively pursuing new experiences and knowledge to enhance existing skills.", image: "src/images/Learning.png"},
]
const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 py-32" id="skills">
            <div className="text-headingColor mb-20">
                <p className="text-xl font-semibold mb-5">Skills</p>
                <h2 className="md:text 5xl text-4xl font-bold">My Expertise</h2>
            </div> 
            {/* skills card */} 
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 drop-shadow-lg hover:drop-shadow-xl">
                {
                    skills.map(skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard">
                        <img src={skill.image} alt="" className="w-30 h-30 bg-white rounded-lg shadow-md mb-7 p-3"/>
                        <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
                        <p className="text-base">{skill.description}</p><br/>
                    </div>)
                }
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
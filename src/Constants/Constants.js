import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJava, FaLinkedinIn, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";

// for project 1
import project1Img1 from '../assets/Project1/1.png'
import project1Img2 from '../assets/Project1/2.png'
import project1Img3 from '../assets/Project1/3.png'
import project1Img4 from '../assets/Project1/4.png'


// for project 2
import project2Img1 from '../assets/Project2/1.png'
import project2Img2 from '../assets/Project2/2.png'
import project2Img3 from '../assets/Project2/3.png'


// for project 3
import project3Img1 from '../assets/Project3/1.png'
import project3Img2 from '../assets/Project3/2.png'
import project3Img3 from '../assets/Project3/3.png'
import project3Img4 from '../assets/Project3/4.png'
import project3Img5 from '../assets/Project3/5.png'

// for project 4
import project4Img1 from '../assets/Project4/1.png'
import project4Img2 from '../assets/Project4/2.png'
import project4Img3 from '../assets/Project4/3.png'
import project4Img4 from '../assets/Project4/4.png'

// for project 5
import project5Img1 from '../assets/Project5/1.png'
import project5Img2 from '../assets/Project5/2.png'
import project5Img3 from '../assets/Project5/3.png'
import project5Img4 from '../assets/Project5/4.png'
import project5Img5 from '../assets/Project5/5.png'


// for project 5
import project6Img1 from '../assets/Project6/1.png'
import project6Img2 from '../assets/Project6/2.png'
import project6Img3 from '../assets/Project6/3.png'
import project6Img4 from '../assets/Project6/4.png'


// socialIcons
import { FaFacebookF } from "react-icons/fa";

// lightModeImg
import lightModeImg from '../assets/lightModeImg.png'
import nightModeImg from '../assets/nightModeImg.png'

// institutesImages
import schoolLogo from '../assets/schoolLogo.png'
import collegeLogo from '../assets/collegeLogo.png'
import universityLogo from '../assets/universityLogo.png'
import smitLogo from '../assets/smitLogo.png'
import digiskillsLogo from '../assets/digiskillsLogo.png'
import defaultCompanyLogo from "../assets/defaultCompanyLogo.png"

// certificatesImages
import certificate1 from "../assets/certificates/H1.png"
import certificate2 from "../assets/certificates/H2.png"
import certificate3 from "../assets/certificates/H3.png"
import certificate4 from "../assets/certificates/H4.png"
import certificate5 from "../assets/certificates/H5.png"


// navbarLogo
import navbarImg from '../assets/navbarLogo.png'
import { SiAntdesign, SiDjango, SiExpress, SiMongodb, SiPostman, SiTypescript } from "react-icons/si";


const skillsSubTitle = "Crazy full stack developer who wants to explore every tech stack";

// name
const name = "Muhammad Ameer Hamza";

// navbarLogo
const navbarLogo = navbarImg;

// skillsIcons
const skillsIcons = [
    {
        icon: <FaHtml5 />,
        title: "Html"
    },
    {
        icon: <FaCss3Alt />,
        title: "CSS"
    },
    {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript"
    },
    {
        icon: <SiTypescript />,
        title: "TypeScript"
    },
    {
        icon: <IoLogoFirebase />,
        title: "Firebase"
    },
    {
        icon: <RiReactjsLine />,
        title: "React"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Next.JS"
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB"
    },
    {
        icon: <SiExpress />,
        title: "Express.JS"
    },
    {
        icon: <FaNodeJs />,
        title: "Node.JS"
    },
    {
        icon: <SiAntdesign />,
        title: "Ant Design"
    },
    {
        icon: <SiPostman />,
        title: "Postman"
    },
    {
        icon: <FaPython />,
        title: "Python"
    },
    {
        icon: <SiDjango />,
        title: "Django"
    },
    {
        icon: <FaJava />,
        title: "Java"
    },
    {
        icon: <TbBrandCpp />,
        title: "C++"
    },
];

// education
const education = [
    {
        img: universityLogo,
        instituteName: "University of Karachi",
        degreeName: "Bachelor of Computer Science",
        duration: "January 2024 - December 2027 (expected)"
    },
    {
        img: collegeLogo,
        instituteName: "Govt. College For Men Nazimabad",
        degreeName: "Intermediate in Science General Group",
        duration: "November 2021 - October 2023"
    },
    {
        img: schoolLogo,
        instituteName: "Mumtaz Vision Academy",
        degreeName: "Matriculation in Science Group",
        duration: "March 2019 - October 2021"
    }
]

// certifications
const certifications = [
    {
        img: certificate1,
        certificateProvider: "ASHRAE PNEC-NUST",
        certificationName: "Modeling Engineering Cycles with Engineering Equation Solver",
        issuedDate: "November 2023"
    },
    {
        img: certificate2,
        certificateProvider: "ASME NUST PNEC",
        certificationName: "MATLAB Training Work Shop",
        issuedDate: "October 2023"
    },
    {
        img: certificate3,
        certificateProvider: "NUST PNEC",
        certificationName: "ANSYS Work Shop",
        issuedDate: "2021"
    },
    {
        img: certificate4,
        certificateProvider: "NUST PNEC",
        certificationName: "SolidWorks Work Shop",
        issuedDate: "2021"
    },
    {
        img: certificate5,
        certificateProvider: "Government of Pakistan",
        certificationName: "ANSYS",
        issuedDate: "January 2023"
    },
  

];

// resumeLink
const resume = "https://drive.google.com/drive/folders/1OE5eEuf9ZdIlgh9JCFpWvLvPWy7T7eqf";

// professionalExperience
const professionalExperience = [
    {
        img: defaultCompanyLogo,
        name: "Atlas Honda Pvt.",
        role: "Mechanical Engineering Intern (Production Department)",
        duration: "June 2024 - July 2024 (2 Months)",
        certified: false
    },
    {
        img: defaultCompanyLogo,
        name: "Volvo Private Limited",
        role: "Mechanical Engineering Intern",
        duration: "June 2023 - July 2023 (2 Months)",
        certified: false
    },
    {
        img: defaultCompanyLogo,
        name: "SSGC",
        role: "Mechanical Engineering Intern",
        duration: "June 2023 - July 2023 (1 Month)",
        certified: false
    },
  
];


// skillsList
const skillsList = [
    "Mechanical Engineering student at NUST with expertise in fluid dynamics, thermodynamics, and material engineering.",
    "Certified in advanced tools such as ANSYS and SolidWorks.",
    "Gained practical experience through internships at Atlas Honda and Volvo Private Limited, specializing in production optimization and diagnostics.",
    "Completed impactful projects, including CFD analysis of blood flow using AI models.",
    "Aspires to innovate and excel in engineering research and development."
];


// servicesList
const servicesList = [
    {
        title: "Website Development",
        description: "Create responsive and interactive websites for individuals, businesses, or organizations using your skills in HTML5, CSS3, JavaScript, and Bootstrap. Ensure that the websites are mobile-friendly and optimized for various devices and screen sizes."
    },
    {
        title: "Frontend Development",
        description: "Specialize in frontend development by building user interfaces (UIs) and user experiences (UX) using HTML5, CSS3, JavaScript, and React.js. Develop single-page applications (SPAs) and ensure they are fast, responsive, and accessible."
    },
    {
        title: "Custom Web Applications",
        description: "Utilize React.js along with backend technologies (like Node.js, Express.js, or others) to develop custom web applications. Use Firebase for real-time data syncing and backend services, such as authentication, databases, and hosting."
    },
    {
        title: "Web Hosting and Deployment",
        description: "Assist clients in deploying their websites and web applications to hosting platforms such as Firebase Hosting, Netlify, or traditional web servers. Optimize website performance and ensure secure connections (HTTPS)."
    },
    {
        title: "Maintenance and Updates",
        description: "Offer maintenance services to keep websites and web applications up-to-date with security patches, performance improvements, and feature enhancements. Provide regular backups and monitoring for uptime."
    },
    {
        title: "Responsive Design Audits",
        description: "Evaluate existing websites for responsiveness across devices and browsers. Provide recommendations and implement improvements using CSS3 media queries and responsive design principles."
    },
    {
        title: "Integration with APIs",
        description: "Integrate third-party APIs (such as social media APIs, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems."
    },
]

// portfolio
const portfolio = [
    {
        images: [
            project6Img1,
            project6Img2,
            project6Img3,
            project6Img4,
       
        ],
        title: "ANSYS AIRFOIL CFD",
        description: "The ANSYS Airfoil CFD Assignment analyzes the aerodynamic performance of a NACA 4412 airfoil. The study involves geometry preparation, mesh generation, and simulation using the RANS equations to evaluate lift and drag coefficients at different angles of attack (-10°, 0°, 10°). Pressure and velocity contours are examined to understand airflow dynamics. A grid independence study ensures accuracy by refining mesh quality. The simulation highlights the effects of aerodynamic forces on the airfoil, offering insights into design optimization. The project demonstrates a systematic approach to using CFD tools for realistic airfoil performance evaluation.",
        link: "https://drive.google.com/drive/folders/1olHBHBBZeY3gkNqcPkOWotgt-6pVGvt5"
    },
    {
        images: [
            project1Img1,
            project1Img2,
            project1Img3,
            project1Img4,
            
        ],
        title: "CFD ANALYSIS OF BLOOD FLOW THROUGH STENOSED CAROTID",
        description: "A comprehensive study focusing on the CFD analysis of blood flow through a stenosed carotid artery using Fluid-Structure Interaction (FSI). The project examines how blood flow dynamics and arterial wall mechanics interact, particularly in areas of stenosis. Key features include modeling varying stenosis severities, analyzing velocity and pressure distributions, and studying wall shear stress and arterial deformation. The use of FSI provides realistic insights into hemodynamics, aiding in understanding atherosclerosis progression, improving diagnostic techniques, and developing targeted treatments.",
        link: "https://drive.google.com/drive/folders/1olHBHBBZeY3gkNqcPkOWotgt-6pVGvt5"
    },
    {
        images: [
            project2Img1,
            project2Img2,
            project2Img3,
           
        ],
        title: "Solid Oxide Fuel Cells",
        description: "A sustainable energy project that utilizes Solid Oxide Fuel Cells (SOFCs) to generate electricity from poultry waste. This innovative system integrates anaerobic digestion to produce biogas, which powers SOFCs for electricity and heat generation. The project emphasizes waste management, energy efficiency, and environmental sustainability by repurposing waste into valuable resources. Key features include reduced greenhouse gas emissions, cost savings, and enhanced farm energy self-sufficiency. This approach not only supports renewable energy adoption but also demonstrates a viable model for eco-friendly and cost-effective waste management in agriculture.",
        link: "https://drive.google.com/drive/folders/1olHBHBBZeY3gkNqcPkOWotgt-6pVGvt5"
    },
    {
        images: [
            project3Img1,
            project3Img2,
            project3Img3,
            project3Img4,
            project3Img5,
        ],
        title: "CANARD CONTROL MISSILE RESULTS",
        description: "The Canard Control Project focuses on developing an advanced electronic control system for canard-equipped aircraft. This system optimizes maneuverability and stability by dynamically adjusting the canard's angle during flight. The project integrates sensors, microcontrollers, and actuators to ensure precise real-time control. Key features include enhanced aerodynamic performance, improved responsiveness, and reduced drag. By leveraging advanced algorithms, the system adapts to varying flight conditions, providing a safer and more efficient aircraft design. This innovative approach demonstrates the potential of electronics in modern aerospace control systems.",
        link: "https://drive.google.com/drive/folders/1olHBHBBZeY3gkNqcPkOWotgt-6pVGvt5"
    },
  
]

// contact
const contact = {
    number: "+92(310)3100902",
    email: "ameer.hamza.mecheng@gmail.com",
    location: "Saeedabad Baldia Town, Karachi, Pakistan"
}

// socialLinks
const socialLinks = [
 
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/hamza-tariq-aziz-b92a92227/"
    }
]

const themes = {
    lightModeImg,
    nightModeImg
}

export { skillsSubTitle, skillsIcons, skillsList, servicesList, portfolio, contact, socialLinks, name, themes, education, professionalExperience, resume, navbarLogo, certifications }
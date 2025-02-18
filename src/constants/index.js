import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";




export const HERO_CONTENT = `I specialize in building interactive and user-friendly web applications using HTML, CSS, JavaScript, TypeScript and Tailwind CSS. With a strong background in teaching and mentoring, I am now focused on applying my skills in real-world development.`;

export const ABOUT_TEXT = `I am a Frontend Developer and Tech Instructor with experience in teaching web development and mentoring future developers. My journey started with a Diploma in Computer Science, leading to a BSc in Computer Science from the University of Jos. 

I have taught and guided many aspiring developers at AYP Tech Hub, Code Plateau, and ITF, strengthening my expertise in web technologies, problem-solving, and collaboration. Now, I am eager to transition into a hands-on frontend development role where I can contribute to innovative projects while expanding my practical experience.

When I'm not coding, I enjoy mentoring, learning new technologies, and sharing knowledge to empower others.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Tech Lead & Web Development Instructor",
    company: "AYP Tech Hub",
    description: `Mentored and taught web development to aspiring developers. Conducted practical sessions on HTML, CSS, JavaScript, and Bootstrap. Guided students in building real-world projects and improving coding skills. Lead a team of instructors in curriculum development and course delivery.`,
    technologies: ["HTML", "CSS", "React JS", "Google workspace"],
  },
  {
    year: "2022",
    role: "Python Instructor (Intern)",
    company: "Code Plateau",
    description: `Taught Python fundamentals and programming logic. Assisted in developing digital solutions using Python. Learnt CMS platforms like wordpress.`,
    technologies: ["Python", "Git","Flask","Django","PHP","WordPress"],
  },
  {
    year: "2019",
    role: "IT Instructor (Intern)",
    company: "Industrial Training Fund (ITF)",
    description: `Trained peers in Excel, Access, HTML, CSS. Conducted basic web development sessions.`,
    technologies: ["HTML", "CSS", "Microsoft 360"],
  },
];

export const PROJECTS = [
  {
    title: "AYP Tech Hub Website",
    image: project5,
    description:
      "A multi-page website for a tech hub showcasing courses, instructors, and student testimonials.",
    technologies: ["HTML", "CSS", "Bootstrap", "Google sites", "Google forms"],
    github: "ayptechhub.com",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, different payment integrations including Remita and user authentication.",
    technologies: ["HTML", "CSS", "Bootstrap", "Django", "SQLite"],
    github: "https://github.com/dev-stephensam/E-Shop",
  },
  {
    title: "CollabEdu - Educational Collaboration Platform",
    image: project2,
    description:
      "A platform for educators and students to collaborate on projects, share resources, and communicate.",
    technologies: ["HTML", "CSS", "Bootstrap", "Django", "SQLite"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    github: "https://github.com/dev-stephensam/stephens-portfolio",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React JS", "Strapi", "MongoDB"],
    github: "#",
  },
  {
    title: "AYP Tech Hub Blog",
    image: project6,
    description:
      "A blog for AYP Tech Hub to share articles, tutorials, and updates with students and the tech community.",
    technologies: ["Prebuilt Template", "Google Blogger"],
    github: "https://ayphubblog.blogspot.com/",
  },
  {
    title: "Currency Converter",
    image: project7,
    description:
      "A blog for AYP Tech Hub to share articles, tutorials, and updates with students and the tech community.",
    technologies: ["Next JS", "Rest API", "Tailwind CSS", "Django"],
    github: "https://github.com/dev-stephensam/Nextjs-Currency-converter-with-django",
  },
  {
    title: "Image to Text Converter",
    image: project8,
    description:
      "An image to text converter using OCR technology to extract text from images or PDF's.",
 
    technologies: ["Python", "Azure Cognitive Services", "Streamlit"],
    github: "https://github.com/dev-stephensam/Azure-AI-read-text",
  },
];

export const CONTACT = {
  address: "By LEA Secondary School, Gidan Mangoro, Abuja, Nigeria",
  phoneNo: "+234 814 303 1676",
  email: "chungs.dev@gmail.com",
};

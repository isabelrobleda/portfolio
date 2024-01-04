import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import "bootstrap/dist/css/bootstrap.css";

const projectsData = [
  {
    title: "Curriculum Builder",
    description:
      "This application allows users to generate and save their CVs quickly and efficiently in a responsive website. Users can create their CV while seeing it in a preview, they can download the PDF and receive a confirmation email. They can create multiple CVs. They can also delete and update them. Tech Stack: React JS, Node JS, Express JS and Mongo DB. For styling, Tailwind CSS.",
    imageSrc: "src/assets/cv-builder.png",
    url: "https://curriculum-builder.netlify.app/",
  },
  {
    title: "Board Games App",
    description:
      "Single Page Application for board games fanatics. Users can access detailed game descriptions and perform actions such as editing, deleting, and adding new games. Includes features like picking a random game, throwing a virtual dice, and conducting personalized tests to find the best-suited game. Tech Stack: React JS, JavaScript, HTML5, and CSS3 with Tailwind & Daisy UI.",
    imageSrc: "src/assets/board-games-app.png",
    url: "https://board-games-project.netlify.app/",
  },
  {
    title: "Spitting Llama Videogame",
    description:
      "In this game, players assume the role of a llama that automatically spits at appearing and disappearing targets. The project demonstrates my technical prowess in leveraging core web technologies to create an interactive and entertaining gaming experience. Tech Stack: JavaScript, HTML5, CSS3, and DOM Manipulation.",
    imageSrc: "src/assets/spitting-llama.png",
    url: "https://isabelrobleda.github.io/project1-game/",
  },
];

const skillsData = [
  "JavaScript (ES6)",
  "React JS",
  "HTML5",
  "CSS",
  "MongoDB",
  "Express",
  "NodeJS",
  "TypeScript",
  "Agile Methodologies",
  "REST APIs",
  "GitHub",
  "Atlassian Tools",
  "Project Management",
  "Product Management",
  "Scrum",
  "Strategic Planning",
  "Tailwind CSS", 
  "Bootstrap",
  "Communication Skills"
];

const contactIcons= [
  {
    url: "https://github.com/isabelrobleda",
    iconSrc: "src/assets/github-icon.png"
  },
  {
    url: "https://www.linkedin.com/in/isabel-robleda-17094382/",
    iconSrc: "src/assets/linkedin-icon.png"
  }
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <div className="wrapper">
        <Header
          name="Isabel Robleda"
          position="Full Stack Developer"
          contactLinks={contactIcons}
          summary="I am a Full Stack Developer with 6 years of experience in digital project
      management and knowledge in JavaScript, HTML5, CSS3, and MERN
      stack (MongoDB, Express JS, React JS, and Node JS). I am passionate
      about software development to improve peoples lives."
        />
        <Home
          title={`Hi there 👋🏾! I'm Isabel`}
          aboutTitle="About Me"
          description="
      I am a Full-Stack Developer (MERN) with a rich background of over 6 years of experience in Project and Product Management within the realm of Digital Products. 
      Holding a Bachelor's degree in International Relations from the Universidad Iberoamericana and a Master's (LLM) in Globalization and Law from Maastricht University, Netherlands, 
      I bring a unique blend of technical expertise and global perspective to my work. Driven by a passion for innovation, 
      I transitioned from managing development teams to becoming a Full-Stack Developer. 
      I started a Web Development bootcamp, equipping myself with the skills needed to create and enhance digital products with a user-centric approach. 
      My goal is to leverage my diverse skill set as a Web Developer to contribute to the development and enhancement of digital products, placing a strong emphasis on delivering exceptional user experiences."
          skills={skillsData}
          projects={projectsData}
          contact="Feel free to connect with me on LinkedIn, or take a look at my GitHub."
          contactLinks={contactIcons}
        />
      </div>
    </Router>
  </React.StrictMode>
);

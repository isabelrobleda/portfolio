import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import 'bootstrap/dist/css/bootstrap.css';


const projectsData = [
  {
    title: "Curriculum Builder",
    description: "This application allows users to generate and save their CVs quickly and efficiently in a responsive website. Users can create a sign-up/login to their account.They can create their CV while seeing it in a preview, they can download the PDF and receive a confirmation email. They can create multiple CVs in their account.They can also delete and update them. This project gained the title of the best project in my class. Tech Stack: React JS, Node JS, Express JS and Mongo DB. For styling, it is based on Tailwind CSS.",
    imageSrc: "src/assets/cv-builder-logo.png",
    url: "https://curriculum-builder.netlify.app/"
  },
  {
    title: "Board Games App",
    description: "Description of Project 2",
    imageSrc: "src/assets/board-games-app.png",
    url: "https://curriculum-builder.netlify.app/"
  },
  // Add more projects as needed
];


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
    <div className="wrapper">
    <Header
      name="Isabel Robleda"
      position="Full Stack Developer"
      links={[
        "https://github.com/isabelrobleda",
        "https://www.linkedin.com/in/isabel-robleda-17094382/",
      ]}
      summary="I am a Full Stack Developer with 6 years of experience in digital project
      management and knowledge in JavaScript, HTML5, CSS3, and MERN
      stack (MongoDB, Express JS, React JS, and Node JS). I am passionate
      about software development to improve peoples lives."
    />
    <Home
      aboutTitle="About Me"
      description="Hello 👋🏾! 
      I am a Full-Stack Developer (MERN) with a rich background of over 6 years of experience in Project and Product Management within the realm of Digital Products. 
      Holding a Bachelor's degree in International Relations from the Universidad Iberoamericana and a Master's (LLM) in Globalization and Law from Maastricht University, Netherlands, 
      I bring a unique blend of technical expertise and global perspective to my work. Driven by a passion for innovation, 
      I transitioned from managing development teams to becoming a Full-Stack Developer. 
      I started a Web Development bootcamp, equipping myself with the skills needed to create and enhance digital products with a user-centric approach. 
      Career Objective: My goal is to leverage my diverse skill set as a Junior Web Developer to contribute to the development and enhancement of digital products, placing a strong emphasis on delivering exceptional user experiences."
      skills={[
        "JavaScript (ES6)",
        "React JS",
        "HTML5",
        "CSS",
        "MongoDB",
        "Express",
        "NodeJS",
        "Agile Methodologies",
        "REST APIs",
        "GitHub", 
        "Atlassian Tools", 
        "Project Management"
      ]}
      projects={projectsData}
      contact="Feel free to reach me via email or connect with me on LinkedIn."
    />
    </div>
    </Router>
  </React.StrictMode>
);

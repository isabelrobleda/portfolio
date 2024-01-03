import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
      projects={["Curriculum Builder", "Board Games App", "Spitting Llama"]}
      contact="Feel free to reach me via email or connect with me on LinkedIn."
    />
    </div>
  </React.StrictMode>
);

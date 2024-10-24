import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./components/Contact.tsx";
import CVBuilder from "./assets/cv-builder.png"
import boardGames from "./assets/board-games-app.png"
import spittingLlama from "./assets/spitting-llama.png"
import iconGithub from "./assets/github-icon.png"
import iconLinkedin from "./assets/linkedin-icon.png"
import todoListVue from "./assets/todo-list-vue.png"
import upcycle from "./assets/upcycle-project.png"
import MyWallet from "./assets/MyWallet.png"
import ColegioSenda from "./assets/colegioSenda.png"

const projectsData = [
  {
    title: "Colegio Senda",
    description:
      "This project is a website for a school in Mexico. It includes a blog, a an application form, and a various links to different info. The project demonstrates my ability to create a fully functional website using the MERN stack.",
    imageSrc: ColegioSenda,
    url: "https://colegiosenda.edu.mx/",
    techStack: ["React JS", "Node JS", "Express JS","Mongo DB", "Tailwind CSS"]
  },
  {
    title: "Upcycle E-Commerce",
    description:
      "This project is an e-commerce platform for re-used furniture. Users can browse products, add them to the cart, and proceed to checkout. Vendor can send their products through a form with complex form specifications. The project demonstrates my ability to create a fully functional e-commerce platform using the MERN stack.",
    imageSrc: upcycle,
    url: "https://upcyclemex.com/",
    techStack: ["React JS",  "Tailwind CSS", "Heroku", "JavaScript", "HTML", "MongoDB", "NodeJS", "Shopify" ]
  },
  {
    title: "Curriculum Builder",
    description:
      "This application allows users to generate and download their CVs. Users can create their CV while seeing it in a preview, they can download the PDF and receive a confirmation email. They can create multiple CVs. They can also delete and update them.",
    imageSrc: CVBuilder,
    url: "https://curriculum-builder.netlify.app/",
    techStack: ["React JS", "Node JS", "Express JS","Mongo DB", "Tailwind CSS"]
  },
  
  {
    title: "My Wallet",
    description:
      "This project is a personal finance management application. Users can add, delete, and update expenses and categories. They can also see a their expenses in two report pages. The project demonstrates my ability to create a fully functional application using the MERN stack.",
    imageSrc: MyWallet,
    url: "https://my-wallet-01.netlify.app/",
    techStack: ["React JS", "Node JS", "Express JS","Mongo DB", "Tailwind CSS"]
  },
  {
    title: "Board Games App",
    description:
      "Single Page Application for board games fanatics. Users perform actions such as editing, deleting, and adding new games. Includes features like picking a random game, throwing a virtual dice, and conducting personalized tests to find the best-suited game.",
    imageSrc: boardGames,
    url: "https://board-games-project.netlify.app/",
    techStack: ["React JS",  "Tailwind CSS", "DaisyUI", "JavaScript", "HTML" ]
  },
  {
    title: "To-Do List",
    description: "In this project, I created a simple to-do list using Vue Js. The user can add, delete, and mark tasks as completed. The project demonstrates my ability to create a simple and functional application using Vue.",
    imageSrc: todoListVue,
    url: "https://main--todo-list-vuejs-project.netlify.app/",
    techStack: ["Vue JS", "JavaScript", "HTML", "SCSS" ]
  },
  {
    title: "Spitting Llama Videogame",
    description:
      "In this game, players assume the role of a llama that automatically spits at appearing and disappearing targets. The project demonstrates my technical prowess in leveraging core web technologies to create an interactive and entertaining gaming experience.",
    imageSrc: spittingLlama,
    url: "https://isabelrobleda.github.io/project1-game/",
    techStack: ["JavaScript", "HTML", "CSS", "DOM Manipulation" ]
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
  "Communication Skills",
  "Problem-Solving",
  "Pair Programming", 
  "Vue JS",
  "DaisyUI",
  "Next JS",
];

const contactIcons = [
  {
    url: "https://github.com/isabelrobleda",
    iconSrc: iconGithub,
  },
  {
    url: "https://www.linkedin.com/in/isabel-robleda-17094382/",
    iconSrc: iconLinkedin,
  },
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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title={`👋 Hi there! I'm Isabel`}
                subtitle={
                  "+6 years of experience crafting products and doing digital magic! Based in Berlin, Germany."
                }
                aboutTitle="About Me"
                description={[
                  <p key={1}>
                    I am a <strong>Full-Stack Developer (MERN)</strong> with a
                    rich background of over 6 years of experience in Project and
                    Product Management within the realm of Digital Products.
                  </p>,
                  <p key={2}>
                    Holding a Bachelor's degree in{" "}
                    <strong>International Relations</strong> from the
                    Universidad Iberoamericana and a Master's (LLM) in{" "}
                    <strong>Globalization and Law</strong> from Maastricht
                    University, Netherlands, I bring a unique blend of technical
                    expertise and global perspective to my work.
                  </p>,
                  <p key={3}>
                    Driven by a passion for innovation, I transitioned from
                    managing development teams to becoming a{" "}
                    <strong>Full-Stack Developer</strong>.
                  </p>,
                  <p key={4}>
                    I started a Web Development bootcamp, equipping myself with
                    the skills needed to create and enhance digital products
                    with a <strong>user-centric approach</strong>.
                  </p>,
                  <p key={5}>
                    My goal is to leverage my diverse skill set as a{" "}
                    <strong>Web Developer</strong> to contribute to the
                    development and enhancement of digital products, placing a
                    strong emphasis on delivering exceptional{" "}
                    <strong>user experiences</strong>.
                  </p>,
                ]}
                skills={skillsData}
                projects={projectsData}
                contact={` Do you want to send feedback? Wanna say "hi"? Let me
                know!`}
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <ContactForm/>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

type HomeProps = {
  title: string;
  subtitle: string;
  aboutTitle: string;
  description: React.ReactNode[];
  skills: string[];
  projects: {
    title: string;
    url: string;
    description: string;
    imageSrc: string;
  }[];
  contact: string;
};

const history = createBrowserHistory();

const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  history.push("/contact"); 
};


const Home = ({
  title,
  subtitle,
  aboutTitle,
  description,
  skills,
  projects,
  contact,
}: HomeProps) => (

    
  <div className="scrollable-content px-5 pt-3 pb-4 home bg-black text-light">
    <div className="row">
      <div className="col">
        <div className="">
          <div className="">
            <h1 className="col-9 px-5 mt-4 mx-5 pt-4 font-bold main-title">
              <strong>{title}</strong>
            </h1>
            <p className="col-8 px-5 mt-2 subtitle mb-5 mx-5">{subtitle}</p>
          </div>
          <h2 className="pt-2 px-5 mt-4 pt-3 subtitles-home mx-5">
            {aboutTitle}
          </h2>
          <div className="pt-2 px-5 fonts-home mx-5">{description}</div>
          <br />
          <h2 className="pt-2 px-5 mt-4 pt-3 subtitles-home mx-5">Skills</h2>
          <ul className="pt-2 px-5 fonts-home mx-5">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="badge rounded-pill text-white mx-1 my-2 px-4 py-3 badges-skills"
              >
                {skill}
              </li>
            ))}
          </ul>
          <br />
          <h2 className="pb-1 px-5 mt-4 subtitles-home mx-5">My recent work</h2>
          <p className="pt-2 px-5 fonts-home mx-5">
            Explore some of my handcrafted projects, meticulously coded from
            inception to completion.{" "}
          </p>
          <div className="row px-5 pt-2">
            {projects.map((project, index) => (
              <Link to={project.url} target="_blank" className="card-project">
                <div
                  key={index}
                  className="card mb-3 text-white bg-black project-card px-3 py-3 mx-5"
                >
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-3">
                      <img
                        src={project.imageSrc}
                        className="img-fluid rounded mx-2 images-projects"
                        alt={project.title}
                      />
                    </div>
                    <div className="col-md-9 px-3">
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text fonts-home">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <br />
          <div className="mt-1 py-3 px-5 mb-5">
            <h2 className="subtitles-home mx-5">Contact Me</h2>
            <p className="fonts-home mx-5">{contact}</p>
            <button onClick={handleSubmit} className="btn btn-outline-secondary mx-5">Say Hello!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

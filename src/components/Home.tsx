import { Link } from "react-router-dom";

type HomeProps = {
  aboutTitle: string;
  description: string;
  skills: string[];
  projects: {
    title: string;
    url: string;
    description: string;
    imageSrc: string;
  }[];
  contact: string;
};
const Home = ({
  aboutTitle,
  description,
  skills,
  projects,
  contact,
}: HomeProps) => (
  <div className="scrollable-content px-4 pt-3 pb-4 home bg-dark bg-gradient text-light">
    <div className="row">
      <div className="col">
        <div className="col-11">
          <h2>{aboutTitle}</h2>
          <p>{description}</p>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3>Projects</h3>
          <div className="row">
            {projects.map((project, index) => (
              <Link to={project.url} className="card-project">
                <div key={index} className="card my-1 text-white bg-dark bg-gradient position-relative">
                  <div className="overlay"></div>
                    <img
                      src={project.imageSrc}
                      className="image-projects"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.url}</p>
                      <p className="card-text">{project.description}</p>
                    </div>
                  
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 py-3">
          <h3 >Contact Me</h3>
          <p>{contact}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

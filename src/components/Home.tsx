import { Link } from "react-router-dom";

type HomeProps = {
  title: string,
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
  contactLinks: {
    url: string;
    iconSrc: string;
  }[];
};
const Home = ({
  title,
  aboutTitle,
  description,
  skills,
  projects,
  contact,
  contactLinks,
}: HomeProps) => (
  <div className="scrollable-content px-4 pt-3 pb-4 home bg-dark text-light">
    <div className="row">
      <div className="col">
        <div className="col-11">
          <h1 className="px-4 my-4 py-4 display-2 text-center"><strong>{title}</strong></h1>
          <h2 className="pt-2 px-5 mt-3 py-3">{aboutTitle}</h2>
          <p className="pt-2 px-5 fonts-home">{description}</p>
          <br />
          <h2 className="pt-2 px-5 py-3">Skills</h2>
          <ul className="pt-2 px-5 fonts-home ">
            {skills.map((skill, index) => (
              <li key={index} className="badge rounded-pill bg-light bg-gradient text-black mx-1 my-1 px-3 py-2">{skill}</li>
            ))}
          </ul>
          <br />
          <h2 className="pb-1 px-5 mt-3">My recent work</h2>
          <div className="row px-5 mt-3 py-3">
            {projects.map((project, index) => (
              <Link to={project.url} target="_blank" className="card-project">
                <div
                  key={index}
                  className="card mb-3 text-white bg-dark bg-gradient project-card px-5 py-4  "
                >
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-3">
                      <img
                        src={project.imageSrc}
                        className="img-fluid rounded mx-2"
                        alt={project.title}
                      />
                    </div>
                    <div className="col-md-9 px-3">
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text fonts-home">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <br />
          <div className="mt-3 py-3 px-5 mb-5">
            <h2>Contact Me</h2>
            <p className="fonts-home">{contact}</p>
            <div className="flex">
              {contactLinks.map((contact) => (
                <Link to={contact.url} target="_blank">
                  <img src={contact.iconSrc} className="icon" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

type HomeProps = {
  aboutTitle: string;
  description: string;
  skills: string[];
  projects: string[];
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
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
          <h3>Contact Me</h3>
          <p>{contact}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

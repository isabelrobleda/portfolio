import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


type HeaderProps = {
  name: string;
  position: string;
  contactLinks: {
    url: string;
    iconSrc: string;
  }[];
  summary: string;
};


const Header = ({ name, position, contactLinks, summary }: HeaderProps) => {
     
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open("src/assets/IsabelRobledaResume.pdf", "_blank");
      };
  
    return (
      <div className="sticky-left px-4 px-5 pt-10 header bg-dark bg-gradient text-white col-md-3">
        <div className="row ">
          <div className="col-12">
            <h2 className="mt-5 pt-4">{name}</h2>
            <p className="badge rounded bg-light text-black mx-1 mb-5 px-3 py-2 ">{position}</p>
            <br />
            
            <p className="fonts-home">{summary}</p>
            <br />  
            <div className="flex">
              {contactLinks.map((contact, index) => (
                <Link key={index} to={contact.url} target="_blank">
                  <img src={contact.iconSrc} className="icon-header" alt={`icon-${index}`} />
                </Link>
              ))}
            </div>
            <br /> 
          </div>
          <div>
            <button onClick={handleSubmit} className="btn btn-outline-light">
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Header;

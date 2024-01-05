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
      <div className="sticky-left px-4 px-5 pt-10 header bg-black text-white col-md-3">
        <div className="col">
          <div className="col-12">
            <br />
            <img src={"src/assets/photo_irsg B&W.png"} className="photo-irsg mt-5" />
            <h2 className="mt-2 pt-4">{name}</h2>
            <p className="mx-1 mb-5 large">{position}</p>
            <br />
            
            <p className="fonts-home">{summary}</p>
            <br />  
            <div className="">
              {contactLinks.map((contact, index) => (
                <Link key={index} to={contact.url} target="_blank">
                  <img src={contact.iconSrc} className="icon-header" alt={`icon-${index}`} />
                </Link>
              ))}
            </div>
            <br /> 
          </div>
          <div className="div-button">
            <button onClick={handleSubmit} className="btn btn-outline-secondary text-light download-button">
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Header;

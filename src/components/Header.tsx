import "bootstrap/dist/css/bootstrap.css";

type HeaderProps = {
  name: string;
  position: string;
  links: string[];
  summary: string;
};
const Header = ({ name, position, links, summary }: HeaderProps) => (
  <div className="sticky-left px-4 px-4 pt-10 header bg-dark text-white ">
    <div className="col">
      <div className="col-12">
        <h2 className="mt-4 ">{name}</h2>
        <p>
         <mark>{position}</mark>
        </p>
        <ul>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        <p> {summary}</p>
      </div>
    </div>
  </div>
);

export default Header;

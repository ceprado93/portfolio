import { useLocation } from "react-router-dom";
import "./Layout.scss";
import line from "../assets/svg/Line.svg";

const ContactBar = () => {
  let location = useLocation();

  if (location.pathname.includes("/portfolio/project")) return null;
  return (
    <div className="contact__bar">
      <a href="https://github.com/ceprado93" rel="noreferrer" target="_blank">
        <p className="github__logo"></p>
      </a>
      <a href="https://www.linkedin.com/in/carlos-prado-buesa/" rel="noreferrer" target="_blank">
        <p className="linkedin__logo"></p>
      </a>
      <a href="https://codepen.io/ceprado93" rel="noreferrer" target="_blank">
        <p className="codepen__logo"></p>
      </a>
      <img src={line} alt="line" />
    </div>
  );
};

export default ContactBar;

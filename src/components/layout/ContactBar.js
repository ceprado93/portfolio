import "./Layout.scss";
import codepen from "../assets/codepen.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import line from "../assets/Line.svg";

const ContactBar = () => {
  return (
    <div className="contact__bar">
      <a href="">
        <img src={github} alt="github" />
      </a>
      <a href="">
        <img src={linkedin} alt="github" />
      </a>
      <a href="">
        <img src={codepen} alt="github" />
      </a>
      <img src={line} alt="line" />
    </div>
  );
};

export default ContactBar;

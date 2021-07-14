import "./Layout.scss";
import Logo from "../assets/c.png";

const Navigation = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo" />
        <div className="nav__links">
          <a href="#about">
            <span>01.</span>About
          </a>
          <a href="#Skills">
            <span>02.</span>Skills
          </a>
          <a href="#Portfolio">
            <span>03.</span>Portfolio
          </a>
          <a href="#contact">
            <span>04.</span>Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

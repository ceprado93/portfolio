import { useState } from "react";
import "./Layout.scss";
import Logo from "../assets/c.png";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);

  document.addEventListener("scroll", (e) => scrollNav(e));

  function scrollNav(e) {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if (scrollTop > 200) setShowNav(false);
    else if (scrollTop === 0) setShowNav(true);
  }
  return (
    <>
      {showNav ? (
        <nav className="show__nav">
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
      ) : (
        <nav className="hide__nav">
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
      )}
    </>
  );
};

export default Navigation;

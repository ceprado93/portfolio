import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import "./Pages.scss";

import Logo from "../assets/c.png";

const Project = () => {
  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight ",
    left: "reveal fadeInLeft project__text",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setReveal({
        right: "reveal fadeInRight visible ",
        left: "reveal fadeInLeft visible project__text",
      });
    }, 500);
  }, []);
  return (
    <>
      <nav className="show__nav">
        <Link className="project__navlink" to="/portfolio">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
      <section className="project__page">
        <div className={reveal.left}>
          <h1>APS Racing</h1>
          <h2>MERN app for rally media. </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
          <div className="project__tecnologies">
            <img className="stack" src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg" alt="react" />
            <img className="stack" src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="javascript" />
            <img className="stack" src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg" alt="Axios" />
            <img className="stack" src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png" alt="node js" />

            <img className="stack" src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png" alt="mongo db" />
          </div>
          <Link to="/portfolio">Back</Link>
        </div>
        <img className={reveal.right} src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg" alt="projectimg" />
      </section>
    </>
  );
};

export default Project;

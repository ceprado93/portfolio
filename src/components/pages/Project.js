import { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Pages.scss";

import Logo from "../assets/c.png";
import socialimage from "../assets/socialImage.png";
import cpzfondo from "../assets/cpzfondo.png";
import nemesonchip from "../assets/nemesonchip.png";
import simulacion from "../assets/simulacion.png";

const Project = () => {
  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight ",
    left: "reveal fadeInLeft project__text",
  });

  let location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    console.log(location.pathname);
    setTimeout(() => {
      setReveal({
        right: "reveal fadeInRight visible ",
        left: "reveal fadeInLeft visible project__text",
      });
    }, 500);
  }, []);

  if (location.pathname === "/portfolio/project/aps") {
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
  } else if (location.pathname === "/portfolio/project/wavemaps") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Wave Maps</h1>
            <h2>MERN surf and wave atlas. </h2>
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
          <a href="http://wave-maps.herokuapp.com/" target="_blank">
            <img className={reveal.right} src="https://cdn1.theinertia.com/wp-content/gallery/dylan-brayshaw/5-the-playground.jpg" alt="wave maps" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/procorlab") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Procorlab</h1>
            <h2>Booking platform and e-commerce for Medical tests. </h2>
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
          <a href="https://procorlab.es/" target="_blank">
            <img className={reveal.right} src={socialimage} alt="wave maps" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/cpart") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Celia Perez Art</h1>
            <h2>React prtfolio of a painter and designer.</h2>
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
          <a href="" target="_blank">
            <img className={reveal.right} src={cpzfondo} alt="wave maps" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/nemesonOne") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Nemeson One</h1>
            <h2>React and Sass webpage.</h2>
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
          <a href="https://nemesonone.es/" target="_blank">
            <img className={reveal.right} src={nemesonchip} alt="wave maps" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/oirdiez") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Oir 10</h1>
            <h2>React and Shopify e-commerce.</h2>
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
          <a href="https://testinginnoaudio.com/" target="_blank">
            <img className={reveal.right} src="https://nemesonone.es/assets/Renderagua.png" alt="wave maps" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/nemeson") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Nemeson</h1>
            <h2>React and Sass webpage.</h2>
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
          <a href="https://nemesonone.es/" target="_blank">
            <img className={reveal.right} src="https://nemeson.es/assets/renderHunt.png" alt="nemeson" />
          </a>
        </section>
      </>
    );
  } else if (location.pathname === "/portfolio/project/nemesonHunt") {
    return (
      <>
        <nav className="show__nav">
          <Link className="project__navlink" to="/portfolio">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <section className="project__page">
          <div className={reveal.left}>
            <h1>Nemeson Hunt</h1>
            <h2>React and Sass webpage.</h2>
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
          <a href="https://nemesonhunt.com/" target="_blank">
            <img className={reveal.right} src={simulacion} alt="nemeson hunt" />
          </a>
        </section>
      </>
    );
  }
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

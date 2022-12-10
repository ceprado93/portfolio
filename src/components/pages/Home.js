import { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import selectOption from "../redux/store";

import "./Pages.scss";
import Modal from "../shared/Modal";
import projectsFile from "../assets/projectsFile";
import { ReactComponent as DragHandle } from "../assets/svg/dragHandle.svg";
import { ReactComponent as Figma } from "../assets/svg/figma_logo.svg";
import { ReactComponent as Github } from "../assets/svg/github.svg";
import { ReactComponent as Codepen } from "../assets/svg/codepen.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";

import { Link } from "react-router-dom";

const Home = () => {
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState("hide");
  const [size, setSize] = useState(false);
  const [projects, setProjects] = useState(projectsFile);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [mode, setMode] = useState("claro");
  const [modeTrigger, setModeTrigger] = useState("oscuro");

  const [showMenu, setShowMenu] = useState(false);

  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight ",
    left: "reveal fadeInLeft",
    down: "reveal fadeInDown firstSection__textwrapper",
  });
  let history = useHistory();

  const toogleOption = useSelector(selectOption);

  useLayoutEffect(() => {
    console.log(window.screen.width);
    window.screen.width < 600 && setSize(true);

    setTimeout(() => {
      setReveal({
        right: "reveal fadeInRight visible ",
        left: "reveal fadeInLeft visible",
        down: "reveal fadeInDown visible firstSection__textwrapper",
      });
    }, 200);
  }, []);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const handleTheme = () => {
    mode === "claro" ? setMode("oscuro") : setMode("claro");
    modeTrigger === "claro" ? setModeTrigger("oscuro") : setModeTrigger("claro");
  };

  const handleModal = (e, elm) => {
    e.preventDefault();
    console.log(elm);
    selectedProject != undefined ? setSelectedProject(undefined) : setSelectedProject(elm);
    showModal === "hide" ? setShowModal("show") : setShowModal("hide");
  };

  return (
    <>
      <div className={mode + "_theme"}>
        <div className="scroller">
          <section id="hero" className="first__section">
            <nav id="top" className="show__nav">
              {/* <img src={Logo} alt="logo" /> */}
              <p className="letter_logo">C P</p>
              {size ? (
                <DragHandle onClick={() => toggleMenu()} />
              ) : (
                <div className="nav__links">
                  {/* <a href="#about">About</a> */}
                  <a href="#portfolio">Portafolio</a>
                  <a href="#contact">Contacto</a>
                </div>
              )}
              {showMenu && (
                <div className="openmenu">
                  <button onClick={() => toggleMenu()}>x</button>
                  <ul>
                    <a href="#portfolio" onClick={() => toggleMenu()}>
                      Portafolio
                    </a>
                    <a href="#contact" onClick={() => toggleMenu()}>
                      Contacto
                    </a>
                  </ul>
                </div>
              )}
            </nav>
            <div className={reveal.down}>
              <p className="pretitle">Hola, mi nombre es</p>
              <h1>Carlos Prado</h1>
              <h3>Doy vida a las ideas.</h3>
              {size ? (
                <p className="hero_desc">
                  Soy un desarrollador<br></br> con sede en Bilbao.<br></br>Me encanta el diseño<br></br> minimalista y brutalista. <br></br>busco el equilibrio<br></br> entre funcionalidad e{" "}
                  <br></br>
                  <span>impacto visual</span>.
                </p>
              ) : (
                <p className="hero_desc">
                  Soy un desarrollador con sede en Bilbao. <br></br>Me encanta el diseño minimalista y brutalista. <br></br>busco el equilibrio entre funcionalidad e <br></br>
                  <span>impacto visual</span>.
                </p>
              )}
            </div>
          </section>
          {projects.map((item, idx) => {
            return (
              <section key={idx} id={"portfolio" + idx} className="portfolio__section">
                <div className="portfolio__wrapper">
                  {idx === 0 ? (
                    <div className="portfolio_header">
                      <p>Portafolio</p>
                      <div className="break_line"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {item.map((elm, idx) => {
                    return (
                      <div key={elm.id} className={elm.size + " " + elm.row + " " + elm.column + " proyect__wrapper"}>
                        <a onClick={(e) => handleModal(e, elm)}>
                          <div>
                            <img src={elm.img} alt={elm.title} />
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
          <section id="contact" className="bottom__section">
            <section className="contact__section">
              <div className="contact_header">
                <div className="contact_title">
                  <h2>CONTACTO</h2>
                  <div className="break_line"></div>
                </div>
                <p>Si tienes algúna duda escupe aquí abajo.</p>
              </div>
              <div className="form__wrapper">
                <form action="#" method="post">
                  <input className="short__input" type="text" placeholder="Nombre" required />
                  <input className="short__input" type="text" placeholder="Apellido" required />
                  <input className="long__input" type="email" placeholder="Correo" required />
                  <textarea rows="7" type="text" placeholder="Consulta" required></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </section>
            <section className="main__footer">
              <div className="nav_footer">
                <a href="#hero">Arriba</a>
                <a href="#portfolio">Portafolio</a>
                <a href="#contact">Contacto</a>
                <button className={modeTrigger + "_button"} onClick={() => handleTheme()}>
                  Modo {modeTrigger}
                </button>
              </div>
              <div className="contact__bar">
                <a href="https://github.com/ceprado93" rel="noreferrer" target="_blank">
                  <Github className="contact_logo github__logo" />
                </a>
                <a href="https://www.linkedin.com/in/carlos-prado-buesa/" rel="noreferrer" target="_blank">
                  <Linkedin className="contact_logo linkedin__logo" />
                </a>
                <a href="https://codepen.io/ceprado93" rel="noreferrer" target="_blank">
                  <Codepen className="contact_logo codepen__logo" />
                </a>
                <a href="https://www.figma.com/file/caM90NjeCFugSt3CWMo8PK/Portfolio?node-id=68%3A14&t=iZURKDhIZ94l1NyQ-1" rel="noreferrer" target="_blank">
                  <Figma className="contact_logo figma__logo" />
                </a>
              </div>
            </section>
          </section>
        </div>
      </div>
      <Modal showModal={showModal} project={selectedProject} closeMe={handleModal}></Modal>
    </>
  );
};

export default Home;

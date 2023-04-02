import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

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
  const [start, setStart] = useState(false);
  const [logoClass, setLogoClass] = useState("letter_logo move wave");
  const [size, setSize] = useState(false);
  const [ticker, setTicker] = useState(false);
  const [projects, setProjects] = useState(projectsFile);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [mode, setMode] = useState("claro");
  const [modeTrigger, setModeTrigger] = useState("oscuro");
  const [techs, setTechs] = useState([
    "REACT",
    "VUE",
    "IONIC",
    "SASS",
    "CSS",
    "JS",
    "PHP",
    "NODE",
    "MYSQL",
    "REACT",
    "VUE",
    "IONIC",
    "SASS",
    "CSS",
    "JS",
    "PHP",
    "NODE",
    "MYSQL",
    "REACT",
    "VUE",
    "IONIC",
    "SASS",
    "CSS",
    "JS",
    "PHP",
    "NODE",
    "MYSQL",
  ]);

  const [showMenu, setShowMenu] = useState(false);

  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight ",
    left: "reveal fadeInLeft",
    down: "reveal fadeInDown firstSection__textwrapper",
  });
  let history = useHistory();

  useLayoutEffect(() => {
    window.screen.width < 600 && setSize(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLogoClass("letter_logo wave");
    }, 1500);
    setTimeout(() => {
      setReady(true);
      setStart(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (ready) {
      setTimeout(() => {
        setReveal({
          right: "reveal fadeInRight visible ",
          left: "reveal fadeInLeft visible",
          down: "reveal fadeInDown visible firstSection__textwrapper",
        });
      }, 200);
      setTimeout(() => {
        setTicker(true);
      }, 6000);
    }
  }, [start]);

  const toggleMenu = () => {
    const icnMenu = document.querySelector(".menu-icon");
    icnMenu.classList.toggle("active");

    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const handleTheme = () => {
    mode === "claro" ? setMode("oscuro") : setMode("claro");
    modeTrigger === "claro" ? setModeTrigger("oscuro") : setModeTrigger("claro");
  };

  const handleModal = (e, elm) => {
    e.preventDefault();
    selectedProject != undefined ? setSelectedProject(undefined) : setSelectedProject(elm);
    showModal === "hide" ? setShowModal("show") : setShowModal("hide");
  };

  return (
    <>
      <div className={mode + "_theme"}>
        <div className="scroller">
          <header id="hero" className="first__section">
            <nav id="top" className="show__nav">
              {showMenu && (
                <div className="openmenu">
                  <ul>
                    <a href="#hero" onClick={() => toggleMenu()}>
                      sobre mi
                    </a>
                    <a href="#portfolio0" onClick={() => toggleMenu()}>
                      Portafolio
                    </a>
                    <a href="#contact" onClick={() => toggleMenu()}>
                      Contacto
                    </a>
                  </ul>
                  <div className="menu_footer">
                    <div className="menu_footer_wrp">
                      <p>Social</p>
                      <div className="menu_contact__bar">
                        <a href="https://github.com/ceprado93" rel="noreferrer" target="_blank">
                          Github
                        </a>
                        &nbsp;—&nbsp;
                        <a href="https://www.linkedin.com/in/carlos-prado-buesa/" rel="noreferrer" target="_blank">
                          Linkedin
                        </a>
                        &nbsp;—&nbsp;
                        <a href="https://www.figma.com/file/caM90NjeCFugSt3CWMo8PK/Portfolio?node-id=68%3A14&t=iZURKDhIZ94l1NyQ-1" rel="noreferrer" target="_blank">
                          Figma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* <img src={Logo} alt="logo" /> */}
              <p className={logoClass}>C P</p>
              {size ? (
                <div className={start ? "menu-icon" : "hide"} onClick={() => toggleMenu()}>
                  <input className="menu-icon__cheeckbox" type="checkbox" />
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                // <DragHandle onClick={() => toggleMenu()} />
                <div className={start ? "nav__links" : "hide"}>
                  {/* <a href="#about">About</a> */}
                  <a href="#portfolio0">Portafolio</a>
                  <a href="#contact">Contacto</a>
                </div>
              )}
            </nav>
            <div className={reveal.down}>
              <p className="pretitle">Hola, mi nombre es</p>
              <h1>Carlos Prado</h1>
              <h2>Doy vida a las ideas.</h2>

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
            <div className={start ? "ticker" : "hide"}>
              <div className={ticker ? "ticker-title loaded" : "ticker-title"}>
                {techs.map((elm) => (
                  <span>{elm}</span>
                ))}
              </div>
            </div>
          </header>

          {projects.map((item, idx) => {
            return (
              <section key={idx} id={"portfolio" + idx} className="portfolio__section">
                <div className="portfolio__wrapper">
                  {idx === 0 ? (
                    <div className="portfolio_header">
                      <h3>Portafolio</h3>
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
                  <h3>CONTACTO</h3>
                  <div className="break_line"></div>
                </div>
                <p>Si tienes algúna duda escupe aquí abajo.</p>
              </div>
              <div className="form__wrapper">
                <form action="#" method="post">
                  <input className="short__input" type="text" name="name" placeholder="Nombre" required />
                  <input className="short__input" type="text" name="lastname" placeholder="Apellido" required />
                  <input className="long__input" type="email" name="mail" placeholder="Correo" required />
                  <textarea rows="7" type="text" placeholder="Consulta" name="inqury" required></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </section>
            <footer className="main__footer">
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
            </footer>
          </section>
        </div>
      </div>
      <Modal showModal={showModal} project={selectedProject} closeMe={handleModal}></Modal>
    </>
  );
};

export default Home;

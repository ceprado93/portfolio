import { useState, useLayoutEffect, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import "./Pages.scss";
import trialfile from "../assets/trialfile";

const Trial = () => {
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState("hide");
  const [start, setStart] = useState(false);
  const [logoClass, setLogoClass] = useState("letter_logo move wave");
  const [size, setSize] = useState(false);
  const [ticker, setTicker] = useState(false);
  const [projects, setProjects] = useState(trialfile);
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
  const scrollRef = useRef();

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
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
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

  return (
    <div data-scroll-container className={mode + "_theme scroll"} ref={scrollRef}>
      <header data-scroll-section id="hero" className="first__section">
        <nav id="top" className="show__nav">
          <p className={logoClass}>C P</p>
        </nav>
        <div className={reveal.down}>
          <p className="pretitle">Hola, mi nombre es</p>
          <h1>Carlos Prado</h1>
          <h3>Doy vida a las ideas.</h3>

          {size ? (
            <p className="hero_desc">
              Soy un desarrollador<br></br> con sede en Bilbao.<br></br>Me encanta el diseño<br></br> minimalista y brutalista. <br></br>busco el equilibrio<br></br> entre funcionalidad e <br></br>
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
          <div data-scroll data-scroll-speed="-5" data-scroll-position="top" data-scroll-direction="horizontal" className={ticker ? "ticker-title loaded" : "ticker-title"}>
            {techs.map((elm) => (
              <span>{elm}</span>
            ))}
          </div>
        </div>
      </header>
      {projects.map((item, idx) => {
        return (
          <section data-scroll-section key={idx} id={"portfolio" + idx} className="portfolio__section trialPortfolio">
            <div className="portfolio__wrapper">
              {idx === 0 ? (
                <div className="portfolio_header">
                  <h2>Portafolio</h2>
                  <div className="break_line"></div>
                </div>
              ) : (
                <></>
              )}
              {item.map((elm, idx) => {
                return (
                  <div data-scroll data-scroll-speed={idx % 2 == 0 ? "2" : "1"} data-scroll-position="top" key={elm.id} className={elm.size + " " + elm.row + " " + elm.column + " proyect__wrapper"}>
                    <a>
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
    </div>
  );
};

export default Trial;

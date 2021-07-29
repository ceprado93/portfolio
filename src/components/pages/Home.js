import { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Pages.scss";
import Logo from "../assets/c.png";

import photo from "../assets/photo.jpeg";
import nemesonchip from "../assets/nemesonchip.png";
import cpzfondo from "../assets/cpzfondo.png";
import simulacion from "../assets/simulacion.png";
import socialimage from "../assets/socialImage.png";

import { Link } from "react-router-dom";

const Home = () => {
  const [ready, setReady] = useState(false);
  const [leave, setLeave] = useState(false);
  const [size, setSize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight ",
    left: "reveal fadeInLeft",
    down: "reveal fadeInDown firstSection__textwrapper",
  });
  let history = useHistory();

  const toogleOption = useSelector(selectOption);

  useLayoutEffect(() => {
    let element = document.querySelector("#portfolio");
    var rect = element.getBoundingClientRect();
    toogleOption && window.scrollTo(0, rect.top);

    window.innerWidth < 600 && setSize(true);

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

  return (
    <>
      <div>
        <div className="scroller">
          <section className="first__section">
            <nav id="top" className="show__nav">
              <img src={Logo} alt="logo" />
              {size ? (
                <img
                  onClick={() => toggleMenu()}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAAD6+vrW1tZWVlYfHx/u7u5LS0vc3Nw7OztGRkZ2dnZSUlI3NzdAQEAYGBiYySgGAAAAvklEQVR4nO3bOQ7CUBBEQRaDd/v+tyX9AQGyNJ7BqrrBi1t9uwEAAAAAAAAAAAAAAAAAYYZnHUNI4XivYwwp7LOzGr1ChQrTKVSoMJ9Chd9N2VmNKaRwXroqljmkEAAAAAAA+BePSkIK1+zBqbGGFF5/P1R4JoUKFeZTqFBhPoXHbNlZjS2kEAAAAAAAoIpuf1WxdyGF11/XFJ5JoUKF+RQqVJhP4THXfyO8KwkpBAAAAAAAAAAAAAAAAICffADF1yNXbAz3AwAAAABJRU5ErkJggg=="
                  alt="navicon"
                />
              ) : (
                <div className="nav__links">
                  <a href="#top">
                    <span>01.</span>Home
                  </a>
                  <a href="#about">
                    <span>02.</span>About
                  </a>
                  <a href="#portfolio">
                    <span>03.</span>Portfolio
                  </a>
                  <a href="#contact">
                    <span>04.</span>Contact
                  </a>
                </div>
              )}
              {showMenu && (
                <div className="openmenu">
                  <button onClick={() => toggleMenu()}>x</button>
                  <ul>
                    <a href="#top" onClick={() => toggleMenu()}>
                      <span>01.</span>Home
                    </a>
                    <a href="#about" onClick={() => toggleMenu()}>
                      <span>02.</span>About
                    </a>
                    <a href="#portfolio" onClick={() => toggleMenu()}>
                      <span>03.</span>Portfolio
                    </a>
                    <a href="#contact" onClick={() => toggleMenu()}>
                      <span>04.</span>Contact
                    </a>
                  </ul>
                </div>
              )}
            </nav>
            <div className={reveal.down}>
              <h1>Hi, my name is</h1>
              <h2>Carlos Prado.</h2>
              <h3>I bring ideas to life.</h3>
              <p>
                I am a profesional Full stack developer based in Madrid, Spain. I create custom websites, always looking for the right balance between functionality and <span>visual impact.</span>
              </p>
              <a href="#about">About me</a>
            </div>
          </section>
          <section id="about" className="about">
            <h2 className="">
              <span>02.</span>About Me.
            </h2>

            <div className="about__info">
              <div className="text__wrapper">
                <p className="responsive-second-p">
                  My name is <span>Carlos Prado.</span> Born and raised in Getxo, Spain. As a kid, I always loved to disassemble and then reconstruct everything I came across, and find the logic
                  behind, that's why, when I turned 18, I decided to study
                  <span> Engineering.</span>
                </p>
                <p className="responsive-second-p hide__phone">
                  After graduating from Uni, I spent my first professional years working between <span> Europe </span>
                  and <span> South America</span> in various industries and roles. In 2019, I decided to step out of my comfort zone, pack my bags and move to the other end of the world,{" "}
                  <span>Australia</span>, where I lived for 1 year and a half.
                </p>
                <p className="responsive-second-p">Now, I am a front-end developer with full stack knowledge, always looking for the right balance between functionality and visual impact.</p>
                <p className="responsive-second-p">Some technologies I've been working with recently are:</p>
                <div className="skills__list">
                  <ul>
                    <li>
                      <span>{"> "}</span>Javascript (ES6+)
                    </li>
                    <li>
                      <span>{"> "}</span>Sass
                    </li>
                    <li>
                      <span>{"> "}</span>Liquid
                    </li>
                    <li>
                      <span>{"> "}</span>React Native
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>{"> "}</span>React
                    </li>
                    <li>
                      <span>{"> "}</span>Redux
                    </li>
                    <li>
                      <span>{"> "}</span>Ajax / Axios
                    </li>
                    <li>
                      <span>{"> "}</span>PHP
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>{"> "}</span>MongoDB
                    </li>
                    <li>
                      <span>{"> "}</span>NodeJs
                    </li>
                    <li>
                      <span>{"> "}</span>ExpressJs
                    </li>
                    <li>
                      <span>{"> "}</span>MySQL
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img__wrapper">
                <img className="" src={photo} alt="Carlos Prado" />
                <div className="white__shadow"></div>
                <div className="red__shadow"></div>
              </div>
            </div>
          </section>
          <section id="portfolio" className="portfolio__section">
            <div className="portfolio__wrapper">
              <div className="aps__wrapper">
                <Link to="/portfolio/project/aps">
                  <div>
                    <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg" alt="aps" />
                  </div>
                </Link>
              </div>
              <div className="nemOne__wrapper">
                <Link to="/portfolio/project/nemesonOne">
                  <div>
                    <img src={nemesonchip} alt="nemeson" />
                  </div>
                </Link>
              </div>
              <div className="nemHunt__wrapper">
                <Link to="/portfolio/project/nemesonHunt">
                  <div>
                    <img src={simulacion} alt="nemeson" />
                  </div>
                </Link>
              </div>
              <div className="Inno__wrapper">
                <Link to="/portfolio/project/nemeson">
                  <div>
                    <img src="https://nemeson.es/assets/renderHunt.png" alt="innoaudio" />
                  </div>
                </Link>
              </div>
              <div className="Oir__wrapper">
                <Link to="/portfolio/project/oirdiez">
                  <div>
                    <img src="https://nemesonone.es/assets/Renderagua.png" alt="oir10" />
                  </div>
                </Link>
              </div>
              <div className="WM__wrapper">
                <Link to="/portfolio/project/wavemaps">
                  <div>
                    <img src="https://cdn1.theinertia.com/wp-content/gallery/dylan-brayshaw/5-the-playground.jpg" alt="wm" />
                  </div>
                </Link>
              </div>
              <div className="cpa__wrapper">
                <Link to="/portfolio/project/cpart">
                  <div>
                    <img src={cpzfondo} alt="cpart" />
                  </div>
                </Link>
              </div>
              <div className="procor__wrapper">
                <Link to="/portfolio/project/procorlab">
                  <div>
                    <img src={socialimage} alt="procorlab" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section id="contact" class="bottom__section">
            <section class="contact__section">
              <h2>
                <span>04.</span>Contact.
              </h2>
              <p>Cuéntanos tus dudas y te las resolveremos</p>
              <div className="form__wrapper">
                <form action="#" method="post">
                  <input className="short__input" type="text" placeholder="Nombre" required />
                  <input className="short__input" type="text" placeholder="Apellido" required />
                  <input className="long__input" type="email" placeholder="Correo" required />
                  <input className="long__input" type="text" placeholder="Teléfono" required />
                  <input className="long__input" type="text" placeholder="Movil" required />
                  <textarea rows="7" type="text" placeholder="Consulta" required></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </section>
            <section className="main__footer">
              <a href="#about">
                <span>01.</span>Home
              </a>
              <a href="#Skills">
                <span>02.</span>About
              </a>
              <a href="#portfolio">
                <span>03.</span>Portfolio
              </a>
              <a href="#contact">
                <span>04.</span>Contact
              </a>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

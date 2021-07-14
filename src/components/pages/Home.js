import "./Pages.scss";
import Logo from "../assets/c.png";

import photo from "../assets/photo.jpeg";
import nemesonchip from "../assets/nemesonchip.png";
import cpzfondo from "../assets/cpzfondo.png";
import simulacion from "../assets/simulacion.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="scroller">
          <section className="first__section">
            <nav className="show__nav">
              <img src={Logo} alt="logo" />
              <div className="nav__links">
                <a href="#about">
                  <span>01.</span>About
                </a>
                <a href="#Skills">
                  <span>02.</span>Skills
                </a>
                <a href="#portfolio">
                  <span>03.</span>Portfolio
                </a>
                <a href="#contact">
                  <span>04.</span>Contact
                </a>
              </div>
            </nav>
            <div className="firstSection__textwrapper">
              <h1>Hi, my name is</h1>
              <h2>Carlos Prado.</h2>
              <h3>I bring ideas to life.</h3>
              <p>
                I am a profesional Full stack developer based in Madrid, Spain. I create custom websites, always looking
                for the right balance between functionality and <span>visual impact.</span>
              </p>
              <a href="#about">About me</a>
            </div>
          </section>
          <section id="about" className="about">
            <h2 className="">
              <span>01.</span>About Me
            </h2>

            <div className="about__info">
              <div className="text__wrapper">
                <p className="responsive-second-p">
                  My name is <span>Carlos Prado.</span> Born and raised in Getxo, Spain. As a kid, I always loved to
                  disassemble and then reconstruct everything I came across, and find the logic behind, that's why, when
                  I turned 18, I decided to study
                  <span> Engineering.</span>
                </p>
                <p className="responsive-second-p">
                  After graduating from Uni, I spent my first professional years working between <span> Europe </span>
                  and <span> South America</span> in various industries and roles. In 2019, I decided to step out of my
                  comfort zone, pack my bags and move to the other end of the world, <span>Australia</span>, where I
                  lived for 1 year and a half.
                </p>
                <p className="responsive-second-p">
                  Now, I am a front-end developer with full stack knowledge, always looking for the right balance
                  between functionality and visual impact.
                </p>
                <p className="responsive-second-p">Some technologies I've been working with recently are:</p>
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
                <Link>
                  <div>
                    <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg" />
                  </div>
                </Link>
              </div>
              <div className="nemOne__wrapper">
                <Link>
                  <div>
                    <img src={nemesonchip} />
                  </div>
                </Link>
              </div>
              <div className="nemHunt__wrapper">
                <Link>
                  <div>
                    <img src={simulacion} />
                  </div>
                </Link>
              </div>
              <div className="Inno__wrapper">
                <Link>
                  <div>
                    <img src={cpzfondo} />
                  </div>
                </Link>
              </div>
              <div className="Oir__wrapper">
                <Link>
                  <div>
                    <img src="https://nemesonone.es/assets/Renderagua.png" />
                  </div>
                </Link>
              </div>
              <div className="WM__wrapper">
                <Link>
                  <div>
                    <img src="https://cdn1.theinertia.com/wp-content/gallery/dylan-brayshaw/5-the-playground.jpg" />
                  </div>
                </Link>
              </div>
              <div className="cpa__wrapper">
                <Link>
                  <div>
                    <img src={cpzfondo} />
                  </div>
                </Link>
              </div>
              <div className="procor__wrapper">
                <Link>
                  <div>
                    <img src="https://procorlab903697760.files.wordpress.com/2021/04/detecciontemprana.jpg" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

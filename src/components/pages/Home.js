import "./Pages.scss";

import photo from "../assets/photo.jpeg";

const Home = () => {
  return (
    <>
      <div className="scroller">
        <section className="first__section">
          <h1>Hi, my name is</h1>
          <h2>Carlos Prado.</h2>
          <h3>I bring ideas to life.</h3>
          <p>
            I am a profesional Full stack developer based in Madrid, Spain. I create custom websites, always looking for
            the right balance between functionality and <span>visual impact.</span>
          </p>
          <a href="#about">About me</a>
        </section>
        <section className="about">
          <h2 className="">
            <span>01.</span>About Me
          </h2>

          <div className="about__info">
            <div className="text__wrapper">
              <p className="responsive-second-p">
                My name is <span>Carlos Prado.</span> Born and raised in Getxo, Spain. As a kid, I always loved to
                disassemble and then reconstruct everything I came across, and find the logic behind, that's why, when I
                turned 18, I decided to study
                <span> Engineering.</span>
              </p>
              <p className="responsive-second-p">
                After graduating from Uni, I spent my first professional years working between <span> Europe </span>
                and <span> South America</span> in various industries and roles. In 2019, I decided to step out of my
                comfort zone, pack my bags and move to the other end of the world, <span>Australia</span>, where I lived
                for 1 year and a half.
              </p>
              <p className="responsive-second-p">
                Now, I am a front-end developer with full stack knowledge, always looking for the right balance between
                functionality and visual impact.
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
      </div>
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";

import axios from "../assets/axios.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import css from "../assets/css.png";
import ionic from "../assets/ionic.png";
import js from "../assets/js.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";
import redux from "../assets/react.png";
import sass from "../assets/sass.png";
import shopify from "../assets/shopify.png";
import vue from "../assets/vue.png";
import zorraquino from "../assets/zorraquino.png";
import { ReactComponent as Close } from "../assets/svg/close.svg";

const Modal = ({ showModal, project, closeMe }) => {
  const [containerClass, setContainerClass] = useState("initial");
  const [imageSources, setImageSources] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    containerClass === "" ? setContainerClass("initial") : setContainerClass("");
    const loadImages = async () => {
      if (project) {
        const promises = project?.tecnologies.map((image) => import(`../assets/${image}.png`));
        const sources = await Promise.all(promises);
        setImageSources(sources);
      }
    };
    loadImages();
  }, [showModal]);

  const handleClick = (e) => {
    if (e.target.classList.contains("modal__wrp")) closeMe(e);
  };
  return (
    <div className={"modal__wrp " + showModal} onClick={(e) => handleClick(e)}>
      <div className="close_button" onClick={closeMe}>
        <Close />
      </div>
      <div className={"modal__container " + containerClass}>
        <div className="project__info">
          <h3 className="project__title">{project?.title}</h3>
          <h5 className="project__subtitle">{project?.subtitle}</h5>
          <p className="project__description">{project?.description}</p>
          <div className="project__tecnologies">
            {imageSources?.map((elm, idx) => (
              <img key={idx} className="stack" src={elm.default} alt={elm} />
            ))}
          </div>
        </div>
        <div className="project__img">
          <a href={project?.url} target="_blank" className={project?.url ? "" : "link--disabled"}>
            <img src={project?.img} alt={project?.title} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

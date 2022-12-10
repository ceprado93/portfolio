import { useState, useEffect } from "react";

import axios from "../assets/axios.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import { ReactComponent as Close } from "../assets/svg/close.svg";

const Modal = ({ showModal, project, closeMe }) => {
  const [containerClass, setContainerClass] = useState("initial");

  useEffect(() => {
    console.log("holsaaa");
    containerClass === "" ? setContainerClass("initial") : setContainerClass("");
  }, [showModal]);

  const handleClick = (e) => {
    console.log(e.target);
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
            <img className="stack" src={react} alt="react" />
            <img className="stack" src={axios} alt="Axios" />
            <img className="stack" src={nodejs} alt="node js" />
            <img className="stack" src={mongodb} alt="mongo db" />
          </div>
        </div>
        <div className="project__img">
          <img src={project?.img} alt={project?.title} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

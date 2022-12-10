import { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.scss";

import Navigation from "./layout/Navigation";
import Routes from "./routes/Routes";
import ContactBar from "./layout/ContactBar";
import Footer from "./layout/Footer";
import Logo from "./assets/c.png";

function App() {
  const [start, setStart] = useState(false);
  const [logoClass, setLogoClass] = useState("loading_logo wave");
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLogoClass("loading_logo move wave");
    }, 1000);
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }, []);
  useLayoutEffect(() => {
    setTimeout(() => {
      dispatch({ type: "show" });
    }, 5000);
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  function sendAction() {
    "red" ? dispatch({ type: "show" }) : dispatch({ type: "hide" });
  }
  return (
    <>
      {start ? (
        <>
          <main>
            <Routes />
          </main>
          {/* <ContactBar /> */}
        </>
      ) : (
        <div className="firstScreen">
          <p className={logoClass} data-text="C P">
            C P
          </p>
          {/* <img src={Logo} alt="logo" /> */}
        </div>
      )}
    </>
  );
}

export default App;

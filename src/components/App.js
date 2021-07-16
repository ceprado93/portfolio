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
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }, []);
  useLayoutEffect(() => {
    setTimeout(() => {
      dispatch({ type: "show" });
    }, 5000);
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
          <ContactBar />
        </>
      ) : (
        <div className="firstScreen">
          <img src={Logo} alt="logo" />
        </div>
      )}
    </>
  );
}

export default App;

import { useState, useLayoutEffect } from "react";

import "./App.scss";

import Routes from "./routes/Routes";

function App() {
  const [start, setStart] = useState(false);
  const [logoClass, setLogoClass] = useState("loading_logo wave");

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
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <main>
        <Routes />
      </main>
    </>

    // <>
    //   {start ? (
    //     <>
    //       <main>
    //         <Routes />
    //       </main>
    //       {/* <ContactBar /> */}
    //     </>
    //   ) : (
    //     <div className="firstScreen">
    //       <p className={logoClass} data-text="C P">
    //         C P
    //       </p>
    //       {/* <img src={Logo} alt="logo" /> */}
    //     </div>
    //   )}
    // </>
  );
}

export default App;

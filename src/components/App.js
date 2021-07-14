import "./App.scss";

import Navigation from "./layout/Navigation";
import Routes from "./routes/Routes";
import ContactBar from "./layout/ContactBar";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes />
      </main>
      <ContactBar />
      <Footer />
    </>
  );
}

export default App;

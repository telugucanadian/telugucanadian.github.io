import "./App.css";
import NavBar from "./NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Confessions from "./pages/Confessions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confessions" element={<Confessions />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import NavbarHeader from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
            <NavbarHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      </div>

    </>
  );
}

export default App;

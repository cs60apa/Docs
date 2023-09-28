import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/ContactUs";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Developer from "./pages/Developers";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div className={`min-h-screen
    ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
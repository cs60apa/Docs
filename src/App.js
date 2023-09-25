import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`min-h-screen
    ${darkMode ? "dark" : "light"}`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div></div>
      <Footer />
    </div>
  );
}

export default App;

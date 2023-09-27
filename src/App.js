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
      <div className="sticky top-0 text-start hidden md:flex flex-col py-4 border-none box-border h-screen md:w-60 lg:w-80 hover:overflow-y-scroll">
        <div className="md:mx-10 lg:mx-20 text-base space-y-2">
          <h1 className="font-bold">Getting started</h1>
          <p className="text-[#969697]">Introduction</p>
          <h1 className="font-bold">Installation</h1>
          <p className="text-[#969697]">components.json</p>
          <p className="text-[#969697]">Theming</p>
          <p className="text-[#969697]">Darkmode</p>
          <p className="text-[#969697]">CLI</p>
          <p className="text-[#969697]">Typography</p>
          <p className="text-[#969697]">Figma</p>
          <p className="text-[#969697]">Changelog</p>
          <p className="text-[#969697]">About</p>
        </div>
        <div className="md:mx-10 lg:mx-20 text-base space-y-2 py-5">
          <h1 className="font-bold">Installation</h1>
          <p className="text-[#969697]">Next.js</p>
          <p className="text-[#969697]">Vite</p>
          <p className="text-[#969697]">Remix</p>
          <p className="text-[#969697]">Gatsby</p>
          <p className="text-[#969697]">Astro</p>
          <p className="text-[#969697]">Laravel</p>
          <p className="text-[#969697]">Manual</p>
        </div>
        <div className="md:mx-10 lg:mx-20 text-base space-y-2">
          <h1 className="font-bold">Dark Mode</h1>
          <p className="text-[#969697]">Next.js</p>
          <p className="text-[#969697]">Vite</p>
        </div>
        <div className="md:mx-10 lg:mx-20 text-base space-y-2 py-5">
          <h1 className="font-bold">Components</h1>
          <p className="text-[#969697]">Next.js</p>
          <p className="text-[#969697]">Vite</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

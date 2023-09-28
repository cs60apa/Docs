import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Docs from "./pages/Docs";
import Developer from "./pages/Developer";
import HeaderLinks from "./pages/HeaderLinks";
import FooterLinks from "./pages/FooterLinks";

function App() {
  return (
    <div>
      <HeaderLinks />
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterLinks />
    </div>
  );
}

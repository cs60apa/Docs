import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Developer from './pages/Developer';
import HeaderSimple from './components/HeaderSimple';



function App() {
  return (
    <div>
      <HeaderSimple />
      <Routes>
        <Route path="/" element={<Developer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
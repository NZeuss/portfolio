// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import About from './about/About.js';
import Projects from './projects/Projects.js';
import { HashRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <HashRouter>

        <div className="App">
          <Navbar />
          <div id="bg"></div>
          {/* <Slideshow /> */}
          <Routes>
            <Route path="/" element={<Slideshow />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
    </HashRouter>
    
    
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
///////////////////////////
import HomePageReal from './pages/home/HomePage.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import About from "./pages/about/about.jsx";
import Resume from './pages/resume/resume.jsx';
import Work from './pages/work/work.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageReal />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/About' element={<About />} />
        {/*<Route path='/work/:id' element={<Work />} />*/}
        {<Route path='/work' element={<Work />} />}
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

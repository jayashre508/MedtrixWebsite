import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OurWork from './Pages/OurWork';
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

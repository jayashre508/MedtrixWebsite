import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OurWork from './Pages/OurWork';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/ourwork" element={<OurWork />} /> {/* Our Work route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

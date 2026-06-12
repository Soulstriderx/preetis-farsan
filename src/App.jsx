import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import More from "./pages/More";
import Menu from "./pages/Menu";
import './App.css'

function App() {
return (
    <>
      <Router>
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App

import "./App.css";

//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Publications from "./Pages/Publications";
import Team from "./Pages/Team";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

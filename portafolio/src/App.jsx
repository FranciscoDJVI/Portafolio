import "./App.css";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Estudies from "./components/Estudies.jsx";
import Skills from "./components/Skills";
import ProjectPersonal from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/presentation" element={<PresentationText />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/estudies" element={<Estudies />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<ProjectPersonal />} />
    </Routes>
  );
}

export default App;

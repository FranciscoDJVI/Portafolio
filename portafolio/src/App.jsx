import "./App.css";
import FadeInSection from "./components/FadeInsection";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import ProjectPersonal from "./components/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/presentation" element={<PresentationText />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<ProjectPersonal />} />
    </Routes>
  );
}

export default App;

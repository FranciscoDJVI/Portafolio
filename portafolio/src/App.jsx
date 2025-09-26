import "./App.css";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import ProjectPersonal from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="card-principal">
        <PresentationText />
        <Hobbies />
      </div>
      <Skills />
      <ProjectPersonal />
    </div>
  );
}

export default App;

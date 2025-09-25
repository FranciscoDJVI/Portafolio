import "./App.css";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="card-principal">
        <PresentationText />
        <Hobbies />
      </div>
      <Skills />
    </div>
  );
}

export default App;

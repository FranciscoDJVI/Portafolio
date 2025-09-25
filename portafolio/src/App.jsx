import "./App.css";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Avatar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PresentationText />
        <Hobbies />
      </div>
      <Skills />
    </>
  );
}

export default App;

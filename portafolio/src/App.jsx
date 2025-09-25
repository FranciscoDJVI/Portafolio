import "./App.css";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <>
      <Avatar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PresentationText />
        <Hobbies />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import FadeInSection from "./components/FadeInsection";
import Avatar from "./components/Avatar";
import PresentationText from "./components/PresentationText";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import ProjectPersonal from "./components/Projects";
import NavBar from "./components/Navbar";

function Home() {
  return (
    <div className="container">
      <NavBar />
      <FadeInSection>
        <Avatar />
      </FadeInSection>
      <FadeInSection>
        <div className="card-principal">
          <PresentationText />
          <Hobbies />
        </div>
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <ProjectPersonal />
      </FadeInSection>
    </div>
  );
}

export default Home;

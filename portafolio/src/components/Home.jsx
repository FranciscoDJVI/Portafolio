import Avatar from "./Avatar";
import PresentationText from "./PresentationText";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import ProjectPersonal from "./Projects";
import NavBar from "./Navbar";
import FadeInSection from "./FadeInSection";

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

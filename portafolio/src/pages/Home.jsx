import Avatar from "../components/Avatar";
import PresentationText from "../components/PresentationText";
import Hobbies from "../components/Hobbies";
import Estudies from "../components/Estudies.jsx";
import Skills from "../components/Skills";
import ProjectPersonal from "../components/Projects";
import NavBar from "../components/Navbar";
import FadeInSection from "../components/FadeInSection";
import { ContactForm } from "./ContactForm";
import ThemeToggle from "../components/ThemeToggle";
import { useState, useEffect } from "react";

function Home() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="container">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <NavBar />
      <FadeInSection>
        <Avatar />
      </FadeInSection>
      <FadeInSection>
        <div className="card-principal">
          <PresentationText />
          <Hobbies />
          <Estudies />
        </div>
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <ProjectPersonal />
      </FadeInSection>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
    </div>
  );
}

export default Home;


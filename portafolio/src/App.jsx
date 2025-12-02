import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ContactForm } from "./pages/ContactForm";

const Home = lazy(() => import("./pages/Home.jsx"));
const Avatar = lazy(() => import("./components/Avatar"));
const PresentationText = lazy(() => import("./components/PresentationText"));
const Hobbies = lazy(() => import("./components/Hobbies"));
const Estudies = lazy(() => import("./components/Estudies.jsx"));
const Skills = lazy(() => import("./components/Skills"));
const ProjectPersonal = lazy(() => import("./components/Projects"));

import ThemeToggle from "./components/ThemeToggle";
import { useState, useEffect } from "react";

function App() {
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
    <div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/presentation" element={<PresentationText />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/estudies" element={<Estudies />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectPersonal />} />
          <Route path="/contacts" element={<ContactForm />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;

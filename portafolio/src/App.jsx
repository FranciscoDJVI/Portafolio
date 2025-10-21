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

function App() {
  return (
    <div>
      <suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/presentation" element={<PresentationText />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/estudies" element={<Estudies />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectPersonal />} />
          <Route path="/contacts" element={<ContactForm />}></Route>
        </Routes>
        <Toaster />
      </suspense>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/presentation">
        Presentacion
      </Link>
      <Link className="link" to="/hobbies">
        Hobbies
      </Link>
      <Link className="link" to="/estudies">
        Estudios
      </Link>
      <Link className="link" to="/skills">
        Skils
      </Link>
      <Link className="link" to="/projects">
        Proyectos
      </Link>
    </nav>
  );
}

export default NavBar;

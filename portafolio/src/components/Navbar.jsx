import { Link } from "react-router-dom";

const customStyleLink = {
  textDecoration: "none",
  margin: "10px",
  color: "#dddddd",
  fontSize: "2rem",
  textShadow: "0 0 3px #000000 ",
};

const customStyleNav = {
  background: "var(--principal-color)",
};

function NavBar() {
  return (
    <nav className="navbar" style={customStyleNav}>
      <Link style={customStyleLink} to="/presentation">
        Presentacion
      </Link>
      <Link style={customStyleLink} to="/hobbies">
        Hobbies
      </Link>
      <Link style={customStyleLink} to="/skills">
        Skils
      </Link>
      <Link style={customStyleLink} to="/projects">
        Proyectos
      </Link>
    </nav>
  );
}

export default NavBar;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="theme-icon"
      />
    </button>
  );
}

export default ThemeToggle;

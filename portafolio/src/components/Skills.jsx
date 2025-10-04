import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faGit,
  faGithub,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Skills
      </motion.h2>
      <motion.aside
        className="icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FontAwesomeIcon icon={faPython} />
      </motion.aside>
      <motion.aside
        className="icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FontAwesomeIcon icon={faReact} />
      </motion.aside>
      <motion.aside
        className="icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FontAwesomeIcon icon={faGit} />
      </motion.aside>
      <motion.aside
        className="icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </motion.aside>
      <motion.aside
        className="icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FontAwesomeIcon icon={faJs} />
      </motion.aside>
    </div>
  );
}

export default Skills;

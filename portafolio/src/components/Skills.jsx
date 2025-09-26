import React from "react";
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
      <aside className="icons">
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faJs} />
      </aside>
    </div>
  );
}

export default Skills;

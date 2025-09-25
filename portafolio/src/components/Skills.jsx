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

const StyleFontAweson = {
  filter: "drop-shadow(2px 2px 3px  #dddddd)",
};

function Skills() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Skills
      </motion.h2>
      <FontAwesomeIcon icon={faPython} size="4x" style={StyleFontAweson} />
      <FontAwesomeIcon icon={faReact} size="4x" style={StyleFontAweson} />
      <FontAwesomeIcon icon={faGit} size="4x" style={StyleFontAweson} />
      <FontAwesomeIcon icon={faGithub} size="4x" style={StyleFontAweson} />
      <FontAwesomeIcon icon={faJs} size="4x" style={StyleFontAweson} />
    </div>
  );
}

export default Skills;

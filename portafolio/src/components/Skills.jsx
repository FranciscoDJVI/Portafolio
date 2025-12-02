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
      <div className="icons" data-tooltip="Python">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faPython} />
        </motion.div>
      </div>
      <div className="icons" data-tooltip="React">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faReact} />
        </motion.div>
      </div>
      <div className="icons" data-tooltip="Git">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faGit} />
        </motion.div>
      </div>
      <div className="icons" data-tooltip="GitHub">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </motion.div>
      </div>
      <div className="icons" data-tooltip="JavaScript">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faJs} />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;

import { motion } from "framer-motion";
import avatar from "../assets/images/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Avatar() {
  return (
    <div className="avatar">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="avatar-img"
        src={avatar}
        alt="Avatar"
        fetchPriority="high"
      ></motion.img>
      <motion.aside
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1>Francisco Vanegas Ibarguen </h1>
        <h2>Ingeniero de sistemas | Desarrollador Jr.</h2>
        <h2>Colombia</h2>
        <a
          href="https://github.com/FranciscoDJVI"
          target="_blank"
          rel="nooponer noreferrer"
          alt="github"
          aria-label="Read more information abnout github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-vanegas-6a899238b/"
          target="_blank"
          rel="nooponer noreferrer"
          alt="linkedin"
          aria-label="Read more informaation about linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </motion.aside>
    </div>
  );
}

export default Avatar;

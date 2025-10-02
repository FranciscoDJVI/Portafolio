import React from "react";
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
        <h1>Francisco Vanegas</h1>
        <h3>Ingeniero de sistemas</h3>
        <h3>vanegasfrancisco415@gmail.com</h3>
        <h3>Colombia</h3>
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
          href="https://www.linkedin.com/in/francisco-vanegas-134522229"
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

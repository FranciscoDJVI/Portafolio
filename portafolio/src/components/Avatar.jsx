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
      ></motion.img>
      <motion.ol
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2>Francisco Vanegas</h2>
        <li>
          <a
            href="https://github.com/FranciscoDJVI"
            target="_blank"
            rel="nooponer noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francisco-vanegas-134522229"
            target="_blank"
            rel="nooponer noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </motion.ol>
    </div>
  );
}

export default Avatar;

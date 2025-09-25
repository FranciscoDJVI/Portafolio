import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/images/avatar.webp";

const customStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  padding: "0",
  marginTop: "100px",
  color: "var(--secondary-color)",
};
const customImg = {
  width: "400px",
  height: "400px",
};

const styleLi = {
  backgroundColor: "#3A37E6",
  fontSize: "24px",
  fontStyle: "none",
  marginTop: "5px",
  borderRadius: "25px",
  width: "fit-content",
  padding: "10px",
};

function Avatar() {
  return (
    <div className="avatar" style={customStyle}>
      <motion.img
        style={customImg}
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
        style={{ margin: "20px" }}
      >
        <h2>Francisco Vanegas</h2>
        <li style={styleLi}>
          <a
            style={{ textDecoration: "none", color: "var(--secondary-color)" }}
            href="https://github.com/FranciscoDJVI"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Github
          </a>
        </li>
        <li style={styleLi}>
          <a
            style={{ textDecoration: "none", color: "var(--secondary-color)" }}
            href="https://www.linkedin.com/in/francisco-vanegas-134522229"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Linkedin
          </a>
        </li>
      </motion.ol>
    </div>
  );
}

export default Avatar;

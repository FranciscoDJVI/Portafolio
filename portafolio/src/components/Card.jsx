import React from "react";
import { motion } from "framer-motion";

const styleCard = {
  textAlign: "justify",
  fontSize: "14px",
  boxShadow: "3px 3px 15px #0d1b2a,-3px -3px 15px #babecc",
  background: "var(--principal-color)",
  color: "#f1f1f1f1",
  borderRadius: "15px",
  padding: "30px",
  width: "300px",
  height: "200px",
  marginRight: "10px",
  marginTop: "10px",
};

function Card(props) {
  return (
    <motion.div
      style={styleCard}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2>{props.title}</h2>
      <p>{props.textInfo}</p>
    </motion.div>
  );
}

export default Card;

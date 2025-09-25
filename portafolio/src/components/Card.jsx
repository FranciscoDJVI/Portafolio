import React from "react";
import { motion } from "framer-motion";

const styleCard = {
  textAlign: "justify",
  fontSize: "14px",
  border: "5px #dddddd solid",
  borderRadius: "15px",
  padding: "30px",
  width: "300px",
  height: "auto",
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

import React from "react";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div
      className="card"
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

import "../../../src/App.css";
import React from "react";
import { motion } from "framer-motion";

function Hemocentros() {
  return (
    <motion.div
      id="hemocentros"
      className="hemocentros-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Conteúdo dos hemocentros aqui */}
    </motion.div>
  );
}

export default Hemocentros;
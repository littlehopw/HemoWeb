import React from "react";
import vectorMessage from "../../assets/vector-message.png";
import { motion } from "framer-motion";

function Message() {
  return (
    <motion.div
      className="bg-[var(--light-background-color)] flex flex-col items-center justify-center mt-20"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={vectorMessage}
        alt="Mensagem"
        className="mt-10 mb-10 w-[70%] h-[70%] sm:w-[91%] sm:h-[91%] min-w-[280px] max-w-[560px] transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <h2
        className="font-bold text-[var(--primary-color-4)] mt-4 text-center"
        style={{
          fontFamily: "var(--menu-poppins)",
          fontSize: "var(--h2-poppins)",
        }}
      >
        Doe sangue
      </h2>
      <h3
        className="font-bold text-[var(--primary-color-4)] text-center mb-20"
        style={{
          fontFamily: "var(--menu-poppins)",
          fontSize: "38px",
        }}
      >
        salve vidas
      </h3>
    </motion.div>
  );
}

export default Message;
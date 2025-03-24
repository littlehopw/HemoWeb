import React from "react";
import vectorMessage from "./assets/vector-message.png";

function Message() {
  return (
    <div className="message-container">
      <img src={vectorMessage} alt="Mensagem" className="message-image" />
      <h2>Doe sangue</h2>
      <h3>salve vidas</h3>
    </div>
  );
}

export default Message;
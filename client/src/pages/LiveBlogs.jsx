import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5100", { autoConnect: false });
socket.connect();

import SingleMessage from "../components/SingleMessage";

const LiveBlogs = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const handleSubmit = () => {
    socket.emit("sendMessage", { message });
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages &&
          messages.map((message, index) => {
            return <SingleMessage key={index} {...message} />;
          })}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          name="message"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default LiveBlogs;

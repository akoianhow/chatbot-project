import { useState } from "react";
import { Chatbot } from "supersimpledev";

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setMessage(event.target.value);
  }
  async function handleSend() {
    if (message === "") {
      return;
    }
    setMessage("");
    setIsLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: message,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = await Chatbot.getResponseAsync(message);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setIsLoading(false);
  }
  return (
    <div>
      <input
        onChange={() => handleChange(event)}
        className="msg-input"
        type="text"
        size="50"
        value={message}
        placeholder="Enter your message here..."
      ></input>
      <button onClick={handleSend} className="send-button">
        Send
      </button>
    </div>
  );
}

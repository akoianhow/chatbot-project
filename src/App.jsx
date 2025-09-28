import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello", sender: "user", id: 1 },
    { message: "hello there", sender: "robot", id: 2 },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;

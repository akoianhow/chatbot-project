import ChatMessage from "./ChatMessage";
export default function ChatMessages({ chatMessages }) {
  return (
    <div className="chat-message-container">
      {chatMessages.map((chatMessage, id) => {
        return <ChatMessage key={id} {...chatMessage} />;
      })}
    </div>
  );
}

import robotIcon from "./../assets/robot-icon.jpg";
import userIcon from "./../assets/user-icon.png";
export default function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={robotIcon} className="avatar"></img>}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={userIcon} className="avatar"></img>}
    </div>
  );
}
